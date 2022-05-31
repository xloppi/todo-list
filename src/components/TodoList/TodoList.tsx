import { FC } from "react";
import { selectCount } from "../../features/counter/counterSlice";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { fetchTodos } from "../../store/reducers/ActionCreators";
import { selectTodos, todosFetching } from "../../store/reducers/TodoSlice";
import { RootState } from "../../store/store";
import TodoItem from "../TodoItem/TodoItem";

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
              onComplete={() => {}}
              onRemove={() => {}}
              onEdit={() => {}}
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
