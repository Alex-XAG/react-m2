import React from 'react';
import { ToDo } from './ToDo';
import todoList from '../../todo.json';

export class ToDoList extends React.Component {
  state = {
    todoList: todoList,
  };

  hadleCheckCompleted = id => {
    this.setState(prevState => {
      return {
        todoList: prevState.todoList.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ),
      };
    });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      todoList: prevState.todoList.filter(todo => todo.id !== id),
    }));
  };

  render() {
    return (
      <>
        <h1 className="todo-title">My To-Do</h1>
        <ul className="list-group list-group-flush">
          {this.state.todoList.map(todo => (
            <ToDo
              key={todo.id}
              todo={todo}
              hadleCheckCompleted={this.hadleCheckCompleted}
              handleDelete={this.handleDelete}
            />
          ))}
        </ul>
      </>
    );
  }
}
