import React from 'react';
import { Todo } from '../models.ts/todo.model';
import NewTodo from './NewTodo';
import TodoItem from './TodoItem';
import classes from './Todos.module.css';

type TodoProps = {
  items: Todo[];
  // onAddTodo: (todo: Todo) => void,
  // onRemoveTodo: (id: string) => void,
}

// React.FC is option al (Functional Component), but used here for typing the props
export const Todos: React.FC<TodoProps> = (props) => {
  return <React.Fragment>
    <NewTodo></NewTodo>
    <ul className={classes.todos}>
      {props.items.map(item =>
        <TodoItem key={item.id} item={item} />
        // <TodoItem key={item.id} item={item} onRemove={props.onRemoveTodo.bind(null, item.id)} />
      )}
    </ul>
  </React.Fragment>
}

export default Todos;
