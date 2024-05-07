import { combineReducers } from "redux";
import { currentPage } from "./current.page.reducer";
import { userReducer } from "./user.reducer";
export const rootReducer = combineReducers({
  user: userReducer,
  currentPage,
});
