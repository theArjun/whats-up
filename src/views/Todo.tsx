import React, { useEffect, useRef, useState } from 'react';
import FlipMove from 'react-flip-move';
import Toast from '../components/Toast';
import TodoItem from '../components/TodoItem';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';
import Empty from '../reusables/Empty';
import '../scss/style.scss';
import { fetchTodos } from '../services/todo';
import { Priority } from './priority.enum';

const Todo = () => {
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.LOW);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const { addTodo, completeTodo, deleteTodo } = useActions();
  const { todoList } = useTypedSelector((state) => state.todo);

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

  const handlePriorityChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const value = event.target.value;
    if (value === 'HIGH' || value === 'MEDIUM' || value === 'LOW') {
      setPriority(Priority[value]);
    } else {
      // Type Guard
      return;
    }
  };

  const onAddHandler = (event: React.KeyboardEvent) => {
    addTodo(todo, priority);
    setTodo('');
    inputRef.current?.focus();
  };

  const onDeleteHandler = (id: number) => {
    deleteTodo(id);
  };

  const onCompleteHandler = (id: number) => {
    completeTodo(id);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      onAddHandler(event);
    }
  };

  return (
    <div className='container'>
      <div className='form-entry p-5 my-4 bg-warning rounded shadow-sm'>
        <select className='choosePriority' onChange={handlePriorityChange}>
          <optgroup label='Todo Priority'>
            <option value='HIGH'>HIGH</option>
            <option value='MEDIUM'>MEDIUM</option>
            <option value='LOW' selected>
              LOW
            </option>
          </optgroup>
        </select>
        <div className='container-fluid'>
          <input
            className='todoEntry'
            ref={inputRef}
            onChange={onChange}
            value={todo}
            onKeyPress={handleKeyPress}
            aria-describedby='addTodo'
            placeholder="What's up, Arjun ?"
            aria-label="What's up, Arjun ?"
          />
        </div>
      </div>

      {todoList.length === 0 ? (
        <Empty message='No Jobs, yet.' />
      ) : (
        <FlipMove>
          {todoList.map((todo) => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onDelete={onDeleteHandler}
              onComplete={onCompleteHandler}
            />
          ))}
        </FlipMove>
      )}
      <Toast />
    </div>
  );
};

export default Todo;
