import { useContext } from 'react';
import { Todo } from '../models.ts/todo.model'
import { TodosContext } from '../store/todos-context';
import classes from './TodoItem.module.css';

type TodoItemProps = {
  item: Todo;
}

const TodoItem: React.FC<TodoItemProps> = (props) => {
  const todosCtx = useContext(TodosContext);

  return <li className={classes.item}>
    {props.item.id}: {props.item.name} <button onClick={todosCtx.onRemoveTodo.bind(null, props.item.id)}>Remove</button>
  </li>
}

export default TodoItem;
