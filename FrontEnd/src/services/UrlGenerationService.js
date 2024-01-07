import reverseProxyApi from "./HttpClient";
import { useNavigate } from "react-router-dom";

const urlGenerationService = {
    generateUrl: (data, port)=>{
        return reverseProxyApi.post(`generate-url/${port}`,data)
    }
}
export default urlGenerationService;