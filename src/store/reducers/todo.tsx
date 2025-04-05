import { createSelector, createSlice } from "@reduxjs/toolkit";
import { TodoInterface } from "../../inteface";

const initialState = {
  loading: false,
  data: [],
  errorData: {},
};
const todoStateSlice = createSlice({
  name: "todoState",
  initialState: initialState,
  reducers: {
    setLoading(state, { payload }) {
      return { ...state, loading: payload };
    },
    getTodoList(state, { payload }) {
      return { ...state, data: payload, errorData: {}, loading: false };
    },

    createTodo(state, { payload }) {
      return { ...state, data: payload, errorData: {}, loading: false };
    },

    completeTodo(state, { payload }) {
      let filterArr = state.data
        .filter((item: any) => item.id === parseInt(payload))
        filterArr && filterArr.length > 0 && filterArr.forEach((todoItem: TodoInterface) => {
          todoItem.completed = true;
        });

      return { ...state, data: filterArr, errorData: {}, loading: false };
    },

    deleteTodo(state, { payload }) {
      let filterArr = state.data.filter(
        (item: any) => item.id !== parseInt(payload)
      );
      return { ...state, data: filterArr, errorData: {}, loading: false };
    },
  },
});

export const { setLoading, getTodoList, createTodo, completeTodo, deleteTodo } = todoStateSlice.actions;
export const todoInfo = (state: any) => state.todoState;
export const todoInfoDetail = createSelector(todoInfo, (state) => state.data);
export default todoStateSlice.reducer;
