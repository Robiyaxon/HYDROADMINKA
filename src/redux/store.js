import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
// import { ContactReducer } from './contact-reducer';
import homeReducer from "./home-reducer";
import { ContactReducer } from './contact-reducer';

let reducers = combineReducers({
    auth: authReducer,
    contactPage: ContactReducer,
    home: homeReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
console.log(store)

export default store;