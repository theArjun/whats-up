import { ITodo } from '../../todo.interface';
import { TodoActionType } from '../action-types';

interface AddTodoAction {
  type: TodoActionType.ADD_TODO;
  payload: ITodo;
}

interface CompleteTodoAction {
  type: TodoActionType.COMPLETE_TODO;
  payload: number;
}

interface DeleteTodoAction {
  type: TodoActionType.DELETE_TODO;
  payload: number;
}

export type Action = AddTodoAction | CompleteTodoAction | DeleteTodoAction;
