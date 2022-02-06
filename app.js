const http = require("http");

const PORT = 8080;

const server = http.createServer((req, res) => {
  console.log(req.url);
  switch (req.url)
  {
    case '/':
      res.write("Hello world");
      break;
    case '/home':
      res.write("Home");
      break;
    default:
      res.write("<h1>Not found</h1>");
      break;
  }
  res.end();
});

server.listen(PORT, () => {
  console.log('server listen on port ' + PORT);
})