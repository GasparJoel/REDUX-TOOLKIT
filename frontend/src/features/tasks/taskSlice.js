//Funciones para actualizar el stado
import { createSlice } from "@reduxjs/toolkit";

//El reducers van a ser funciones para crear , actualizar , eliminar etc. 
//initialstate es como inicia el estado 
//el Slice tiene un name "tasks"

export const taskSlice = createSlice({
    name:'tasks',
    initialState:[1,2,3],
    reducers:{

    }
})

//Exportamos sus reducer 
export default taskSlice.reducer