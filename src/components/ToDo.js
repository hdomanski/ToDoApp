import React from "react";
const ToDo = props => {
  const toDoTasks = props.tasks.map(task => {
    if (task.delete === false && task.done === false) {
      return (
        <div key={task.id}>
          {/* <p>{task.text}</p> */}
          {task.piority === false ? (
            <p>{task.text}</p>
          ) : (
            <p style={{ color: "red" }}> {task.text}</p>
          )}
          <button onClick={() => props.handleDelete(task.id)}>x</button>
          <button onClick={() => props.handleDone(task.id)}>Done</button>
        </div>
      );
    }
  });
  return (
    <React.Fragment>
      <h2>To do:</h2>
      {toDoTasks}
    </React.Fragment>
  );
};

export default ToDo;
