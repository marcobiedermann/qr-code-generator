import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import history from '../router/history';

const middleware = applyMiddleware(routerMiddleware(history));

export default middleware;
