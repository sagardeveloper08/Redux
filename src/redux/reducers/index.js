import { combineReducers } from "redux";
import { productReducer } from "./ProductReducers";

const reducers = combineReducers({
    all:productReducer
})


export default reducers