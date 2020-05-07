import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const root = document.getElementById("root");

const TodoItem = props => (
  <li
    style={{ textDecoration: props.task.completed ? "line-through" : "none" }}
  >
    {props.task.description}
    <input
      type="checkbox"
      checked={props.task.completed}
      onChange={props.checkboxChecked}
    />
    <button onClick={props.deleteTask}>Delete task</button>
  </li>
);

class TodoList extends React.Component {
  state = {
    todos: [
      {
        id: 1,
        description: "Get out of bed",
        completed: true
      },
      {
        id: 2,
        description: "Brush teeth",
        completed: false
      },
      {
        id: 3,
        description: "Eat breakfast",
        completed: false
      }
    ],
    newTodo: {
      id: 4,
      description: "Eat dinner",
      completed: false
    },
    initialValue: 0
  };

  componentDidMount() {
    setInterval(() => {
      this.setState({ initialValue: this.state.initialValue + 1 });
    }, 1000);
  }

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, this.state.newTodo] });
  };

  checkboxChecked = currentIndex => {
    this.setState({
      todos: this.state.todos.map((task, index) => {
        if (currentIndex === index) {
          return {
            ...task,
            completed: !task.completed
          };
        } else {
          return task;
        }
      })
    });
  };

  deleteTask = taskId => {
    this.setState({
      todos: this.state.todos.filter(task => taskId !== task.id)
    });
  };

  render() {
    return (
      <>
        <p>
          You have used <strong>{this.state.initialValue}</strong> seconds on
          this website
        </p>
        <button onClick={this.addTodo}>Add Todo</button>
        {!this.state.todos.length ? (
          "no Items"
        ) : (
          <ul>
            {" "}
            {this.state.todos.map((task, index) => (
              <TodoItem
                key={index}
                task={task}
                checkboxChecked={() => this.checkboxChecked(index)}
                deleteTask={() => this.deleteTask(task.id)}
              />
            ))}
          </ul>
        )}
      </>
    );
  }
}

ReactDOM.render(
  <React.StrictMode>
    <h1>My Task</h1>
    <TodoList />
  </React.StrictMode>,
  root
);
