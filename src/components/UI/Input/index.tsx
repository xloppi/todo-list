import './input.module.scss'
import React, { FC, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../store/hooks';
import { todoSlice } from '../../../store/reducers/TodoSlice';



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
        dispatch(addTodo({id: Number(Date.now()), name: value}))
    }

    console.log(todos)

    return (
        <form className='form'>
            <input value={value} onChange={handleChange} className='form__input'></input>
            <button className='form__button' onClick={handleSubmit}>+</button>
        </form>
    )
}

export default Input