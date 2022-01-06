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
import { ITodoItem } from '../store/reducers/todoReducer';
import { connect } from 'react-redux';

const Todos = ({ todos }: { todos: ITodoItem[] }) => {
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
const mapStateToProps = (store: any) => ({
  todos: store.TodoReducer,
});
export default connect(mapStateToProps, {})(Todos);
