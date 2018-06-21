import { applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import history from '../router/history';

const middleware = applyMiddleware(routerMiddleware(history));

export default middleware;
