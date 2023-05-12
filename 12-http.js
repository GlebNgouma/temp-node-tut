const { log } = require("console");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("bienvenue chez nous");
    return;
  } else if (req.url === "/about") {
    res.end("Here is the page about");
    return;
  }

  res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the page you are looking for </p>
    <a href="/">back home</a>
    `);
});

server.listen(5000, () => {
  console.log("Le serveur s'execute sur le port 5000");
});
