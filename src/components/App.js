import React, { Component } from "react";
import TaskList from "./TaskList";

import FormAddTask from "./FormAddTask";

class App extends Component {
  state = {
    tasks: [
      {
        id: 0,
        text: "Task1",
        piority: true,
        active: true,
        date: "2020.10.10",
        doneDate: null
      },
      {
        id: 1,
        text: "Task2",
        piority: false,
        active: true,
        date: "2021.10.12",
        doneDate: null
      },
      {
        id: 2,
        text: "Task3",
        piority: false,
        active: false,
        date: "2021.10.12",
        doneDate: null
      }
    ]
  };

  handleDelete = id => {
    let tasks = [...this.state.tasks];
    tasks = tasks.filter(task => task.id !== id);

    this.setState({
      tasks
    });
  };

  handleDone = id => {
    let doneDate = new Date();
    doneDate = doneDate.getTime();

    let tasks = [...this.state.tasks];
    tasks = tasks.map(task => {
      if (task.id === id) {
        task.active = false;
        task.doneDate = doneDate;
        console.log("zrobione");
        return task;
      }
      this.setState({
        tasks
      });
      return null;
    });
  };

  handleClick = (text, checked, date) => {
    const task = {
      id: this.state.tasks.length,
      text: text,
      piority: checked,
      active: true,
      date: date,
      doneDate: null
    };

    this.setState(prevState => ({
      tasks: [...prevState.tasks, task] /// obaczaj to
    }));
  };

  render() {
    return (
      <React.Fragment>
        <FormAddTask handleClick={this.handleClick} />
        <TaskList
          tasks={this.state.tasks}
          handleDelete={this.handleDelete}
          handleDone={this.handleDone}
        />
      </React.Fragment>
    );
  }
}

export default App;
