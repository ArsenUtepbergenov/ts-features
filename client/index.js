const wsUrl = new URL('ws://localhost:8080')
const socket = new WebSocket(wsUrl)

socket.send(() => {
  'Hello'
})