import { useEffect, useState } from 'react'

import './App.css'

function App() {
  const [socket, setSocket] = useState<null | WebSocket>(null)
  const [latest,setLatest] = useState("")

  useEffect(()=>{
      const socket = new WebSocket('ws://localhost:8080')
      socket.onopen = ()=>{
        console.log("Connected")
      }
      socket.onmessage=(message) =>{
        console.log('Received message:',message.data)
        setLatest(message.data)
      }
      setSocket(socket)
  })

  if(!socket){
    return <div>
      Connecting to socket server ...
    </div>
  }

  return (
    <>
        <input type="text" />
        <button onClick={()=>{
           socket.send("Hello world")
        }}>Send</button>
        {latest}
    </>
  )
}

export default App
