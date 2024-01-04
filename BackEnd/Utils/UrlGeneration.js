import { get } from "http";
import https from "https"
import localtunnel from "localtunnel";
import { publicIp, publicIpv4 } from "public-ip";

//Recupération d'adresse public
export async function getPublicIP() {
    try {
      const ip = await publicIpv4();
      console.log('Adresse IP publique :', ip);
      return ip;
    } catch (error) {
      console.error('Erreur lors de la récupération de l\'adresse IP publique :', error.message);
      return null;
    }
  }

//Generation de lien pour un port donné
export const urlGeneration = async (portNumber) => {
    const tunnel = await localtunnel({ port: portNumber });
    return tunnel.url
};


