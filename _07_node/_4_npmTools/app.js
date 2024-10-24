const http = require("http");
const requestHandler = require("./requestHandler");
const PORT = 3000;



const server = http.createServer(requestHandler);
server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
