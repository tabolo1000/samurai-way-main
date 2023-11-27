import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import {userReducer} from "./userReducer";
import authReducer from "./authReducer";



let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    userReducer,
    authReducer,
})

let store = createStore(reducers);



export default store;