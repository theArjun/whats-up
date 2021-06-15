import { combineReducers } from 'redux';
import todoReducer from './todoReducer';

const reducers = combineReducers({
  todo: todoReducer,
});

export default reducers;
export type RootState = ReturnType<typeof reducers>;
