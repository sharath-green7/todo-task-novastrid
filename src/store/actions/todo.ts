  import { TodoInterface } from "../../inteface";
import { getTodoList, createTodo, completeTodo, deleteTodo, setLoading } from "../reducers/todo";
  
  export function getAllTodo() {
    return function (dispatch: any) {
      dispatch(setLoading(true));
      const requestOptions = {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      };
      return fetch(`https://dummyjson.com/todos`, requestOptions)
        .then(
          (response) => response.json(),
          (error) => console.log("An error occurred.", error)
        )
        .then((json) => {
            dispatch(getTodoList(json));
            dispatch(setLoading(false));
        });
    };
  }

  export function createTodoAction(todoNew: TodoInterface) {
    return function (dispatch: any) {
      dispatch(setLoading(true));
      dispatch(createTodo(todoNew));
      dispatch(setLoading(false));
    };
  }

  export function deleteTodoAction(todoId: string) {
    return function (dispatch: any) {
      dispatch(setLoading(true));
      dispatch(deleteTodo(todoId));
      dispatch(setLoading(false));
    };
  }

  export function completeTodoAction(todoId: string) {
    return function (dispatch: any) {
      dispatch(setLoading(true));
      dispatch(completeTodo(todoId));
      dispatch(setLoading(false));
    };
  }