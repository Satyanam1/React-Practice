import React, { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'


const App = () => {

  // const [users, setuser] = useState([
  //   { name: "satyam", age: 22 },
  //   { name: "shubham", age: 24 },
  //   { name: "Rohit", age: 22 }
  // ])

  // return (
  //   <>

  //   <Create/>
  //   <Read users={users} setuser={setuser} />

  //   </>
  // )




  // const [city, setcity] = useState("mumbai")

  // const [completed, setcompleted] = useState(false);

  // const [gender, setgender] = useState("female");

  const [todos, settodos] = useState([
    { id: 1, title: "Hey! What's going on😊", isCompleted: false },
  ]);






  return (
 <div className="flex w-screen h-screen bg-gray-800 text-white">


   

 
    <Create todos={todos} settodos={settodos} />
    <Read todos={todos} settodos={settodos} />




  </div>
  );
};

export default App
