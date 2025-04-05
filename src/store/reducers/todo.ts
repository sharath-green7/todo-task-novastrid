import { createSelector, createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  data: {
    limit: 0,
    skip: 0,
    todos: [],
    total: 0
  },
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

    createTodo(state, { payload }:{payload: any}) {
      return { ...state, data: {...state.data, todos: [payload, ...state.data.todos] as any, total: state.data.total+1}, errorData: {}, loading: false };
    },

    completeTodo(state, { payload }) {
      let filterArr = state.data.todos;

      filterArr.forEach((todoItem: any) => {
        if(todoItem.id === payload)
          todoItem.completed = true;
      });

      return { ...state, data: {...state.data, todos: filterArr, total: state.data.total-1}, errorData: {}, loading: false };
    },

    deleteTodo(state, { payload }) {
      let filterArr = state.data.todos.filter(
        (item: any) => item.id !== payload
      );
      return { ...state, data: {...state.data, todos: filterArr, total: state.data.total-1}, errorData: {}, loading: false };
    },

    filterTodo(state, { payload }) {
      let filterArr: any = [];
      if(payload !== 'all') {
        payload === 'completed' ? true : false;
        filterArr = state.data.todos.filter(
          (item: any) => item.completed === true
        );
      }
      return { ...state, data: {...state.data, todos: filterArr, total: state.data.todos.length}, errorData: {}, loading: false };
    },
  },
});

export const { setLoading, getTodoList, createTodo, completeTodo, deleteTodo, filterTodo } =
  todoStateSlice.actions;
export const todoInfo = (state: any) => state.todoState;
export const todoInfoDetail = createSelector(todoInfo, (state) => state.data);
export default todoStateSlice.reducer;
