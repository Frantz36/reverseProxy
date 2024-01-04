import { getPublicIP, urlGeneration } from "../Utils/UrlGeneration.js"

//get generated url and public ip of tunnel's creator
export const generateUrl = async (req, res)=>{
    try {
        const userToken = sess
        const ip = await getPublicIP()
        const urlGenerated = await urlGeneration(req.params.port)
        res.status(200).send({
            generatedUrl : urlGenerated,
            publicIpCreator : ip
        })
    } catch (error) {
        res.status(500).send({ message: error.message });
    }
}