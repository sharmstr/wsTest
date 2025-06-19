# wsTest
Simple bun websocket server and client to test possible control frame (ping/pong) issues on Kinsta application platform.

#Server
To run server on Kinsta or localhost

`bun run server`

#Client
Before running client, edit .env.local and .env.remote

Run the client on your local machine.   

To connect to localhost
`bun --env-file=.env.local run client`

To connect to kinsta
`bun --env-file=.env.remote run client`
