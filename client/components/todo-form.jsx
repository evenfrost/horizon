import React from 'react';
import { todos } from 'horizon';

function handleSubmit(event) {
  event.preventDefault();

  const { target: { todo: { value } } } = event;

  const todo = {
    name: value,
  };

  todos.store(todo).subscribe(result => console.log(result), err => console.error(err));
}

const TodoForm = () => (
  <form onSubmit={handleSubmit}>
    <input type="text" name="todo" placeholder="new todo" />
    <button type="submit">add</button>
  </form>
);

export default TodoForm;
