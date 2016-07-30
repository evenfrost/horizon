import React, { Component, PropTypes } from 'react';
import TodoList from 'components/todo-list';
import TodoForm from 'components/todo-form';
import { todos as todosCollection } from 'horizon';

export default class App extends Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    todosCollection.watch().subscribe(todos => {
      this.setState({ todos });
    });
  }

  render() {
    return (
      <div>
        <TodoList todos={this.state.todos} />
        <TodoForm />
      </div>
    );
  }
}

// App.propTypes = {
//   state: PropTypes.object,
// };
