




/* const Read = (props) => {
    const users = props.users
    const renderuser = users.map((user, index) => {
    return <li key={index}>{user.name}</li>
  });
  return (
    <div>
      <h1>User Data</h1>
      <ol>{renderuser}</ol>
    </div>
  )
}; */

import { useContext } from "react";
import { toast } from "react-toastify";
import { todocontext } from "../Wrapper";


const Read = (props) => {

  const s = useContext(todocontext)
  console.log(s);
  


  const todos = props.todos
  const settodos = props.settodos

  
  


  const Deletehandler = (id) => {
    const filteredid = todos.filter((todo) => todo.id != id);
    settodos(filteredid)
    toast.error("Todo deleted!")

  }



  const rendertodos = todos.map((todo) => {
    return <li key={todo.id} className="mb-2 flex justify-between items-center p-4 bg-gray-900 rounded">{todo.title} 
      <button className="text-sm font-thin text-red-400 " onClick={() => Deletehandler(todo.id)} >Delete</button> </li>
  })
  return (
    <div className="w-[40%] p-10">
      <h1 className='mb-10 text-5xl font-thin'><span className='text-pink-600'>Pending</span> Todos</h1>
      <ol>{rendertodos}</ol>

    </div>
  )
}

export default Read;


