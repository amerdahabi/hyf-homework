import React from "react";
import ReactDOM from "react-dom";

const root = document.getElementById("root");

function Header() {
  return <h1>This is my app</h1>;
};

class TodoListItem extends React.Component {
  render() {
    return (
      <li>
        The task {this.props.description}, Will be on {this.props.deadLine}
      </li>
    );
  }
};

class TodoList extends React.Component {
  render() {
    const multipleTask = this.props.multipleTask;
    const result = multipleTask.map(task => {
      return (
        <TodoListItem description={task.description} deadLine={task.deadLine} />
      );
    });
    return <ul>{result}</ul>;
  }
};

function Footer() {
  return <h3>This is the footer</h3>;
};

const todoListArray = [
  { description: "Get out of bed", deadLine: "Wed Sep 13 2017" },
  { description: "Brush teeth", deadLine: "Thu Sep 14 2017" },
  { description: "Eat breakfast", deadLine: "Fri Sep 15 2017" }
];

function App() {
  return (
    <div>
      <Header />
      <TodoList multipleTask={todoListArray} />
      <Footer />
    </div>
  );
}

ReactDOM.render(<App />, root);
