import { getRequestWrapper } from '..';
import { TODO_URL } from '../urls';

export const fetchTodos = async () => {
  try {
    return await getRequestWrapper(TODO_URL);
  } catch (e) {
    throw e;
  }
};
