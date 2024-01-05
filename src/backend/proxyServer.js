const http = require("http");
const app = require("./app-proxy");
const db = require("./config/dbConfig");

const port = process.env.PORT || 5000;

app.set("port", port);

const server = http.createServer(app);

server.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
