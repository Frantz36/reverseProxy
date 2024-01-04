// This is a code of a server that will be push on internet in order to use it like an external api

const express = require("express");
const app = express();
const port = 4000;

app.get("/generate-code", (req, res) => {
  const randomCode = Math.floor(Math.random() * 1000);
  res.json({ code: randomCode });
});

app.listen(port, () => {
  console.log(`L'API externe est en cours d'écoute sur le port ${port}`);
});