import { useMediaQuery } from 'react-responsive';
import DesktopTodoItem from './DesktopTodoItem';
import MobileTodoItem from './MobileTodoItem';
import { ITodo } from './todo.interface';

interface TodoProps {
  todo: ITodo;
  onDelete: (index: number) => void;
}

const Todo: React.FC<TodoProps> = ({ todo, onDelete }) => {
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  return (
    <div>
      {isMobileDevice ? (
        <MobileTodoItem todo={todo} onDelete={onDelete} />
      ) : (
        <DesktopTodoItem todo={todo} onDelete={onDelete} />
      )}
    </div>
  );
};

export default Todo;
