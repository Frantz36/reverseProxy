import React, { useEffect, useState }  from "react";
import { useTable } from "react-table";
import "./style.css"
import Sidebar from "../DashBoard/SideNav";
import Header from "../DashBoard/Header";
import urlGenerationService from "../../services/UrlGenerationService";

function Tunnel(){
    const [localPort, setLocalPort] = useState(0)
    const [user, setCurrentUser] = useState(null)
    const [userGeneratedUrls, setUserGeneratedUrls] = useState(null)
    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('userData')).user
        setCurrentUser(userData)
        setUserGeneratedUrls(userData.generatedUrls)
    }, [])
    
    useEffect(()=>{
        console.log(user)
    }, [user])
    useEffect(()=>{
        console.log(userGeneratedUrls)
    }, [userGeneratedUrls])


    const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

    const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
    }
    const onGenerateUrl = async (e)=>{
        e.preventDefault()
        try {
            const response = await urlGenerationService.generateUrl({
                userId : user._id,
                localPort : localPort
            },localPort)
            localStorage.setItem('userData', JSON.stringify(response))
            console.log("responser",response);
            setUserGeneratedUrls(response.user.generatedUrls)
            
        } catch (error) {
            console.log(error)
        }
    }
    
  
    return (
        <div className='grid-container'>
            <Header OpenSidebar={OpenSidebar}/>
            <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
            <div className="container">
                <div className="tunnel-form">
                    <form onSubmit={onGenerateUrl} method='POST'>
                        <div className="infield">
                            <input onChange={(e)=>setLocalPort(e.target.value)} type="number" placeholder="Local Port" name="name" />
                            <label></label>
                        </div>
                        <button>Generate Url</button>
                    </form>
                </div>

                <div className="tunnels-list">
                    <table>
                        <thead>
                            <tr>
                                <th>
                                    Port
                                </th>
                                <th>
                                    Url
                                </th>
                                <th>
                                    Date Creation
                                </th>
                            </tr>
                        </thead>
                        <tbody >
                            {
                                userGeneratedUrls?userGeneratedUrls.map((url, index)=>{
                                    return (
                                        <tr>
                                            <td>{url.localPort}</td>
                                            <td>{url.url}</td>
                                            <td>{url.createdAt}</td>
                                        </tr>
                                    )
                                }):<></>
                            }
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Tunnel;