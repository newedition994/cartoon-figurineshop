import {
    createStore,
    applyMiddleware,
    combineReducers
} from 'redux';
import thunk from 'redux-thunk';

const figurinesReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_FIGURINES_SUCCESS':
            return action.figurines;

        default:
            return state;
    }
}

const reducers = combineReducers({
    figurines: figurinesReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
    reducers,
    composeEnhancer(applyMiddleware(thunk)),
);

export default store