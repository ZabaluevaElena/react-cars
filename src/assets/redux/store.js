import {createStore, compose, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducer";

const composeEnhencers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  composeEnhencers(applyMiddleware(thunk))
);


export default store;