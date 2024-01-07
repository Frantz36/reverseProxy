import reverseProxyApi from "./HttpClient";
import { useNavigate } from "react-router-dom";

const authentificationService = {
    signUp: (data)=>{
        return reverseProxyApi.post('auth/register',data)
    },
    login : (data)=>{
        return reverseProxyApi.post('auth/login', data)
    }
}
export default authentificationService;