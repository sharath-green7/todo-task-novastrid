import TodoItem from "./todoItem";
import { TodoListInterface } from "../inteface";

const ToDoList = (props: TodoListInterface) => {

  return (
    <>
      {props.todos &&
        props.todos.map((todoItem: any, index: number) => {
          return (
            <TodoItem
              key={index}
              todo={todoItem}
              handleTodoRemove={props.handleTodoRemove}
              handleTodoComplete={props.handleTodoComplete}
            />
          );
        })}
      ;
    </>
  );
};

export default ToDoList;
