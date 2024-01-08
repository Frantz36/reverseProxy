import React, { useState } from 'react'
import "./endpoints.css"
//import { IoIosDocument } from "react-icons/io";

const Endpoints = () => {
    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("tunnel-popup")
        setTimeout(() => showPopup("hide"), 30000)
    }
    return (
        <div className='cover'>
            <h1 className='te'>Endpoints</h1>
            <p className='mot'>An Endpoints is the access point for anything you use with ReverseProxy.
                Endpoints include TCP addresses of domains for apps you put online,or devices
                you connect to with ReverseProxy. All ReverseProxy accounts get one free Endpoints.
            </p>

            <input type="text" placeholder='entrer votre nom de domain' />



            <div className='tunnel-btn' onClick={popup}>start a tunnel</div>
            <p className='text'></p>
            <div className='alt-tunnel'>

            </div>
            <div className={popupStyle}>
                <h2 className=''>Your tunnel</h2>
                <select>
                    <option value="option1">Start a tunnel from command line</option>
                    <option value="option2">Start a tunnel from a config file</option>
                    <option value="option3">Start a tunnel with a Docker container</option>
                </select>
                <p>Copy and paste the following into your terminal</p>
                <pre>tunnel tunnel.com</pre>
            </div>
        </div>
    )
}

export default Endpoints