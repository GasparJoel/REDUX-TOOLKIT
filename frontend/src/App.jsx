import { TaskForm } from "./components/TaskForm";
import { TaskList } from "./components/TaskList";
import { BrowserRouter,Route, Routes, } from "react-router-dom";

export const App = () => {
  return (
    <div className="bg-slate-950 text-white h-screen">
      <h1 className="text-3xl font-bold ">Lista de Videos</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TaskList/>} />
          <Route path="/create-task" element={<TaskForm/>} />
        </Routes>
      
      
      </BrowserRouter>

     
     
    </div>
  );
};
