import { ITodo } from "../../models/ITodo";
import { AppDispatch } from "../store";
import { todoSlice } from "./TodoSlice"

export const fetchTodos = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(todoSlice.actions.todosFetching());
        const response = await fetch('https://jsonplaceholder.typicode.com/todos')
        const todosData = await response.json()
        dispatch(todoSlice.actions.todosFetchingSuccess(todosData));
    } catch (e: any) {
        dispatch(todoSlice.actions.todosFetchingError(e.message));
    }
}