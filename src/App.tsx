import React from 'react';
import TodoList from './components/TodoList/TodoList';
import Form from './components/Form';
import './App.scss'


function App() {
  return (
    <div className="app">
      <h1 className='app__title'>Todo list</h1>
      <section>
        <Form />
      </section>
      <section>
        <TodoList />
      </section>
    </div>
  );
}

export default App;
