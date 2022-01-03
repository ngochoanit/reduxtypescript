import {
  Checkbox,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { Box } from '@mui/system';
import DeleteIcon from '@mui/icons-material/Delete';
import React, { useState } from 'react';
interface ITodoItem {
  id: number;
  title: string;
  completed: false;
}
const Todos = () => {
  const [todos, setTodos] = useState<ITodoItem[]>([
    { id: 1, title: 'Title1', completed: false },
    { id: 2, title: 'Title1', completed: false },
    { id: 3, title: 'Title2', completed: false },
  ]);
  return (
    <Box>
      <List>
        {todos &&
          todos.length > 0 &&
          todos.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <IconButton color="error" edge="end" aria-label="delete">
                  <DeleteIcon />
                </IconButton>
              }
              disablePadding
            >
              <ListItemButton>
                <ListItemIcon>
                  <Checkbox></Checkbox>
                </ListItemIcon>
                <ListItemText primary={item.title}></ListItemText>
              </ListItemButton>
            </ListItem>
          ))}
      </List>
    </Box>
  );
};

export default Todos;
