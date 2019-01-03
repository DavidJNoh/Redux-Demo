import { combineReducers } from "redux";
import postReducer from "./postReducer";

export default combineReducers({
  //name your reducer, for example 'posts', it will be used in components
  posts: postReducer
});
