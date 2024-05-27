
import './App.css'

function App() {
  

  return (
    <>
       <Todo title="Raju" description="Hello everyone "/>
      
    </>
  )
}


interface TodoProp{
  title:string,
  description:string
 }
  

function Todo(props:TodoProp){
  return <div>
   <h1>{props.title}</h1>
   <h2>{props.description}</h2>
  </div>
}

export default App
