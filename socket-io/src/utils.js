const generateMessage = (username, message) => {
    return {
        username,
        message,
        date: new Date()
    }
}

module.exports = {
    generateMessage
}