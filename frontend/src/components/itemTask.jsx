import { useDispatch } from "react-redux";
import { deleteTask } from "../features/tasks/taskSlice";

const ItemTask = ({ task}) => {

  const dispatch = useDispatch()

  return (
    <div className="bg-teal-600 w-full p-5 max-w-md rounded-md my-2" >
      <header className="flex justify-between"> 
        <h1 className="text-2xl font-bold"> {task.title} </h1>
        <button onClick={()=>dispatch(deleteTask(task))}>X</button>
      </header>
      
      <p> {task.description} </p>
      {task.completed ? <h1 className="bg-red-600">Completado </h1> 
      : <h1 className="bg-red-600 w-full max-w-20 px-1 rounded-md my-2">Pendiente</h1>}
    </div>
  );
};

export default ItemTask;
