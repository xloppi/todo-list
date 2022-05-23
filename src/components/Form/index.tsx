import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { todoSlice } from '../../store/reducers/TodoSlice';
import styles from './form.module.scss'



const Input: FC = () => {
    const { todos } = useAppSelector(state => state.todos)
    const { addTodo } = todoSlice.actions;
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
        e.preventDefault();
        dispatch(addTodo({id: Number(Date.now()), title: value}))
        setValue('');
    }

    console.log(todos)

    return (
        <form className={styles.form}>
            <input type="text" value={value} onChange={handleChange} className={styles.form__input}></input>
            <button className='form__button' onClick={handleSubmit}>+</button>
        </form>
    )
}

export default Input