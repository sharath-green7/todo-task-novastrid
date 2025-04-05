import { TodoFormInterface, TodoInterface } from "../inteface";
import { useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import shortid from "shortid";

const ToDoForm = (props: TodoFormInterface) => {
  const [textInput, setTextInput] = useState("");
  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleTextInputChange = (event: any) => {
    setTextInput(event.target.value);
  };

  const handleTodoCreate = () =>{
    if (textInput && textInput.length > 0) {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        todo: textInput,
        completed: false,
      };
      console.log("new", newTodo);
      props.handleTodoCreate(newTodo);
      if (textFieldRef && textFieldRef.current) {
        setTextInput("");
        textFieldRef.current.value = "";
      }
    }
  }

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto" }}>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        mb={2}
      >
        <Typography variant="h5" fontWeight="bold">
          Task List
        </Typography>
      </Stack>
      <Box sx={{ flexDirection: "column" }}>
        <TextField
          id="todo-title"
          label="Enter new todo title"
          variant="filled"
          sx={{ marginBottom: "10px" }}
          placeholder="Enter title"
          onChange={handleTextInputChange}
          inputRef={textFieldRef}
          value={textInput}
        />
        <Button
          variant="contained"
          startIcon={<AddIcon />}
          sx={{ bgcolor: "#6A5ACD", margin: "10px" }}
          onClick={handleTodoCreate}
        >
          Add Task
        </Button>
      </Box>
    </Box>
  );
};
export default ToDoForm;
