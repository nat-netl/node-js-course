const http = require("http");

const PORT = process.env.PORT || 6000;

const server = http.createServer((req, res) => {
  res.end("Сервер работает!dd");
});

server.listen(PORT, () => console.log(`Server started on PORT ${PORT}`));
