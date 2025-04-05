import { FC, useEffect } from "react";
import ToDoList from "./components/todoList";
import { TodoInterface } from "./inteface";
import ToDoForm from "./components/todoForm";
import { useDispatch, useSelector } from "react-redux";
import { getAllTodo, completeTodoAction, createTodoAction, deleteTodoAction } from "./store/actions/todo";

interface AppProps {
  title: string;
}

const App: FC<AppProps> = ({ title }) => {
 const todoList = useSelector((state: any) => state.todoState);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch<any>(getAllTodo());
  }, [dispatch]);
  console.log("todoListUI", todoList);

  const addTodo = (newTodo: TodoInterface) => {
    dispatch<any>(createTodoAction(newTodo));
  };

  function handleTodoRemove(id: string) {
    dispatch<any>(deleteTodoAction(id));
  }

  function handleTodoComplete(id: string) {
    dispatch<any>(completeTodoAction(id));
  }
  return (
    <div>
      <h1 className="textCenter">{title}</h1>
      <ToDoForm handleTodoCreate={addTodo} />
      <ToDoList
        todos={todoList.data.todos}
        handleTodoRemove={handleTodoRemove}
        handleTodoComplete={handleTodoComplete}
      />
    </div>
  );
};

export default App;
