import { getPublicIP, urlGeneration } from "../Utils/UrlGeneration.js"
import UserModel from "../Models/UserModel.js"
import { signinToken } from "../Utils/AuthConfig.js"
//get generated url and public ip of tunnel's creator
export const generateUrl = async (req, res)=>{
    try {
        const userId = req.body.userId
        const localPort = req.body.localPort;
        const ip = await getPublicIP()
        const urlGenerated = await urlGeneration(req.params.port)
        
        if (userId) {
            const user = await  UserModel.findOne({_id : userId});
            const token = signinToken(user);
            if (user.generatedUrls) {
                user.generatedUrls.push({
                    localPort : localPort,
                    url: urlGenerated,
                    createdAt : new Date()
                });
                user.save()
                
                res.status(200).send({
                    user : user,
                    jwt : token
                    
                })

            }
            else{
                user.generatedUrls = [{
                    generatedUrl : urlGenerated,
                    publicIpCreator : ip,
                    localport : localPort,
                    createdAt : new Date()
                }]
                user.save()
                res.status(200).send({
                    user : user,
                    
                })
               
            }
        } else {
            res.status(404).send("User not found")
        }
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}