import React, { useEffect, useState } from "react";
import "./style.css"
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsArrowDownUp, BsListCheck}
 from 'react-icons/bs'
import Sidebar from "./SideNav";
import Header from "./Header";

function DashBoard(){

  const [user, setCurrentUser] = useState(null)
    useEffect(()=>{
        let userData =JSON.parse(localStorage.getItem('userData'))
        setCurrentUser(userData)
    }, [])

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  
 

return (

<div className='grid-container dashboard-container'>
  <Header OpenSidebar={OpenSidebar}/>
  <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
  <main className='main-container'>
      <div className='main-title'>
          <h3>DASHBOARD</h3>
      </div>

      <div className='main-cards'>
          <div className='card'>
              <div className='card-inner'>
                  <h3>Tunnels</h3>
                  <BsArrowDownUp className='card_icon'/>
              </div>
              <h1>{user?user.user.generatedUrls.length:0}</h1>
          </div>
          <div className='card'>
              <div className='card-inner'>
                  <h3>Bills</h3>
                  <BsListCheck className='card_icon'/>
              </div>
              <h1>{user?user.user.factures.length:0}</h1>
          </div>
      </div>

  </main>
</div>
)
}




export default DashBoard