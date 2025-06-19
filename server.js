let timer;
const server = Bun.serve({
  fetch(req, server) {
    const success = server.upgrade(req, {
      data: {
        message: "Hello, world!",
      },
    });
    return success ? undefined : new Response("Upgrade failed", { status: 500 });
  }, // upgrade logic
  port: parseInt(process.env.SERVER_PORT || '8080', 10),
  websocket: {
    sendPings: true,
    ping(ws, message) {
      console.log("received ping from client");
    },
    pong(ws, message) {
      console.log("received pong from client");
    },
    message(ws, message) {
    }, // a message is received
    open(ws) {
      timer = setInterval(() => {
        //console.log("server tx'd ping. ");
        ws.ping();
      }, 5000);
    }, // a socket is opened
    close(ws, code, message) {}, // a socket is closed
    drain(ws) {}, // the socket is ready to receive more data
  },
});
console.log(`Listening on ${server.hostname}:${server.port}`);
