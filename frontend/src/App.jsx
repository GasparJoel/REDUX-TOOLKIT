import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";

export const App = () => {
  return (
    <div className="bg-slate-950 text-white h-screen">
      <h1 className="text-3xl font-bold ">Lista de Videos</h1>

      <TaskForm />
      <TaskList />
    </div>
  );
};
