require('../server/constants/server-events')
const io = require('socket.io-client')

export default function() {
  const socket = io.connect('http://localhost:3000')

  var chatbox = $(".msg_container_base")
  socket.on('new_message', (data) => {
    console.log("new message: " + data.message)
    chatbox.append(data.message)
  })

  function register(name, message, cb) {
    socket.emit('register', { name, message }, cb)
  }

  function message(message, cb) {
    socket.emit('message', message, (data) => {
      return message
    })
  }

  return {
    register,
    message
  }
}

