import React, { useEffect, useRef, useState } from 'react';
import { $enum } from 'ts-enum-util';
import Todo from './Todo';
import { ITodo } from './todo.interface';
import { Priority } from './priority.enum';
import './App.css';

const App = () => {
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.LOW);
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

  const addTodo = (
    event:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent
      | React.FocusEvent<HTMLInputElement>
  ) => {
    // Check if empty value
    if (todo === '') {
    }

    // Check if already exists
    else if (todoList.find((_todo) => _todo.name === todo) === undefined) {
      const newTodo: ITodo = {
        name: todo,
        addedOn: new Date(),
        id: Math.floor(Math.random() * 1000000 + 1),
        priority: priority,
      };
      setTodoList((prevTodoList) => [newTodo, ...prevTodoList]);
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
      addTodo(event);
    }
  };

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const selectedValue = event.target.value;
    if (!(selectedValue in Priority)) {
      return;
    }
  };

  return (
    <div className='container'>
      <div className='p-5 mb-4 bg-light rounded-3'>
        <div className='container-fluid py-5'>
          <h1 className='h2 fw-bold'>Your TODO</h1>
          <div className='input-group my-5'>
            <div>
              <select
                className='form-select'
                onChange={handlePriorityChange}
              >
                <option selected>Choose Priority</option>
                {$enum(Priority)
                  .getValues()
                  .map((val, index) => (
                    <option key={index} value={val}>
                      {val}
                    </option>
                  ))}
              </select>
            </div>
            <input
              className='form-control'
              ref={inputRef}
              onChange={onChange}
              value={todo}
              onKeyPress={handleKeyPress}
              onBlur={addTodo}
              aria-describedby='addTodo'
              placeholder='Enter your task'
              aria-label='Enter your task'
            />
            <button
              className='btn btn-outline-primary'
              id='addTodo'
              onClick={addTodo}
            >
              Button
            </button>
          </div>
        </div>
      </div>

      <table className='table text-center' style={{ overflowX: 'scroll' }}>
        <thead>
          <tr>
            <th scope='col' style={{ width: '70%' }}>
              Name
            </th>
            <th scope='col'>Added On</th>
            <th scope='col'>Priority</th>
            <th scope='col'>Action</th>
          </tr>
        </thead>
        <tbody>
          {todoList.map((todo) => {
            return <Todo key={todo.id} todo={todo} onDelete={onDelete} />;
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
