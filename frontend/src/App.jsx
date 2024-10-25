import { useSelector  } from "react-redux";

export const App = () => {

  const tasksState = useSelector(state=>state.tasks)

  console.log(tasksState)

  return (
    <h1 className="text-3xl font-bold underline">
    Hello world!
   </h1>
  )
}
