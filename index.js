const Server = require('./models/server')

//para las variables de entorno
require('dotenv').config()

const server = new Server();

server.execute()




// //servidor de express
// const express = require('express')
// const app = express()


// //servidor de sockets

// const server = require('http').createServer(app);

// //configuracion del socket server
// const io = require('socket.io')(server);


// //desplegar el directorio publico
// app.use(express.static(__dirname + '/public'))


// io.on('connection', (socket) => {
     

//      socket.on('mensaje-to-server',(data)=>{
//         console.log(data)
        
//         //reenviamos el mismo mensjae al cliente
//         socket.emit("mensaje-from-server",data)
//         //enviamos a todos los clientes conectados
//         io.emit("mensaje-from-server",data)
        
//      })
//  });

// server.listen(3000,()=>{
//     console.log("Server corriendo en el puerot :3000")
// })