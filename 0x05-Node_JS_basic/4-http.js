const http = require("http");

const PORT = 1245;
const HOST = "localhost";
const app = http.createServer();

app.on("request", (_, res) => {
  const response = "Hello Holberton School!";

  res.setHeader("Content-Type", "text/plain");
  res.statusCode = 200;
  res.end(response);
});

app.listen(PORT, HOST, () => {
  console.log(`Server listening at -> http://${HOST}:${PORT}\n`);
});
