import { Priority } from '../views/priority.enum';
import { ITodo } from '../views/todo.interface';

export const getBadgeColor = (todo: ITodo) => {
  switch (todo.priority) {
    case Priority.LOW:
      return 'badge rounded-pill bg-secondary';
    case Priority.MEDIUM:
      return 'badge rounded-pill bg-primary';
    case Priority.HIGH:
      return 'badge rounded-pill bg-danger';
  }
};
