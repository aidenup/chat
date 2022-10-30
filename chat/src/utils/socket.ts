import { io } from 'socket.io-client'

const socket = io('ws://localhost:3301', {})

export default socket