import moment from 'moment';
import React from 'react';
import timeIcon from './assets/time.svg';
import { getBadgeColor } from './helpers';
import { ITodo } from './todo.interface';
interface MobileTodoItemProps {
  todo: ITodo;
  onDelete: (index: Date) => void;
}

const MobileTodoItem: React.FC<MobileTodoItemProps> = ({ todo, onDelete }) => {
  return (
    <div className='card my-3 shadow-sm rounded'>
      <div className='card-body'>
        <div className='d-flex justify-content-between align-items-center'>
          <div>
            <p className='h5'>{todo.name}</p>
            <div className='d-flex align-items-center'>
              <img src={timeIcon} alt='Time' height='11' />
              <small className='ms-1 text-muted'>
                {moment(todo.addedOn).fromNow()}
              </small>
            </div>
          </div>
          <div>
            <span className={getBadgeColor(todo)}>{todo.priority}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTodoItem;
