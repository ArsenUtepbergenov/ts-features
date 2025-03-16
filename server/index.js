import { WebSocketServer } from "ws";
import { randomUUID} from 'node:crypto'

const state = {
  clients: []
}

const wss = new WebSocketServer({ port: 8080 })

console.log('Server started listening on port: ' + wss.address().port)

function connectClient(socket) {
  socket.id = randomUUID()
  state.clients.push(socket)

  console.log('Client connected, assigning id: ' + socket.id)
}

function disconnectClient(socket) {
  state.clients = state.clients.filter(({ id }) => id === socket.id)
  console.log(`Client ${socket.id} disconnected`)
}

wss.on('connection', (socket) => {
  socket.on('close', () => disconnectClient(socket))

  connectClient(socket)
})

