import React from 'react'
import { LuListStart } from "react-icons/lu";
import { LiaHeadsetSolid } from "react-icons/lia";
import { FaHouseUser } from "react-icons/fa";
import '../styles/components/Navbar.css'

const Navbar=({onClick}) => {
  return (
    <div className='navbar'>
        <button className='nav1' onClick={onClick}>
            <LuListStart size={20}/>
        </button>
        <div className='nav2'>
            <div>
                <LiaHeadsetSolid size={20}/>
            </div>
            <div>
                <FaHouseUser size={20}/>
            </div>
        </div>
    </div>
  );
}

export default Navbar
