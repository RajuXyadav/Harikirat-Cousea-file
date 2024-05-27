import React, { useEffect, useState } from "react";

import './App.css'



function App() {
  const [todos,setTodos] = useState([])


  useEffect(()=>{
    fetch('https://sum-server.100xdevs.com/todos')
    .then(async function(res){
        console.log("server is here")
         const json = await res.json();
         setTodos(json.todos);
    })
  },[])
 


 return (
   <div>
       {todos.length}
       {todos.map(todo=> <Todo key={todo.id} title={todo.title} description={todo.description}/>
       )}
   </div>
)}


function Todo({title,description}){
    return (
      <div>
        <h1>{title}</h1>
        <h4>{description}</h4>
      </div>
    )
}




export default App
