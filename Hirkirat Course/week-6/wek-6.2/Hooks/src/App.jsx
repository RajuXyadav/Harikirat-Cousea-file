import { useEffect, useState } from 'react';
import axios from 'axios'

function App() {


  // useEffect(()=>{
  //     axios.get("https://sum-server.100xdevs.com/todos").then(function(response){
  //           setCount(response.data.todos)
  //     })
  // },[])
const [change,setChange] = useState(0);



  return <div>
    <button onClick={function(){
      setChange(1)
    }}>1</button>
    <button onClick={function(){
      setChange(2)
    }}>2</button>
    <button onClick={function(){
      setChange(3)
    }}>3</button>
    <button onClick={function(){
      setChange(4)
    }}>4</button>
    <Todo id={change}/>
  </div>
}

function Todo({id}){
  const [todo,setTodo] = useState([]);
  console.log(id)

  useEffect(()=>{
     axios.get("https://sum-server.100xdevs.com/todos?id="+ id)
     .then(function(response){
      console.log(response.data.todo)
     setTodo(response.data.todos)
     })
  },[id])
    
  

   return(
      <div>
          {todo.map(function(td , index){
            return(
              <>
               <h1>{td.title}</h1>
               <h3>{td.description}</h3>
              </>
            )
          })}
      </div>
   )

}

export default App
