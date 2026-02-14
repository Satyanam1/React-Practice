import { useForm } from "react-hook-form";
import { nanoid } from 'nanoid';
import { toast } from "react-toastify";

/* const Create = (props) => {
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
}; */



const Create = (props) => {

  const todos = props.todos
  const settodos = props.settodos

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submithandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();

    const copytodos = [...todos];
    copytodos.push(data);
    settodos(copytodos);

    reset();

    toast.success("Todo created")

   

  };




  return (
    <div className=" w-[60%] p-10 ">
      <h1 className="mb-10 text-5xl font-thin">Set <span className="text-red-400">Reminders</span> for <br />{""} tasks</h1>
      <form onSubmit={handleSubmit(submithandler)}>
        <input
          {...register("title",{
            required:"title can't be empty",
          })}
          className="border-b w-full text-2xl font-thin p-2 outline-0"
         
          type="text" placeholder='title' />
          <small className="font-thin text-red-400">{errors?.title?.message}</small>
          <br /><br />

        <button className="mt-5 text-2xl border rounded px-10 py-2">Create Todo</button>

      </form>
    </div>
  )
}

export default Create;



