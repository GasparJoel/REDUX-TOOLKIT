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
        completed :false
    },
    {
        id:"2",
        title:"Task 2 ",
        description:"Task 2 description",
        completed:false
    },

]

export const taskSlice = createSlice({
    name:'tasks',
    initialState:initialState,//Esto es lo mismo que solo colocar initialstate
    reducers:{

    }
})

//Exportamos sus reducer 
export default taskSlice.reducer