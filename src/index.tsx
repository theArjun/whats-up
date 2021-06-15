import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Todo from './views/Todo';
import reportWebVitals from './reportWebVitals';
import { store } from './state';

ReactDOM.render(
  <Provider store={store}>
    <Todo />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
