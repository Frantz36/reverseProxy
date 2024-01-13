const http = require('http');
const httpProxy = require('http-proxy');

const targetHost = 'localhost'; // L'hôte du serveur d'application en localhost
const targetPort = 3000; // Le port du serveur d'application en localhost
const proxyPort = 8000; // Le port sur lequel votre API de tunneling sera écoutée localement

// Créer une instance du serveur proxy
const proxy = httpProxy.createProxyServer({});

// Gérer les erreurs du proxy
proxy.on('error', (err, req, res) => {
  console.error('Erreur du proxy:', err);
  res.statusCode = 500;
  res.end('Erreur du proxy');
});

// Créer un serveur pour l'API de tunneling
const server = http.createServer((req, res) => {
  // Rediriger toutes les requêtes vers le serveur d'application en localhost
  proxy.web(req, res, { target: `http://${targetHost}:${targetPort}` });
});

// Démarrer le serveur de tunneling
server.listen(proxyPort, () => {
  console.log(`Serveur de tunneling écoutant sur le port ${proxyPort}`);
});