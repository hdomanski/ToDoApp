import React, { Component } from "react";
import "./App.css";
import Header from "./Header";
import ToDo from "./ToDo";
import Done from "./Done";

class App extends Component {
  state = {
    newTask: "",
    piority: false,
    tasks: []
  };

  onSubmit = e => {
    e.preventDefault();
    const { tasks, newTask, piority } = this.state;

    tasks.push({
      id: tasks.length + 1,
      text: newTask,
      done: false,
      delete: false,
      piority: piority,
      doneDate: ""
    });

    this.setState({
      tasks: tasks,
      piority: false,
      newTask: ""
    });
  };

  handlePiority = e => {
    const checked = e.target.checked;

    this.setState({
      piority: checked
    });
  };

  handleInput = e => {
    this.setState({
      newTask: e.target.value
    });
  };

  handleDelete = id => {
    const tasks = this.state.tasks.map(task => {
      if (id === task.id) {
        task.delete = !task.delete;
      }
      // console.log(task);
      return task;
    });

    this.setState({
      tasks: tasks
    });
  };

  handleDone = id => {
    const date =
      new Date().getFullYear() +
      "-" +
      (new Date().getMonth() + 1) +
      "-" +
      new Date().getDate();

    new Date().getDate();
    const tasks = this.state.tasks.map(task => {
      if (id === task.id) {
        task.done = !task.done;
        task.doneDate = date;
      }
      // console.log(task);
      return task;
    });

    this.setState({
      tasks: tasks
      // doneDate: date
    });
  };

  render() {
    return (
      <React.Fragment>
        <Header
          handleInput={this.handleInput}
          value={this.state.newTask}
          piority={this.state.piority}
          addTask={this.handleAddTask}
          onSubmit={this.onSubmit}
          handlePiority={this.handlePiority}
        />
        <ToDo
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
        />
        <Done
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          currentlyDate={this.currentlyDate}
        />
      </React.Fragment>
    );
  }
}

export default App;
