const server = require('http').createServer()
const io = require('socket.io')(server)
const events = require('./constants/server-events')

io.on('connection', function (client) {
  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })

  client.on('register', (data) => {
    console.log("new client registerred: ")
    console.log(events)
  })

  client.on(events.CREATE_ROOM, (data) => {});
  client.on(events.JOIN_ROOM, (data) => {});
  client.on(events.LOAD_CHAT_HISTORY, (data) => {});
  client.on(events.GET_AVAILABLE_USERS, (data) => {});
  client.on(events.GET_ROOMS, (data) => {});
  client.on(events.MESSAGE, (data) => {});
  client.on(events.DISCONNECT, (data) => {});
})

server.listen(3000, function (err) {
  if (err) throw err
  console.log('Server is listening on port 3000')
})
