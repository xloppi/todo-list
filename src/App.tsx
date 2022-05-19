import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import TodoList from './components/TodoList/TodoList';
import Input from './components/UI/Input';

function App() {
  return (
    <div className="App">
      <h1>Todo list</h1>
      <Input />
    </div>
  );
}

export default App;
