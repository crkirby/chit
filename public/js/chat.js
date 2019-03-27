const clientConnection = io()

const ELEMENTS = {
    messageBoard: document.querySelector('#messageList'),
    messageInput: document.querySelector('input[name="message"]'),
    form: document.querySelector('form'), 
    sendBtn: document.querySelector('#sendBtn')
}

clientConnection.on('messageReceived', ({ message, date }) => {
    ELEMENTS.messageBoard.innerHTML += JSON.stringify({message, date}, null, 2)
})


ELEMENTS.form.addEventListener('submit', (e) => {
    e.preventDefault()
    const message = ELEMENTS.messageInput.value
    clientConnection.emit('message', message)
    ELEMENTS.messageInput.value = ''
})

const { username, room } = Qs.parse(location.search, { ignoreQueryPrefix: true })
clientConnection.emit('join', { username, room })
