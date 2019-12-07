import React from "react";

const Done = props => {
  const doneTasks = props.tasks.map(task => {
    if (task.delete === false && task.done === true) {
      return (
        <div key={task.id}>
          <p>
            {task.text}
            {task.doneDate}
          </p>
          <button onClick={() => props.handleDelete(task.id)}>x</button>
        </div>
      );
    }
  });
  return (
    <React.Fragment>
      <h2>Done:</h2>
      {doneTasks}
    </React.Fragment>
  );
};

export default Done;
