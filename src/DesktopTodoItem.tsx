import moment from 'moment';
import React from 'react';
import deleteIcon from './assets/delete.svg';
import taskCompleteIcon from './assets/tasks.svg';
import timeIcon from './assets/time.svg';
import { getBadgeColor } from './helpers';
import { ITodo } from './todo.interface';

interface DesktopTodoItemProps {
  todo: ITodo;
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

const DesktopTodoItem: React.FC<DesktopTodoItemProps> = ({
  todo,
  onDelete,
  onComplete,
}) => {
  return (
    <div className='card my-4 shadow-sm rounded'>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-md-row align-items-center'>
            <div>
              <span className={getBadgeColor(todo)}>{todo.priority}</span>
            </div>
            <div className=' ms-2 d-flex align-items-center'>
              <img src={timeIcon} alt='Time' height='12' />
              <small className='ms-1 text-muted'>
                {moment(todo.addedOn).fromNow()}
              </small>
            </div>
          </div>
          <div className='mx-auto'>
            <p className='h4'>{todo.name}</p>
          </div>
          <div className=''>
            <button
              className='btn btn-outline-light'
              onClick={() => onComplete(todo.id)}
            >
              <img src={taskCompleteIcon} alt='Mark as Done' height='25' />
            </button>
          </div>
          <div className=''>
            <button
              className='btn btn-outline-light'
              onClick={() => onDelete(todo.id)}
            >
              <img src={deleteIcon} alt='Delete Todo' height='25' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DesktopTodoItem;
