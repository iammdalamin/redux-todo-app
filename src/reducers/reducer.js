

import { createSlice } from "@reduxjs/toolkit";
import Swal from "sweetalert2";


export const todoSlice=createSlice({

    name:"todo",
    initialState:{
        value: []
    },
    reducers:{
        AddTodo: (state, action) => {
            if (action.payload === "") {
                
                 Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Please write your todo!',
                 })
                
                 return
                

            } else {
                state.value.push(action.payload)

            }
            
        },
        RemoveTodo:(state,action)=>{
            state.value.splice(action.payload,1)
        },
        EditTodo:(state,action)=>{
            state.value.splice(action.payload['index'], 1, action.payload['task'])
        }
    }

})
export  const {AddTodo,RemoveTodo,EditTodo}=todoSlice.actions;
export default todoSlice.reducer;