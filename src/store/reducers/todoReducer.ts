export interface ITodoItem {
  id: number;
  title: string;
  completed: false;
}

const TodoInit: ITodoItem[] = [
  { id: 1, title: 'Title1', completed: false },
  { id: 2, title: 'Title1', completed: false },
  { id: 3, title: 'Title2', completed: false },
];
const TodoReducer = (state = TodoInit, action: any) => {
  return state;
};
export default TodoReducer;
