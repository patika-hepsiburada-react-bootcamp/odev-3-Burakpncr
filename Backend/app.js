const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

app.get('/', (req, res) => {
  res.end('survey app');
});

const votes = { 
  semanticUı: 0,
  materialUı: 0,
  reactBootstrap: 0,
  antDesign:0,
  other: 0,
};

io.on('connection', (socket) => {
  console.log('a user connected');
 
   socket.emit('new-vote', votes);

  socket.on('new-vote', (vote) => {
    votes[vote] = votes[vote] + 1;
    io.emit('new-vote', votes);
    console.log(votes)
  });

  socket.on('disconnect', () => console.log("a user disconnected"));
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});