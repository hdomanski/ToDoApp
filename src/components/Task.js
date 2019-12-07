import React from "react";
const Task = props => {
  const { text, date, active, doneDate, id, piority } = props.task;
  const finish = new Date(doneDate).toLocaleString();
  return (
    <React.Fragment>
      <p>
        {piority === true ? (
          <strong style={{ color: "red" }}>{text}</strong>
        ) : (
          <strong>{text}</strong>
        )}

        {active ? <span> deadline: {date}</span> : null}
        {active === false ? <span> done: {finish}</span> : null}
        {active ? (
          <button onClick={() => props.handleDone(id)}>Zrobione</button>
        ) : null}
        <button onClick={() => props.handleDelete(id)}>X</button>
      </p>
    </React.Fragment>
  );
};

export default Task;
