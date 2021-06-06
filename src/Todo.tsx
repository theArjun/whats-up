import { ITodo } from './todo.interface';
import taskCompleteIcon from './assets/tasks.svg';
import deleteIcon from './assets/delete.svg';
import timeIcon from './assets/time.svg';
import moment from 'moment';
import { Priority } from './priority.enum';

interface TodoProps {
  todo: ITodo;
  onDelete: (index: Date) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete }) => {
  const getBadgeColor = (todo: ITodo) => {
    switch (todo.priority) {
      case Priority.LOW:
        return 'badge rounded-pill bg-secondary';
      case Priority.MEDIUM:
        return 'badge rounded-pill bg-warning';
      case Priority.HIGH:
        return 'badge rounded-pill bg-danger';
    }
  };

  return (
    <div className='card my-4 shadow-sm rounded'>
      <div className='card-body'>
        <div className='d-flex justify-content-between'>
          <div className='d-flex flex-sm-column flex-md-row  align-items-center'>
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
              onClick={() => onDelete(todo.addedOn)}
            >
              <img src={taskCompleteIcon} alt='Mark as Completed' height='25' />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todo;
