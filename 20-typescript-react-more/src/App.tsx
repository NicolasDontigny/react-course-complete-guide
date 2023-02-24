import { useContext, useState } from 'react';
import './App.css';
import Todos from './components/Todos';
import { Todo } from './models.ts/todo.model';
import { TodosContext } from './store/todos-context';

function App() {
  // const [todos, setTodos] = useState<Todo[]>(TODOS)
  const { items: todos } = useContext(TodosContext);

  // const addTodoHandler = (todo: Todo) => {
  //   setTodos(todos => todos.concat(todo));
  // }

  // const removeTodoHandler = (id: string) => {
  //   setTodos(todos => todos.filter(todo => todo.id !== id));
  // }

  return (
    <div className="App">
      <h1>With Typescript</h1>

      <Todos items={todos}></Todos>
    </div >
  );
}

export default App;
