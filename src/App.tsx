import React, { useEffect, useRef, useState } from 'react';
import FlipMove from 'react-flip-move';
import { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
import Empty from './components/Empty';
import { useActions } from './hooks/useActions';
import { useTypedSelector } from './hooks/useTypedSelector';
import { Priority } from './priority.enum';
import './scss/style.scss';
import { fetchTodos } from './services/todo';
import TodoItem from './TodoItem';

const App = () => {
  const [todo, setTodo] = useState('');
  const [priority, setPriority] = useState<Priority>(Priority.LOW);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

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

  const onAddHandler = (
    event: React.KeyboardEvent | React.FocusEvent<HTMLInputElement>
  ) => {
    addTodo(todo, Priority['LOW']);
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
        <div className='container-fluid'>
          <input
            className='todoEntry'
            ref={inputRef}
            onChange={onChange}
            value={todo}
            onKeyPress={handleKeyPress}
            onBlur={onAddHandler}
            aria-describedby='addTodo'
            placeholder="What's up, Arjun ?"
            aria-label="What's up, Arjun ?"
          />
        </div>
      </div>

      {todoList.length === 0 ? (
        <Empty />
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
      <Toaster
        position={isMobileDevice ? 'top-center' : 'bottom-right'}
        toastOptions={{
          duration: isMobileDevice ? 1000 : 2000,
          icon: '🔔',
          style: {
            color: '#333',
          },
          success: {
            style: {
              background: 'lightgreen',
            },
          },
          error: {
            style: {
              background: '#ff9999',
              color: '#333',
            },
          },
        }}
      />
    </div>
  );
};

export default App;
