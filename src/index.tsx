import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './views/Todo';
import reportWebVitals from './reportWebVitals';
import { store } from './state';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
