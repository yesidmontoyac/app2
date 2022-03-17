import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from 'redux-thunk';
import { tareasReducer } from "../reducers/tareasReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    tareas: tareasReducer
})

export const store = createStore(reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);