import toast from 'react-hot-toast';
import { Priority } from '../../priority.enum';
import { ITodo } from '../../todo.interface';
import { TodoActionType } from '../action-types';

const notifyCompleted = () => toast.success('Marked as done.');
const notifyDeleted = () => toast.error('Todo deleted.');
const notifyEmptyTodo = () => toast.error('Todo cant be empty.');

export const addTodo = (todo: string, priority: Priority) => {
  return (dispatch: any) => {
    // Check if empty value
    if (todo === '') {
      dispatch({
        type: TodoActionType.ADD_TODO_ERROR,
        payload: 'Todo is Empty',
      });
      notifyEmptyTodo();
    } else {
      const newTodo: ITodo = {
        name: todo,
        addedOn: new Date(),
        id: Math.floor(Math.random() * 1000000 + 1),
        priority: priority,
      };
      dispatch({
        type: TodoActionType.ADD_TODO,
        payload: newTodo,
      });
    }
  };
};

export const completeTodo = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: TodoActionType.COMPLETE_TODO,
      payload: id,
    });
    notifyCompleted();
  };
};

export const deleteTodo = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: TodoActionType.DELETE_TODO,
      payload: id,
    });
    notifyDeleted();
  };
};
