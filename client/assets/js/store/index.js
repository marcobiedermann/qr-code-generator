import { connectRouter } from 'connected-react-router';
import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleware from './middleware';
import reducers from '../reducers';
import history from '../router/history';

const store = createStore(
  connectRouter(history)(reducers),
  composeWithDevTools(middleware),
);

export default store;
