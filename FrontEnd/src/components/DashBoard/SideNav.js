import React from 'react'
import 
{BsCart3, BsGrid1X2Fill, BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, 
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill,BsApp,BsArrowRightShort,BsArrowDownUp}
 from 'react-icons/bs'
 import {TbLogout, TbUser} from 'react-icons/tb'

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsApp  className='icon_header'/> Reverse-Proxy
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>
        <div className="user">
                <TbUser className='user-icon'/> 
                <div>
                    <p>User</p>
                    <p>Pharmacist</p>
                </div>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsGrid1X2Fill className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsArrowDownUp className='icon'/> Tunnel
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsListCheck className='icon'/> Billing
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <TbLogout className='icon'/> LogOut
                </a>
            </li>
        </ul>
    </aside>
  )
}

export default Sidebar