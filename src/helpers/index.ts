import { Priority } from '../priority.enum';
import { ITodo } from '../todo.interface';

export const getBadgeColor = (todo: ITodo) => {
  switch (todo.priority) {
    case Priority.LOW:
      return 'badge rounded-pill bg-secondary';
    case Priority.MEDIUM:
      return 'badge rounded-pill bg-warning';
    case Priority.HIGH:
      return 'badge rounded-pill bg-danger';
  }
};
