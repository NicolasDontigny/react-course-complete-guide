import React, { useState } from 'react';
import { Todo } from '../models.ts/todo.model';

type TodosContextType = {
  items: Todo[];
  onAddTodo: (todo: Todo) => void,
  onRemoveTodo: (id: string) => void,
}

export const TodosContext = React.createContext<TodosContextType>({
  items: [],
  onAddTodo: (todo: Todo) => { },
  onRemoveTodo: (id: string) => { },
})

const TODOS: Todo[] = [
  new Todo('Learn React'),
  new Todo('Learn Typescript'),
  new Todo('Kick ass'),
]

const TodosContextProvider: React.FC = (props) => {
  const [todos, setTodos] = useState<Todo[]>(TODOS);

  const addTodoHandler = (todo: Todo) => {
    setTodos(todos => todos.concat(todo));
  }

  const removeTodoHandler = (id: string) => {
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }

  const contextValue: TodosContextType = {
    items: todos,
    onAddTodo: addTodoHandler,
    onRemoveTodo: removeTodoHandler,
  }

  return <TodosContext.Provider value={contextValue}>{props.children}</TodosContext.Provider>
}

export default TodosContextProvider;
