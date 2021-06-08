import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopTodoItem from './DesktopTodoItem';
import MobileTodoItem from './MobileTodoItem';
import { ITodo } from './todo.interface';

interface TodoProps {
  todo: ITodo;
  onDelete: (index: number) => void;
}

const TodoItem: React.FC<TodoProps> = forwardRef((props, ref) => {
  const { todo, onDelete } = props;
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  return (
    // Resolve ref error
    // https://stackoverflow.com/a/63130433/9755816
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {isMobileDevice ? (
        <MobileTodoItem todo={todo} onDelete={onDelete} />
      ) : (
        <DesktopTodoItem todo={todo} onDelete={onDelete} />
      )}
    </div>
  );
});

export default TodoItem;
