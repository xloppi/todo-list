import { createSlice } from "@reduxjs/toolkit";
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
        increment: (state) => {
            // Redux Toolkit allows us to write "mutating" logic in reducers. It
            // doesn't actually mutate the state because it uses the Immer library,
            // which detects changes to a "draft state" and produces a brand new
            // immutable state based off those changes
            state.todos = [];
          },
    }
})

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;