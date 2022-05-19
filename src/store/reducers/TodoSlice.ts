import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";
import { RootState } from "../store";

interface TodoState {
    todos: ITodo[];
}

const initialState: TodoState = {
    todos: [{id: 1, name: "Поесть"}, {id: 2, name: "Поспать"}]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
          },
    }
})

export const { addTodo } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;