# wsTest
Simple bun websocket server and client to test possible control frame (ping/pong) issues on Kinsta application platform.

Server: To run server on Kinsta or localhost

bun run server

Client:  Before running client, edit .env.local and .env.remote

Run client on your local machine.   

Connect to local host
bun --env-file=.env.local run client

Connect to kinsta
bun --env-file=.env.remote run client
