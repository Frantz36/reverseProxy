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
  try {
    const tunnel = await localtunnel({ port: portNumber });
    return tunnel.url
  } catch (error) {
    console.log("Erreur :", error)
  }
    
};
export function getDateFormatted() {
  const today = new Date();

  const day = String(today.getDate()).padStart(2, '0');
  const month = String(today.getMonth() + 1).padStart(2, '0'); // Les mois commencent à 0, donc ajout de 1
  const year = today.getFullYear();

  return `${day}-${month}-${year}`;
}


