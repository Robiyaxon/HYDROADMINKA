import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import homeReducer from "./home-reducer";

let reducers = combineReducers({
    auth: authReducer,
    home: homeReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
console.log(store)

export default store;