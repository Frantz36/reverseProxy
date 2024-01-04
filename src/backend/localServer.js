// This is a code of the server of a local application to test our proxy

/*
    This app will simply register an user an give him a ramdom
*/

const express = require("express");
const http = require("http");

const app = express();
const port = 5000;

app.get("/", (req, res) => {
  const requestOptions = {
    hostname: "localhost",
    port: 3000,
    path: "/generate-code",
    method: "GET",
  };

  const clientRequest = http.request(requestOptions, (response) => {
    let data = "";

    response.on("data", (chunk) => {
      data += chunk;
    });

    response.on("end", () => {
      try {
        const codeResponse = JSON.parse(data);
        res.send(`Code reçu de l'API externe : ${codeResponse.code}`);
      } catch (error) {
        res
          .status(500)
          .send(
            "Erreur lors de l'analyse de la réponse JSON de l'API externe."
          );
      }
    });
  });

  clientRequest.on("error", (error) => {
    res.status(500).send("Erreur lors de la requête vers l'API externe.");
  });

  clientRequest.end();
});

app.listen(port, () => {
  console.log(`L'application locale est en cours d'écoute sur le port ${port}`);
});