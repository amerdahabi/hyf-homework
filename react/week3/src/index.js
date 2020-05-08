import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const root = document.getElementById("root");

const TodoItem = props => (
  <li
    style={{ textDecoration: props.task.completed ? "line-through" : "none" }}
  >
    {props.task.description}. Deadline: {props.task.deadline}
    {/* <input
      type="checkbox"
      checked={props.task.completed}
      onChange={props.checkboxChecked}
    /> */}
    <button onClick={props.deleteTask}>Delete task</button>
  </li>
);
function fetchTask() {
  const URL = `https://gist.githubusercontent.com/benna100/391eee7a119b50bd2c5960ab51622532/raw`;

  return fetch(URL).then(res => res.json());
}

class TodoList extends React.Component {
  state = {
    todos: [],
    newTodo: {
      id: 4,
      description: "Eat dinner",
      deadline: "",
      completed: false
    },
    initialValue: 0
  };

  componentDidMount() {
    fetchTask().then(res => {
      this.setState({todos: res})
    });
  }

  addTodo = () => {
    this.setState({ todos: [...this.state.todos, this.state.newTodo] });
  };

  // checkboxChecked = currentIndex => {
  //   this.setState({
  //     todos: this.state.todos.map((task, index) => {
  //       if (currentIndex === index) {
  //         return {
  //           ...task,
  //           completed: !task.completed
  //         };
  //       } else {
  //         return task;
  //       }
  //     })
  //   });
  // };

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
                // checkboxChecked={() => this.checkboxChecked(index)}
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
