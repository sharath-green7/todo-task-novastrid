import {
  Card,
  CardContent,
  Typography,
  Checkbox,
  Stack,
  Box,
  IconButton
} from "@mui/material";
import { TodoItemInterface } from "../inteface";
import DeleteIcon from '@mui/icons-material/Delete';

const ToDoItem = (props: TodoItemInterface) => {
  return (
    <Box sx={{ maxWidth: "600px", margin: "auto" }}>
      <Card key={props.todo.id} sx={{ mb: 2, borderRadius: 2, boxShadow: 2 }}>
        <CardContent>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="body2" fontWeight="bold">
                Title
              </Typography>
              <Typography variant="h6">{props.todo.todo}</Typography>
            </Box>

            <Stack direction="row" alignItems="center" spacing={1}>
              <Checkbox />
                <IconButton color="error" onClick={() => props.handleTodoRemove(props.todo.id)}>
                    <DeleteIcon />
                </IconButton>
            </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
};
export default ToDoItem;
