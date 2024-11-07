import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTask ,editTask  } from "../features/tasks/taskSlice";
import {v4 as uuid  } from "uuid";
import { useNavigate, useParams } from "react-router-dom";
export const TaskForm = () => {


  const navigate = useNavigate()
//Para traer las funciones de los reduces task
const dispatch  = useDispatch()

const params = useParams()

//Traemos las tareas 
const tasks = useSelector(state =>state.tasks)

  const [task, setTask] = useState({
    title: "",
    description:"",
    completed:""
  })
  
   

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

    if (params.id) {
      dispatch(editTask(task))
    }else{
      dispatch(addTask({
        ...task,
        id:uuid(),
        completed:false,
      }))
    }
   
    navigate('/')
  }

  useEffect(() => {
    if (params.id) {
     setTask( tasks.find(task=>task.id === params.id))
     
    }
  }, [])
  

  return (
    <div className="bg-zinc-800 p-10 w-full rounded-md max-w-md">
      <form onSubmit={HandleSubmit} >
        <h5 className="font-bold">Titulo</h5>
        <input type="text"
        name="title"
         className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
         placeholder="Titulo"
         value={task.title}
         onChange={HandleChange}
        />
        <h5 className="font-bold">Descripcion</h5>
        <textarea type="text"
        name="description"
        className="w-full bg-zinc-600 text-white px-4 py-2 rounded-md my-2"
        placeholder="Descripción"
        value={task.description}
        onChange={HandleChange}
        />

        {
          params.id?
          <select name="completed" value={task.completed} onChange={HandleChange} className="w-full bg-zinc-600 text-white px-4 py-2 my-2" id="">
            <option value="encurso">En curso</option>
            <option value="pendiente">pendiente</option>
            <option value="finalizado">Finalizado</option>
            
          </select> :
           null
        }
        
        <button type="submit" className="bg-green-500 text-white py-2 px-4 rounded-md">
          {
            params.id ? "EDITAR":"REGISTRAR"
          }
          
          
          </button>


      </form>
    </div>
    
  )
}
