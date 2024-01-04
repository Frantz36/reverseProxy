import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const AuthGuard = ({children})=>{
    const navigate = useNavigate();
    
    const [userData, setUserData] = useState(null)
    useEffect(()=>{
        if (localStorage.getItem('userData')) {
            setUserData(JSON.parse(localStorage.getItem('userData')))
        }
        else{
            navigate("/")
        }
    },[])

    return children
}

export default AuthGuard;