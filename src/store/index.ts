import {
    applyMiddleware,
    combineReducers,
    createStore,
  } from "@reduxjs/toolkit";
  import thunk from "redux-thunk";
  import todoStateSlice from "./reducers/todo";
  
  const rootReducer = combineReducers({
    todoState: todoStateSlice,
  });

  export default createStore(rootReducer, applyMiddleware(thunk));
  
  export type IRootState = ReturnType<typeof rootReducer>;
  