const express = require('express');
const http = require('http');
const httpProxy = require('http-proxy');

const app = express();
const proxy = httpProxy.createProxyServer({});

app.get('/startTunnel', (req, res) => {
  const targetPort = parseInt(req.query.targetPort);
  const proxyPort = parseInt(req.query.proxyPort);

  if (!targetPort || !proxyPort) {
    res.status(400).json({ error: 'Les paramètres targetPort et proxyPort sont requis.' });
    return;
  }

  const server = http.createServer((req, res) => {
    proxy.web(req, res, { target: `http://localhost:${targetPort}` });
  });

  server.listen(proxyPort, () => {
    console.log(`Serveur de tunneling écoutant sur le port ${proxyPort}`);
    res.json({ message: `Serveur de tunneling écoutant sur le port ${proxyPort}` });
  });
});

app.listen(8000, () => {
  console.log('API de tunneling démarrée sur le port 8000');
});