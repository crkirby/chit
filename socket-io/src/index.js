const express = require('express')
const { join } = require('path')
const { createServer } = require('http')
const socketIO = require('socket.io')
const { generateMessage } = require('./utils.js')
const { addUser, getUser, getAllUsersInRoom, removeUser } = require('./users.js')
const events = require('./constants')

const PORT = process.env.PORT || 3000

const app = express()

const publicDirectoryPath = join(__dirname, '../public')
app.use(express.static(publicDirectoryPath))

const server = createServer(app)

const io = socketIO(server)

io.on(events.CONNECTION, socket => {
    socket.on(events.JOIN, ({ username, room }, callback) => {
        const { error, user } = addUser({ id: socket.id, username, room })
        if (error) {
            return callback(error)
        }

        const currentRoom = user.room
        socket.join(currentRoom)
        io.to(currentRoom).emit(events.USERS_IN_ROOM, { users: getAllUsersInRoom(currentRoom), room: currentRoom })
        socket.broadcast.to(currentRoom).emit(events.MESSAGE_RECEIVED, generateMessage(user.username, `${user.username} has joined.`))
        callback()

    })

    socket.on('message', (message, callback) => {
        const user = getUser(socket.id)
        if (!user) {
            return callback('user does not exist', user)
        }
        io.to(user.room).emit(events.MESSAGE_RECEIVED, generateMessage(user.username, message))
    })

    socket.on('disconnect', () => {
        const user = removeUser(socket.id)
        const currentRoom = user.room
        if (user) {
            io.to(currentRoom).emit(events.USERS_IN_ROOM, { users: getAllUsersInRoom(currentRoom), room: currentRoom })
            io.to(currentRoom).emit(events.MESSAGE_RECEIVED, generateMessage(user.username, `${user.username} has left.`))
        }
    })

})


server.listen(PORT, () => {
    console.log(`listening on ${PORT}`)
})