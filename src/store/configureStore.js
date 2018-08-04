import { createStore, combineReducers, compose } from "redux";
import placesReducer from './reducers/places';

const rootReducer = combineReducers({
    places: placesReducer
});


//this is for debugging purpose
let componseEnhancers = compose;

if(__DEV__) {
    componseEnhancers = window._REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
}

const configureStore = () => {
    return createStore(rootReducer, componseEnhancers())
};

export default configureStore;