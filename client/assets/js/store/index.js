import { createStore } from 'redux';
import middleware from '../middleware';

const store = createStore(middleware);

export default store;
