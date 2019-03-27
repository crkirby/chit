const generateMessage = (message) => {
    return {
        message,
        date: new Date()
    }
}

module.exports = {
    generateMessage
}