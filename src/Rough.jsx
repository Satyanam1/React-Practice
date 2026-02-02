

/* let a = 12
let b = "satyam"
let c = false;
let nu = null;
let arr = [1,"hey",true,null,undefined,15,<h2>Hello</h2>]
let obj = {
    name:"satyam",age:22
}

const Rough = () => {
  return (
    <div>
      <h1>Data Types</h1>
      <h2>Number: {a} </h2>
      <h2>String: {b} </h2>
      <h2>Bollean: {c} </h2>
      <h2>Null : {nu}</h2>
      <h2>Array : {arr} </h2>
      <h2>Object : {obj.name}|{obj.age}</h2>
    </div>
  )
} */

import { useState } from "react"




/* const profiles = [

   { name:"satyanam",age:22},
   {name:"sarthak",age:25},
   {name:"shubham",age:24}
]
const updatedProfiles = profiles.map((profiles,index)=>{
    return(
        <li key = {index}>
            <span>Name: {profiles.name} </span>
            <small>Age: {profiles.age}</small>

        </li>
    )
})

const Rough = () => {
    return(
        <>
        <h2>Rendring JSON</h2>
        <ol>
          {updatedProfiles}

        </ol>
        </>

    )
} */






const rough = () => {
   const [user,setusername] = useState("satyanam")
   const change = ()=>{
    setusername("Shubham")
   }

  return (
    <div>
      <h1></h1>  
      <h2>{user}</h2>
      <button onClick={change}>Change Name</button>
    </div>
  )
}

export default rough


    


