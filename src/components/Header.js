import React from "react";
const Header = props => {
  return (
    <form onSubmit={e => props.onSubmit(e)}>
      <label htmlFor="add">
        {" "}
        Task
        <input
          type="text"
          onChange={e => props.handleInput(e)}
          value={props.value}
        />
      </label>
      <button
      // type="button" onClick={props.addTask}
      >
        Add task
      </button>

      <label htmlFor="piority">
        <input
          type="checkbox"
          checked={props.piority}
          onChange={e => props.handlePiority(e)}
        />
        piority
      </label>
    </form>
  );
};
export default Header;
