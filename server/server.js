const server = require('http').createServer()
const io = require('socket.io')(server)
require('./constants/server-events')

io.on('connection', function (client) {
  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })

  client.on('register', (data) => {
    console.log("new client registered: ")
  })

  // client.on(CREATE_ROOM, (data) => {});
  // client.on(JOIN_ROOM, (data) => {});
  // client.on(LOAD_CHAT_HISTORY, (data) => {});
  // client.on(GET_AVAILABLE_USERS, (data) => {});
  // client.on(GET_ROOMS, (data) => {});
  client.on('message', (data) => {
    console.log(data)
    io.sockets.emit('new_message', { message : data, username : 'Anonymous' });
  });
  client.on(DISCONNECT, (data) => {});
})

server.listen(3000, function (err) {
  if (err) throw err
  console.log('Server is listening on port 3000')
})
