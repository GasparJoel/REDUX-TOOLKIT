import { useSelector  } from "react-redux";
import ItemTask from "./itemTask";
import { Link } from "react-router-dom";


export const TaskList = () => {

  const taskState = useSelector(state =>state.tasks)

  console.log(taskState)
  return (
    <div>

      <h2>LISTA DE TASK </h2> <p> <Link to={'/create-task'} className="bg-green-600 px-5 rounded-2xl text-white" >  Create</Link>  </p>

      {
       taskState && taskState.map(task=>(
          
        <ItemTask key={task.id} task={task} />
        
        ))
      }

    </div>
  )
}
