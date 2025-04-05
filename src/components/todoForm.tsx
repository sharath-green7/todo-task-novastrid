import { TodoFormInterface, TodoInterface } from "../inteface";
import { useRef, useState } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import shortid from "shortid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const ToDoForm = (props: TodoFormInterface) => {
  const [textInput, setTextInput] = useState("");
  const [status, setStatus] = useState("all");
  const textFieldRef = useRef<HTMLInputElement>(null);

  const handleStatusChange = (event: SelectChangeEvent) => {
    const statusSelectd = event.target.value;
    setStatus(statusSelectd);
    props.handleStatusChange(statusSelectd);
  };

  const handleTextInputChange = (event: any) => {
    setTextInput(event.target.value);
  };

  const handleTodoCreate = () => {
    if (textInput && textInput.length > 0) {
      const newTodo: TodoInterface = {
        id: shortid.generate(),
        todo: textInput,
        completed: false,
      };
      props.handleTodoCreate(newTodo);
      if (textFieldRef && textFieldRef.current) {
        setTextInput("");
        textFieldRef.current.value = "";
      }
    }
  };

  return (
    <Box sx={{ maxWidth: "600px", margin: "auto" }}>
      <Box sx={{ flexDirection: "column", textAlign: "center" }}>
      <Typography variant="h5" fontWeight="bold" className="textCenter">
          Create New Task
        </Typography>
        <TextField
          id="todo-title"
          label="Create new ToDo"
          variant="filled"
          sx={{ marginBottom: "10px", marginTop: "10px" }}
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
      <Box sx={{ alignItems: "center" }}>
        <Typography variant="h5" fontWeight="bold" className="textCenter">
          Tasks List
        </Typography>
        <FormControl fullWidth className="mt-10">
          <InputLabel id="Status-select-label">Status</InputLabel>
          <Select
            labelId="Status-select-label"
            id="Status-select"
            value={status}
            label="Select"
            onChange={handleStatusChange}
            className="selectWidth"
          >
            <MenuItem value={"all"}>All</MenuItem>
            <MenuItem value={"completed"}>Completed</MenuItem>
            <MenuItem value={"pending"}>Pending</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </Box>
  );
};
export default ToDoForm;
