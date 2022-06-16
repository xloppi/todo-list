import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITodo } from "../../models/ITodo";
import { RootState } from "../store";

interface TodoState {
  todos: ITodo[];
  isLoading: boolean;
  error: null | string;
}

const initialState: TodoState = {
  todos: [{ id: 1, title: 'Первая задача', completed: true}, { id: 2, title: 'Вторая задача', completed: false}],
  isLoading: false,
  error: null,
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos.push(action.payload);
    },
    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    updateTodo: (state, action: PayloadAction<ITodo>) => {
      state.todos = state.todos.map((todo) => todo.id === action.payload.id ? action.payload : todo)
    },
    todosFetching: (state) => {
      state.isLoading = true;
    },
    todosFetchingSuccess: (state, action: PayloadAction<ITodo[]>) => {
      state.isLoading = false;
      state.error = "";
      state.todos = action.payload;
    },
    todosFetchingError: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
  },
});

export const selectTodos = (state: RootState) => state.todos.todos;

export default todoSlice.reducer;
