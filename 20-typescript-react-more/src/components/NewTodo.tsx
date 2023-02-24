import { useContext, useRef } from 'react';
import { Todo } from '../models.ts/todo.model';
import { TodosContext } from '../store/todos-context';

type NewTodoProps = {
  onAdd: (todo: Todo) => void,
}

const NewTodo: React.FC = (props) => {
  const { onAddTodo } = useContext(TodosContext);
  const todoTextInputRef = useRef<HTMLInputElement>(null);
  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const todoText = todoTextInputRef.current?.value;
    if (!todoText || !todoText.trim()) return;

    const newTodo = new Todo(todoText);
    onAddTodo(newTodo);
  }

  return <form onSubmit={submitHandler} className='form'>
    <label htmlFor="todo-text">Todo text</label>
    <input id="todo-text" name="todo-text" type="text" ref={todoTextInputRef} />
    <button type='submit'>Add Todo</button>
  </form>
}

export default NewTodo;
