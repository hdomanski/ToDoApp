import React, { Component } from "react";
class FormAddTask extends Component {
  minDate = new Date().toISOString().slice(0, 10);
  state = {
    text: "",
    checked: false,
    date: null
  };

  handleDate = e => {
    this.setState({
      date: e.target.value
    });
  };

  handleText = e => {
    this.setState({
      text: e.target.value
    });
  };

  handleChecked = e => {
    this.setState({
      checked: e.target.checked
    });
  };

  handleSubmit = props => {
    const { text, checked, date } = this.state;

    this.props.handleClick(text, checked, date);

    this.setState({
      text: "",
      checked: false,
      date: null
    });
  };

  render() {
    let maxDate = this.minDate.slice(0, 4) * 1 + 1;
    maxDate = maxDate + "-12-31";
    return (
      <div className="form">
        <input
          onChange={this.handleText}
          type="text"
          placeholder="dodaj zadanie"
          value={this.state.text}
        />
        <input
          type="checkbox"
          checked={this.state.checked}
          id="piority"
          onChange={this.handleChecked}
        />
        <label htmlFor="piority"> Piority</label>
        <p></p>
        <label htmlFor="date">Deadline: </label>
        <input
          onChange={this.handleDate}
          type="date"
          value={this.state.date}
          min={this.minDate}
          max={maxDate}
        />
        <p></p>
        <button onClick={this.handleSubmit}>Add</button>
      </div>
    );
  }
}

export default FormAddTask;
