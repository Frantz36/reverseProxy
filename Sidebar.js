import React from 'react'
import { NavLink } from 'react-router-dom';

import { TbSquareLetterA } from "react-icons/tb";
import { RxRocket } from "react-icons/rx";
import { VscServerEnvironment } from "react-icons/vsc";
import { RiSecurePaymentLine } from "react-icons/ri";
import { MdOutlineSettingsSuggest } from "react-icons/md";

import '../styles/components/Sidebar.css'

const Sidebar = ({ show }) => {

    const menuItems = [
        {
            name: 'Getting Started',
            path: '/Homepage',
            icon: <RxRocket size={18} color='rgb(188, 216, 240)' />
        },
        {
            name: 'Endpoints',
            path: '/Endpoints',
            icon: <VscServerEnvironment size={18} color='rgb(188, 216, 240)' />
        },
        {
            name: 'Billing',
            path: '/Billing',
            icon: <RiSecurePaymentLine size={18} color='rgb(188, 216, 240)' />
        },
        {
            name: 'Settings',
            path: '/Settings',
            icon: <MdOutlineSettingsSuggest size={18} color='rgb(188, 216, 240)' />
        },
    ]

    return (
        <div style={{ width: show ? "300px" : "50px" }} className='sidebar'>
            <div style={{ paddingLeft: show ? "10px" : "10px" }} className='select'>
                <TbSquareLetterA size={30} color='white' />
                <select style={{ display: show ? "block" : "none" }} className='currentAccount'>
                    <option value={""} selected>nameofcurrentuseraccount</option>
                    <option value={""} disabled>~~Accounts~~</option>
                    <option value={""}>nameofcurrentuseraccount</option>
                    <option value={""}>Add an Account</option>
                </select>
            </div>
            {
                menuItems.map((item, index) => (
                    <NavLink 
                        to={item.path} 
                        key={index} 
                        className='nav_link' 
                        activeClassName="active"
                        >
                        <div className='icon'>{item.icon}</div>
                        <div style={{ display: show ? "block" : "none" }} className='link_name'>{item.name}</div>
                    </NavLink>
                ))
            }
        </div>
    )
}

export default Sidebar
