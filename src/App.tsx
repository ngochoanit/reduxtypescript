import { Container } from '@mui/material';
import './App.css';
import Navbar from './components/Navbar';
import TodoForm from './components/TodoForm';
import Todos from './components/Todos';

function App() {
  return (
    <Container maxWidth="md">
      <Navbar></Navbar>
      <TodoForm></TodoForm>
      <Todos></Todos>
    </Container>
  );
}

export default App;
