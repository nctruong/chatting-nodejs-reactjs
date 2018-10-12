const io = require('socket.io-client')

export default function () {
  const socket = io.connect('http://localhost:3000')

  function register(name, message, cb) {
    socket.emit('register', { name, message }, cb)
  }

  return {
    register
  }
}

