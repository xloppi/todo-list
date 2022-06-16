import { FC, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { selectTodos, todoSlice } from "../../store/reducers/TodoSlice";
import styles from "./index.module.scss";


interface ItodoItem {
  id: number;
  title: string;
  completed: boolean;
}

const TodoItem: FC<ItodoItem> = ({ id, title, completed, }) => {
  const todos = useAppSelector(selectTodos);
  const { removeTodo, updateTodo } = todoSlice.actions;
  const dispatch = useAppDispatch();

  const onCheck = () => {
    // onComplete(id);
  }

  const handleRemove = () => {
    console.log([1, 'd', 34, 's', 5].sort());
    dispatch(removeTodo(id));
  }

  return (
    <div className={styles.todoItem}>
      <label>
        <input
          className={styles.todoItemCheckbox}
          type="checkbox"
          checked={completed}
          onChange={onCheck}
        />
        <h3 className={styles.title}>{title}</h3>
      </label>
      <button aria-label="Edit" className={styles.todoItemEdit}>edit</button>
      <button aria-label="Remove" className={styles.todoItemRemove} onClick={handleRemove}>delete</button>
    </div>
  );
};

export default TodoItem;
