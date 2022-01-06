import { AppBar, Toolbar, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { connect } from 'react-redux';
import { ITodoItem } from '../store/reducers/todoReducer';

const Navbar = ({ todos }: { todos: ITodoItem[] }) => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={2}
        >
          <Typography variant="h6">Home</Typography>
          <Typography variant="h6">About</Typography>
          <Typography variant="h6">Total Todos: {todos.length}</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
const mapStateToProps = (store: any) => ({
  todos: store.TodoReducer,
});
export default connect(mapStateToProps, {})(Navbar);
