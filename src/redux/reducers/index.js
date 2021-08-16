import pizzas from "../reducers/pizzas";
import filters from "../reducers/filters";
import {combineReducers} from "redux";

const rootReducer = combineReducers ({
    pizzas,
    filters
});

export default rootReducer;