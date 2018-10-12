const server = require('http').createServer()
const io = require('socket.io')(server)

io.on('connection', function (client) {
  client.on('error', function (err) {
    console.log('received error from client:', client.id)
    console.log(err)
  })

  client.on('register', (data) => {
    console.log("new client registerred: ")
    console.log("name: " + data.name || "Anonymous")
    console.log("message: " + data.message || "Nothing")
  })
})

server.listen(3000, function (err) {
  if (err) throw err
  console.log('Server is listening on port 3000')
})
