import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import Empty from './components/Empty';
import { Priority } from './priority.enum';
import { fetchTodos } from './services/todo';
import { ITodo } from './todo.interface';
import TodoItem from './TodoItem';

const App = () => {
  const [todo, setTodo] = useState('');
  // eslint-disable-next-line
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

  useEffect(() => {
    fetchTodos();
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

  return (
    <div className='container'>
      <div className='form-entry p-5 my-4 bg-warning rounded shadow-sm'>
        <div className='container-fluid py-5'>
          <input
            className='todoEntry'
            ref={inputRef}
            onChange={onChange}
            value={todo}
            onKeyPress={handleKeyPress}
            onBlur={addTodo}
            aria-describedby='addTodo'
            placeholder="What's up, Arjun ?"
            aria-label="What's up, Arjun ?"
          />
        </div>
      </div>
      <div>
        {todoList.length > 0 ? (
          todoList.map((todo) => {
            return <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />;
          })
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default App;
