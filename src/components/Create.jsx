import { useState } from "react";

const Create = (props) => {
   console.log(props);
   
    const [Fullname, setFullname] = useState("")
      const [age, setAge] = useState(18)
    
      const submitHandler = (e)=>{
        e.preventDefault()
        const newuser = {Fullname,age}
        console.log(newuser);
      }    
  return (
    <div>
      <h1>Register user</h1>
      <form onSubmit={submitHandler}>
      <input onChange={(e) => setFullname(e.target.value)} value={Fullname} type="text" placeholder='Enter name' />
      <input onChange={(e) => setAge(e.target.value)} value={age} type="number" placeholder='Enter age' />
      <button>Submit</button>
      </form>
    </div>
  )
};

export default Create
