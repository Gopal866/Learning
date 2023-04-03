import { combineReducers } from "redux";
import { membersList } from "./Redux/Reducer/MembersReducers";

export const createReducer = (injectedReducers) => {
  return combineReducers({ membersList, ...injectedReducers });
}
