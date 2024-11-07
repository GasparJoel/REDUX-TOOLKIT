import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";
import { Link } from "react-router-dom";

const ItemTask = ({ task}) => {

  const dispatch = useDispatch()

  

  return (
    <div className="bg-teal-600 w-full p-5 max-w-md rounded-md my-2" >
      <header className="flex justify-between"> 
        <h1 className="text-2xl font-bold"> {task.title} </h1>

        <Link to={`/edit-task/${task.id}`} className="bg-yellow-300 px-10 rounded-xl text-black font-bold">Edit</Link>

        <button onClick={()=>dispatch(deleteTask(task))}>X</button>
      </header>
      
      <p> {task.description} </p>
      
      {task.completed === 'pendiente' ? (
          <h1 className="bg-red-600 w-full max-w-20 px-1 rounded-md my-2">Pendiente</h1>
        ) : task.completed === 'encurso' ? (
          <h1 className="bg-orange-600 w-full max-w-20 px-1 rounded-md my-2">En Curso</h1>
        ) : task.completed === 'finalizado' ? (
          <h1 className="bg-green-600 w-full max-w-20 px-1 rounded-md my-2">Finalizado</h1>
        ) : null}
    </div>
  );
};

export default ItemTask;
