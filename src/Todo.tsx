import { ITodo } from './todo.interface';
import trashIcon from './assets/delete.svg';
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
        return 'badge bg-secondary';
      case Priority.MEDIUM:
        return 'badge bg-warning';
      case Priority.HIGH:
        return 'badge bg-danger';
    }
  };

  return (
    <tr>
      <td style={{ width: '70%' }}>{todo.name}</td>
      <td>
        <small>{moment(todo.addedOn).fromNow()}</small>
      </td>
      <td>
        <span className={getBadgeColor(todo)}>{todo.priority}</span>
      </td>

      <td>
        <button
          className='btn btn-outline-light'
          onClick={() => onDelete(todo.addedOn)}
        >
          <img src={trashIcon} alt='Delete' height='25' />
        </button>
      </td>
    </tr>
  );
};

export default Todo;
