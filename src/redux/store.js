import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import homeReducer from "./home-reducer";
import { contactReducer } from './contact-reducer';
import { economicReducer } from './economic-reducer';

let reducers = combineReducers({
    auth: authReducer,
    contactPage: contactReducer,
    home: homeReducer,
    economicPage: economicReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
console.log(store)

export default store;