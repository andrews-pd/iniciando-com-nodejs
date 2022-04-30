const http = require("http");

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });

  if (req.url === "/usuario") {
    res.end(JSON.stringify({
      data: 'Hello User!'
    }));
  }

  if (req.url === "/produto") {
    res.end(JSON.stringify({
      data: 'Hello Product!'
    }));
  }

  res.end(JSON.stringify({
    data: 'Hello Unknow!'
  }));

}).listen(4001, () => console.log('Servidor está rodando na porta 4001'));