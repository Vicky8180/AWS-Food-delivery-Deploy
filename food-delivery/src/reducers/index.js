import CartFormation from "./AddtoCart";
 import {combineReducers} from "redux"
import Searching from "./Searching"

 const rootReducer=combineReducers({
    Searching,
    CartFormation
 });

 export default rootReducer;