let timer;
const socket = new WebSocket("ws://localhost:8083");

socket.addEventListener("ping", event => {
  console.log("received ping from server");
});

socket.addEventListener("pong", event => {
  console.log("received pong from server");
});

// message is received
socket.addEventListener("message", event => {
  console.log(event.data);
});

// socket opened
socket.addEventListener("open", event => {
  timer = setInterval(() => {
    //console.log("client tx'd ping. ");
    socket.ping();
  }, 2000);
});

// socket closed
socket.addEventListener("close", event => {});

// error handler
socket.addEventListener("error", event => {});