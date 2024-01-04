import axios from "axios";
let token = ""
if(JSON.parse(localStorage.getItem('userData'))){
    token = JSON.parse(localStorage.getItem('userData')).jwt
}
const instance = axios.create({
    baseURL: 'http://localhost:3001/api/', // Remplacez cela par votre URL de base
    timeout: 5000, // Délai d'attente pour les requêtes en millisecondes
    headers: {
      'Authorization': 'Bearer '+token, // Remplacez cela par votre token d'authentification si nécessaire
      'Content-Type': 'application/json', // Remplacez cela par le type de contenu approprié
      'Accept': 'application/json'
    },
  });

  const reverseProxyApi = {
    get: (url , body)=>instance.get(url, body).then((response)=>response.data),
    post: (url , body, headers)=>instance.post(url, body, headers).then((response)=>response.data),
    put: (url , body)=>instance.put(url, body).then((response)=>response.data),
  }
  export default reverseProxyApi;