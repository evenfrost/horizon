import React from 'react';
import TodoItem from 'components/todo-item';

const TodoList = ({ todos }) => (
  <ul>
    {todos.map(todoItem => <TodoItem todo={todoItem} />)}
  </ul>
);

export default TodoList;
