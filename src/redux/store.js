import { applyMiddleware, combineReducers, createStore } from "redux";
import authReducer from "./auth-reducer";
import thunkMiddleware from "redux-thunk";
import homeReducer from "./home-reducer";
import { contactReducer } from './contact-reducer';
import { economicReducer } from './economic-reducer';
import { aboutReducer } from './about-reducer';
import { corporativeReducer } from './corporative-reducer';
import { activitiesReducer } from './activities-reducer';
import { technicalReducer } from './technical-reducer';
import { newsReducer } from './news-reducer';

let reducers = combineReducers({
    auth: authReducer,
    contactPage: contactReducer,
    home: homeReducer,
    economicPage: economicReducer,
    aboutPage: aboutReducer,
    corporativePage: corporativeReducer,
    activityPage: activitiesReducer,
    technicalPage: technicalReducer,
    newsPage: newsReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;
console.log(store)

export default store;