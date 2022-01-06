import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';
import { Provider } from 'react-redux';
import store from './store/store';

function App() {
  return (
    <Provider store={store}>
      <Container maxWidth="md">
        <Navbar></Navbar>
        <TodoForm></TodoForm>
        <Todos></Todos>
      </Container>
    </Provider>
  );
}

export default App;
