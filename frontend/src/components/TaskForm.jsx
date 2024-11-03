import { useState } from "react"
import { useDispatch } from "react-redux";
import { addTask  } from "../features/tasks/taskSlice";
import {v4 as uuid  } from "uuid";
import { useNavigate } from "react-router-dom";
export const TaskForm = () => {


  const navigate = useNavigate()

  const [task, setTask] = useState({
    title: "",
    desccription:""
  })
  //Para traer las funciones de los reduces task
   const dispatch  = useDispatch()

  const HandleChange=(e)=>{
    //console.log(e.target.name ,e.target.value )
    const {name , value} = e.target
    setTask({
      ...task,
      [name]:value,
    })
    
  }

  const HandleSubmit = (e)=>{
    e.preventDefault()
    dispatch(addTask({
      ...task,
      id:uuid(),
      completed:false,
    }))
    navigate('/')
  }

  return (
    <div className="bg-zinc-800 p-10 w-full rounded-md max-w-md">
      <form onSubmit={HandleSubmit} >
        <h5 className="font-bold">Titulo</h5>
        <input type="text"
        name="title"
         className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
         placeholder="Titulo"
         onChange={HandleChange}
        />
        <h5 className="font-bold">Descripcion</h5>
        <textarea type="text"
        name="description"
        className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
        placeholder="Descripción"
        onChange={HandleChange}
        />
        
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">Registrar </button>


      </form>
    </div>
    
  )
}
