const users = []

//addUser remv getUser getUsersInRoom

const addUser = ({ id, username, room }) => {
    //clean data
    try{
        username = username.trim().toLowerCase()
        room = room.trim().toLowerCase() 
    } catch(err) {
        return { error: 'bad input' }
    }

    if(!username || !room){
        return { error: 'username or room not supplied!' }
    }

    const userExists = users.some(user => (user.username === username) && (user.room === room))

    if(userExists){
        return { error: 'user already exists' }
    }

    const user = { id, username, room }
    users.push(user)

    return { user }
}

const removeUser = (id) => {
    const index = users.findIndex(user => user.id === id)
    if(index >= 0){
        return users.splice(index, 1)[0]
    }
    return false
}

const getAllUsersInRoom = (room) => {
    return users.filter(user => user.room === room.trim().toLowerCase())
}

const getUser = (id) => {
    return users.find(user => user.id === id)
}

module.exports = {
    addUser,
    removeUser,
    getAllUsersInRoom,
    getUser
}