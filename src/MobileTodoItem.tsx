import moment from 'moment';
import React from 'react';
import { useSwipeable } from 'react-swipeable';
import timeIcon from './assets/time.svg';
import { getBadgeColor } from './helpers';
import { ITodo } from './todo.interface';

interface MobileTodoItemProps {
  todo: ITodo;
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

const MobileTodoItem: React.FC<MobileTodoItemProps> = ({
  todo,
  onDelete,
  onComplete,
}) => {
  const handlers = useSwipeable({
    onSwipedLeft: () => {
      onComplete(todo.id);
    },
    onSwipedRight: () => {
      onDelete(todo.id);
    },
  });

  return (
    <div {...handlers} className='card my-3 shadow-sm rounded unselectable'>
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
