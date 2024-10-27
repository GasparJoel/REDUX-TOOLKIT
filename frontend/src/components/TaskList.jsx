import { useSelector  } from "react-redux";
import ItemTask from "./itemTask";


export const TaskList = () => {

  const taskState = useSelector(state =>state.tasks)

  console.log(taskState)
  return (
    <div>

      {
       taskState && taskState.map(task=>(
          
        <ItemTask key={task.id} task={task} />
        
        ))
      }

    </div>
  )
}
