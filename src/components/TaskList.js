import React from "react";
import Task from "./Task";
const TaskList = props => {
  const active = props.tasks.filter(task => task.active);
  const done = props.tasks.filter(task => !task.active);

  active.sort((a, b) => {
    a = a.text.toLowerCase();
    b = b.text.toLowerCase();

    if (a.text < b.text) return -1;
    if (a.text > b.text) return 1;
    return 0;
  });

  done.sort((a, b) => b.doneDate - a.doneDate);

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      handleDelete={props.handleDelete}
      handleDone={props.handleDone}
    />
  ));
  let doneTasks = done.map(task => (
    <Task key={task.id} task={task} handleDelete={props.handleDelete} />
  ));

  doneTasks = doneTasks.slice(0, 5);

  return (
    <div>
      <div>
        <h2>Task to do: ({activeTasks.length})</h2>
        {activeTasks}
      </div>
      <div>
        <h2>Done: ({done.length})</h2>
        {doneTasks}
      </div>
    </div>
  );
};

export default TaskList;
