const express = require('express');
const socketio = require('socket.io');
const http = require('http'); 

const PORT = process.env.PORT || 5000;

const router = require('./router');

const app = express();
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', (socket) => {
    console.log('Nueva conexion aquí.');

    socket.on('disconnect', () => {
        console.log('El usuario ha salido.');
    })
});

app.use(router);

server.listen(PORT, () => console.log(`Servidor corriendo en el puerto ${PORT}`));