import { FC } from "react"
import { selectCount } from "../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks"
import { selectTodos } from "../store/reducers/TodoSlice";
import { RootState } from "../store/store";
import TodoItem from "./TodoItem";


const Todos = () => {
    const todos = useAppSelector(selectTodos);
    const dispatch = useAppDispatch();

    console.log(todos);

    return (
        <div>
            {todos.map(todo => 
                <TodoItem key={todo.id} name={todo.name} />    
            )}
        </div>
    );
} 

export default Todos