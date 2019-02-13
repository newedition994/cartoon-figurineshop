import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';
import figurines from './reducers/figurines';

const reducers = combineReducers({
    figurines: figurines
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store