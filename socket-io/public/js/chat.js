const clientConnection = io()

const ELEMENTS = {
    messageBoard: document.querySelector('#messageList'),
    messageInput: document.querySelector('input[name="message"]'),
    form: document.querySelector('form'), 
    sendBtn: document.querySelector('#sendBtn'),
    userList: document.querySelector('#userList')
}

clientConnection.on('messageReceived', ({ username, message, date }) => {
    ELEMENTS.messageBoard.innerHTML += JSON.stringify({ username, message, date }, null, 2)
})


ELEMENTS.form.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = ELEMENTS.messageInput.value
    clientConnection.emit('message', message)
    ELEMENTS.messageInput.value = ''
})

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })
clientConnection.emit('join', { username, room }, (error) => {
    if(error){
        alert(error)
        location.href = '/'
    }
})

clientConnection.on('usersInRoom', ({ users, room }) => {
    ELEMENTS.userList.innerHTML = users.length
})
