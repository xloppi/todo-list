 import { useAppDispatch, useAppSelector } from "../../store/hooks";
 import { todoSlice } from "../../store/reducers/TodoSlice";
import { fetchTodos } from "../../store/reducers/ActionCreators";
import { selectTodos } from "../../store/reducers/TodoSlice";
import TodoItem from "../TodoItem";

const Todos = () => {
  const todos = useAppSelector(selectTodos);
  const dispatch = useAppDispatch();
  console.log(todos);

  return (
    <>
      <button onClick={() => dispatch(fetchTodos())}>
        Получить список задач
      </button>
      <div>
        {todos.length ? (
          todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              title={todo.title}
              completed={todo.completed}
            />
          ))
        ) : (
          <p>Нет задач</p>
        )}
      </div>
    </>
  );
};

export default Todos;
