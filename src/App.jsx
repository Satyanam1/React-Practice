import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {

  const [users, setuser] = useState([
    { name: "satyam", age: 22 },
    { name: "shubham", age: 24 },
    { name: "Rohit", age: 22 }
  ])
  
  return (
    <>
      
    <Create/>
    <Read users={users} setuser={setuser} />
      
    </>
  )
}

export default App
