import {createStore, combineReducers} from "redux";
import profileReducer from "./profileReducer";
import dialogReducer from "./dialogReducer";
import {userReducer} from "./userReducer";



let reducers = combineReducers({
    profileReducer,
    dialogReducer,
    userReducer,
})

let store = createStore(reducers);

export default store;