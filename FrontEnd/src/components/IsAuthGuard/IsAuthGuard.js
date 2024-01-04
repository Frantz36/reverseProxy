import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";


const IsAuthGuard = ({children})=>{
    console.log("Bonjour")
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState(null)
    useEffect(()=>{
        if (localStorage.getItem('userData')) {
            setUserData(JSON.parse(localStorage.getItem('userData')));
            navigate("/dashboard")
        }
    },[])

    return children
}

export default IsAuthGuard;