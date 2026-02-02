import React from 'react'
import Rough from './rough';


const App = () => {

  const start = ()=>{
    alert("Button clicked");
    
  }

  const paramClick = (msg)=> alert(msg)
    
  


  
  return (
   <>
  
    <h1>Welcome to React js</h1>
    <button onClick={start}>Click</button>
    <button onClick={()=> paramClick("hello satyam, How are you?")}>Click para</button>
    <Rough/>
   </>
  )
}

export default App


