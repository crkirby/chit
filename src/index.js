const express = require('express')
const { join } = require('path')
const { createServer } = require('http')
const socketIO = require('socket.io')
const { generateMessage } = require('./utils.js')

const PORT = process.env.PORT || 3000

const app = express()

const publicDirectoryPath = join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

const server = createServer(app)

const io = socketIO(server)

io.on('connection', socket => {
    // broadcast to all but the socket

    
    socket.on('join', ({ username, room }) => {
        socket.join(room)
        socket.broadcast.to(room).emit('messageReceived', generateMessage(`${username} has joined.`))

        socket.on('message', message => {
            io.to(room).emit('messageReceived', generateMessage(message))
        })

        socket.on('disconnect', () => {
            io.to(room).emit('messageReceived', generateMessage(`${username} has left.`))
        })
    })


})


server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})