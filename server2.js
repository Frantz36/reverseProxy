const http = require('http');
const url = require('url');


const originServerURL = new URL('http://127.0.0.1:3000');

const forwardRequest = (req, res) => {
  // set req Host, URL, and Request URI to forward a request to the origin server
  req.headers.host = originServerURL.host;
  req.headers['x-forwarded-host'] = req.headers.host;
  req.url = req.url.replace(req.headers.host, originServerURL.host);
  req.headers['x-forwarded-for'] = req.connection.remoteAddress;
  req.headers['x-forwarded-proto'] = req.protocol;

  // send a request to the origin server
  const options = {
    host: originServerURL.host,
    port: originServerURL.port,
    path: req.url,
    method: req.method,
    headers: req.headers,
  };

  const proxyReq = http.request(options, (proxyRes) => {
    res.writeHead(proxyRes.statusCode, proxyRes.headers);
    proxyRes.pipe(res);
  });

  proxyReq.on('error', (error) => {
    res.writeHead(http.StatusInternalServerError);
    res.end(error.message);
  });

  req.pipe(proxyReq);
};

const server = http.createServer(forwardRequest);

server.listen(8080, () => {
  console.log('Server is running on port 8080');
});