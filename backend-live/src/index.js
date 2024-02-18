import express from 'express';
import { Server as SocketIOServer } from 'socket.io';
import http from 'http';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  path: '/api/socket.io'
});

app.get('/api', (req, res) => {
  res.send('<h1>Hello World!</h1>');
});

const chat = io.of('/');

chat.on('connection', (socket) => {
    console.log('A user connected');

    socket.on('chat message', (msg) => {
        console.log('message: ' + msg);
        io.emit('chat message', msg); // Broadcast to all clients
    });

    socket.on('disconnect', () => {
        console.log('A user disconnected');
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

