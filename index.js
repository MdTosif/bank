const http = require('./app');
const { port } = require('./config');
const io = require('socket.io')(http);

io.on('connection', (socket) => {
  socket.on('new_notification', (data) => {
    console.log(data.title, data.message);
    io.sockets.emit('show_notification', {
      title: data.title,
      message: data.message,
      icon: data.icon,
    });
  });
});

http.listen(port, () => {
  console.log('listening on localhost:3000');
});
