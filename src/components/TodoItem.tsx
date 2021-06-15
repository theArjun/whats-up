import { forwardRef } from 'react';
import { useMediaQuery } from 'react-responsive';
import DesktopTodoItem from './DesktopTodoItem';
import MobileTodoItem from './MobileTodoItem';
import { ITodo } from '../views/todo.interface';

interface TodoProps {
  todo: ITodo;
  onDelete: (index: number) => void;
  onComplete: (index: number) => void;
}

const TodoItem: React.FC<TodoProps> = forwardRef((props, ref) => {
  const { todo, onDelete, onComplete } = props;
  const isMobileDevice = useMediaQuery({
    query: '(max-device-width: 1224px)',
  });

  return (
    // Resolve ref error
    // https://stackoverflow.com/a/63130433/9755816
    <div ref={ref as React.RefObject<HTMLDivElement>}>
      {isMobileDevice ? (
        <MobileTodoItem
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      ) : (
        <DesktopTodoItem
          todo={todo}
          onDelete={onDelete}
          onComplete={onComplete}
        />
      )}
    </div>
  );
});

export default TodoItem;
