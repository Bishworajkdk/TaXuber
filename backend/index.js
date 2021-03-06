const express = require("express");
const app = express();
const server = require("http").createServer(app);
const io = require("socket.io").listen(server);
const port = 3000;

let taxiSocket = null;

io.on("connection", socket => {
  console.log("a user connected :D");
  socket.on("taxiRequest", routeResponse => {
    console.log("Someone wants a taxi!");
    if (taxiSocket !== null) {
      taxiSocket.emit("taxiRequest", routeResponse);
    }
  });

  socket.on("passengerRequest", () => {
    console.log("Someone wants a passenger!");
    taxiSocket = socket;
  });
});

server.listen(port, () => console.log("server running on port: " + port));