//Funciones para actualizar el stado
import { createSlice } from "@reduxjs/toolkit";

//El reducers van a ser funciones para crear , actualizar , eliminar etc. 
//initialstate es como inicia el estado 
//el Slice tiene un name "tasks"
const initialState =[
    {
        id:"1",
        title:"Task 1 ",
        description:"Task 1 description",
        completed :"pendiente"
    },
    {
        id:"2",
        title:"Task 2 ",
        description:"Task 2 description",
        completed:"pendiente"
    },

]

export const taskSlice = createSlice({
    name:'tasks',
    initialState:initialState,//Esto es lo mismo que solo colocar initialstate
    reducers:{
        addTask:(state,action)=>{
            //en payload se encuentra lo que llega desde la funcion
            const taskSend = action.payload
            //con el state actualizamos el estado y push
            state.push(taskSend)
        },
        deleteTask :(state,action)=>{
            const taskfound= state.find(task=>task.id ===action.payload.id )
            
                if (taskfound) {
                    return state.filter(task=>task.id!==taskfound.id)
                }
          
        },
        editTask:(state,action)=>{
           const {id,title,description,completed} = action.payload

           const foundTask =state.find(task=>task.id===id)
           if(foundTask){
            foundTask.title=title,
            foundTask.description = description,
            foundTask.completed=completed

           }
        }

    }
})

export const {addTask , deleteTask,editTask} = taskSlice.actions

//Exportamos sus reducer 
export default taskSlice.reducer