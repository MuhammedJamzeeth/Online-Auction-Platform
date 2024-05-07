import { USER_ACTION_OPTIONS } from "../constants/user.type";
import { createAction } from "../reducers/createAction";

export const setCurrentUser = (user) =>
  createAction(USER_ACTION_OPTIONS.SET_CURRENT_USER, user);
