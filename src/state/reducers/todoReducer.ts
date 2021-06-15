import { ITodo } from '../../views/todo.interface';
import { TodoActionType } from '../action-types';
import { Action } from '../actions';

interface TodoState {
  error: string;
  todoList: ITodo[];
  completedTodoList: ITodo[];
}

const initialState: TodoState = {
  error: '',
  todoList: [],
  completedTodoList: [],
};

const reducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case TodoActionType.ADD_TODO:
      return {
        ...state,
        error: '',
        todoList: [action.payload, ...state.todoList],
      };
    case TodoActionType.ADD_TODO_ERROR:
      return {
        ...state,
        error: action.payload,
      };
    case TodoActionType.DELETE_TODO:
      return {
        ...state,
        error: '',
        todoList: state.todoList.filter((_todo) => _todo.id !== action.payload),
      };
    case TodoActionType.COMPLETE_TODO:
      const todoID = action.payload;
      const completedTodo = state.todoList.find((_todo) => _todo.id === todoID);
      if (completedTodo === undefined) {
        return state;
      }
      return {
        error: '',
        completedTodoList: [completedTodo, ...state.completedTodoList],
        todoList: state.todoList.filter((_todo) => _todo.id !== todoID),
      };

    default:
      return state;
  }
};
export default reducer;
