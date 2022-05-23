import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";
import { RootState } from "../store";

interface TodoState {
    todos: ITodo[];
    isLoading: boolean;
    error: null | string;
}

const initialState: TodoState = {
    todos: [{id: 1, title: "Поесть"}, {id: 2, title: "Поспать"}],
    isLoading: false,
    error: null,
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<ITodo>) => {
            state.todos.push(action.payload);
          },
        todosFetching: (state) => {
            state.isLoading = true;
        },
        todosFetchingSuccess: (state, action: PayloadAction<ITodo[]>) => {
            state.isLoading = false;
            state.error = '';
            state.todos = action.payload;
        },
        todosFetchingError: (state, action: PayloadAction<string>) => {
            state.isLoading = false;
            state.error = action.payload
        },
    }
})

export const { addTodo, todosFetching } = todoSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;