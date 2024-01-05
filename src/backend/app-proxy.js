const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const httpProxy = require("http-proxy");
const cors = require("cors");

const userRoutes = require("./routes/userRoute");

const app = express();

app.use(cors());

app.use(express.json());
app.use("/", userRoutes);

app.use((req, res, next) => {
  console.log("Request received");
  next();
});
/*
app.use((req, res, next) => {
  res.status(201);
  res.json({ msg: "Request is being traited" });
  next();
});

app.use(
  "/api",
  (req, res, next) => {
    // Add data to the request
    req.query = { message: "Data from proxy server" };
    next();
  },
  createProxyMiddleware({
    target: "http://localhost:4000",
    changeOrigin: true,
  })
);
*/

const proxy = httpProxy.createProxyServer();

const tunnels = [];

app.post("/create-tunnel", (req, res) => {
  const publicUrl =
    "http://localhost:4000/" + Math.random().toString(36).substring(7);

  const tunnel = {
    publicUrl,
    targetUrl: req.body.targetUrl,
  };

  tunnels.push(tunnel);

  res.json({ publicUrl });
  //req.pipe(request(publicUrl)).pipe(res);
});

app.use((req, res) => {
  const tunnel = tunnels.find(
    (t) => t.publicUrl === req.hostname + req.originalUrl
  );

  if (tunnel) {
    // Redirection de la demande vers l'URL cible du tunnel
    proxy.web(req, res, { target: tunnel.targetUrl });
  } else {
    // Réponse 404 si aucun tunnel correspondant n'est trouvé
    res.sendStatus(404);
  }
});

proxy.on("error", (err, req, res) => {
  res.status(500).send("Erreur lors de la redirection de la demande.");
});

module.exports = app;
