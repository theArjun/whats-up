import toast from 'react-hot-toast';
import { ITodo } from '../../todo.interface';
import { TodoActionType } from '../action-types';

const notifyCompleted = () => toast.success('Marked as done.');
const notifyDeleted = () => toast.error('Todo deleted.');

export const addTodo = (todo: ITodo) => {
  return (dispatch: any) => {
    dispatch({
      type: TodoActionType.ADD_TODO,
      payload: todo,
    });
  };
};

export const completeTodo = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: TodoActionType.COMPLETE_TODO,
      payload: id,
    });
    notifyCompleted()
  };
};

export const deleteTodo = (id: number) => {
  return (dispatch: any) => {
    dispatch({
      type: TodoActionType.DELETE_TODO,
      payload: id,
    });
    notifyDeleted()
  };
};
