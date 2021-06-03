import { ITodo } from './todo.interface';
import trashIcon from './assets/delete.svg';

interface TodoProps {
  todo: ITodo;
  onDelete: (index: Date) => void;
}

const Todo = ({ todo, onDelete }: TodoProps) => {
  return (
    <tr>
      <td style={{ width: '50%' }}>{todo.name}</td>
      <td>
        <button
          className='btn btn-outline-light'
          onClick={() => onDelete(todo.addedOn)}
        >
          <img src={trashIcon} alt='Delete' height="25" />
        </button>
      </td>
    </tr>
  );
};

export default Todo;
