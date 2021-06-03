import React, { useEffect, useRef, useState } from 'react';
import Todo from './Todo';
import { ITodo } from './todo.interface';

import './App.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState<ITodo[]>([]);
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    // Type Guard
    if (!inputRef.current) {
      return;
    }
    inputRef.current.focus();
  }, []);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(event.target.value);
  };

  const onClick = (
    event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent
  ) => {
    // Check if empty value
    if (todo === '') {
    }

    // Check if already exists
    else if (todoList.find((_todo) => _todo.name === todo) === undefined) {
      const newTodo: ITodo = { name: todo, addedOn: new Date() };
      setTodoList((prevTodoList) => prevTodoList.concat(newTodo));
    }

    setTodo('');
    inputRef.current?.focus();
  };

  const onDelete = (date: Date) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.addedOn !== date)
    );
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onClick(event);
    }
  };

  return (
    <div className='container'>
      <div className='p-5 mb-4 bg-light rounded-3'>
        <div className='container-fluid py-5 text-center'>
          <h1 className='display-5 fw-bold'>Manage your To-Do</h1>
          <input
            className='form-control my-4'
            ref={inputRef}
            onChange={onChange}
            value={todo}
            onKeyPress={handleKeyPress}
          />
          <button className='btn btn-outline-primary btn-lg' onClick={onClick}>
            Add
          </button>
        </div>
      </div>

      <table className='table text-center'>
        <thead>
          <tr>
            <th scope='col'>Name</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo, index) => {
            return <Todo key={index} todo={todo} onDelete={onDelete} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;