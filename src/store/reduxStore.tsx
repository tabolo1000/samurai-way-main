import {createStore, combineReducers, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import {followThunk, userReducer} from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from "redux-thunk"



let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    userReducer,
    authReducer,
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware));



export default store;