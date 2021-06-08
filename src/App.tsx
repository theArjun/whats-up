import React, { useEffect, useRef, useState } from 'react';
import FlipMove from 'react-flip-move';
import toast, { Toaster } from 'react-hot-toast';
import { useMediaQuery } from 'react-responsive';
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
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  const notifyCompleted = () => toast.success('Congrats on completion.');
  const notifyDeleted = () => toast.error('Todo deleted.');

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

  const onDelete = (id: number) => {
    setTodoList((prevTodoList) =>
      prevTodoList.filter((todo) => todo.id !== id)
    );
    notifyDeleted();
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      addTodo(event);
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
            onBlur={addTodo}
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
            <TodoItem key={todo.id} todo={todo} onDelete={onDelete} />
          ))}
        </FlipMove>
      )}
      <Toaster
        position={isMobileDevice ? 'top-center' : 'bottom-right'}
        toastOptions={{
          duration: isMobileDevice ? 1000 : 2000,
          icon: '✅',
        }}
      />
    </div>
  );
};

export default App;
