import { combineReducers } from "redux";
import counter from "../reducers";

export const rootReducer = combineReducers({
    counter,
});
