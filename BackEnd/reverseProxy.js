const express = require('express');
const httpProxy = require('http-proxy');

const app = express(); //serveur Node.js.
const proxy = httpProxy.createProxyServer({}); //création du proxy HTTP

app.all('/callback/:port', (req, res) => {
  const port = req.params.port; //  Extraction du numéro de port de la requête à l'aide de req.params.port

   // Utilisons le numéro de port pour définir la cible (target) du proxy.
  const target = `http://localhost:${port}`; // Ici  la cible est définie sur "http://localhost:port"

  // la méthode proxy.web() va router la requête vers la cible spécifiée (par le billet du port)
  proxy.web(req, res, { target });
});

// serveur en écoute les connexions entrantes sur le port 3000
app.listen(3000, () => {
  console.log('Reverse proxy server is running on port 3000');
});



 

