import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import middleware from '../middleware';
import reducers from '../reducers';

const store = createStore(
  reducers,
  composeWithDevTools(middleware),
);

export default store;
