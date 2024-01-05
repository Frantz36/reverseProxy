import React, { useState } from "react";
import "./style.css"
import 
{ BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill, BsArrowDownUp, BsListCheck}
 from 'react-icons/bs'
import Sidebar from "./SideNav";
import Header from "./Header";

function DashBoard(){

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];
 

return (

<div className='grid-container'>
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
              <h1>300</h1>
          </div>
          <div className='card'>
              <div className='card-inner'>
                  <h3>Bills</h3>
                  <BsListCheck className='card_icon'/>
              </div>
              <h1>12</h1>
          </div>
      </div>

  </main>
</div>
)
}




export default DashBoard