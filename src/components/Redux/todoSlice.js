import { createSlice } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todos",
    initialState: [],
    reducers: {
        // add todos the empty state
        addTodo: (state, action) => {
            const newTodo = {
                id: Date.now(),
                text: action.payload,
            }
            state.push(newTodo);
        },
        deleteTodo: (state, action) => {
            const index = state.findIndex((todo) => todo.id === action.payload);
            if(index !== -1){
                state.splice(index, 1);
            }
        },
    },
});

export const { addTodo, deleteTodo } = todoSlice.actions;
export default todoSlice.reducer;