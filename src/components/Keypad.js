import React, { Component } from "react";
import "./Keypad.css";
import { Button } from "./Button";
import { Input } from "./Input";

class Keypad extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: [],
      array: [],
      count: 0,
      random: null,
      setTicket: false,
      generaterandom: false,
    };
  }

  addToInput = (val) => {
    this.state.input.push(val);
    this.setState({ input: this.state.input });
  };

  addTicket = () => {
    this.setState({
      input: this.state.input,
      setTicket: true,
      count: this.state.count + 1,
    });
  };
  generateRandom = () => {
    this.setState({
      random: Math.floor(Math.random() * 899999 + 100000),
      generaterandom: true,
    });
  };
  render() {
    return (
      <div className="app row">
        <div className="calc-wrapper">
          <Input input={this.state.input} />
          <div className="row">
            <Button handleClick={this.addToInput}>7</Button>
            <Button handleClick={this.addToInput}>8</Button>
            <Button handleClick={this.addToInput}>9</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>4</Button>
            <Button handleClick={this.addToInput}>5</Button>
            <Button handleClick={this.addToInput}>6</Button>
          </div>
          <div className="row">
            <Button handleClick={this.addToInput}>1</Button>
            <Button handleClick={this.addToInput}>2</Button>
            <Button handleClick={this.addToInput}>3</Button>
          </div>
          <div className="row">
            <Button>.</Button>
            <Button handleClick={this.addToInput}>0</Button>
            <div
              onClick={() => this.setState({ input: "" })}
              className="button-wrapper"
            >
              del
            </div>
          </div>
          <div className="row">
            <div className="add-ticket" onClick={this.addTicket}>
              Add Ticket
            </div>
          </div>
          <div className="row" style={{ color: "#fff", marginTop: "2%" }}>
            Your selected Tickets
          </div>

          {this.state.setTicket === true ? (
            <div className="ticket-wrapper">
              <div className="ticket-number border border-primary rounded">
                TICKET #{this.state.count}
              </div>
              <div className="ticket-number">{this.state.input}</div>
            </div>
          ) : null}
        </div>

        <div>
          <div className="random-title">Click to generate random tickets</div>
          <button
            className="btn btn-outline-light click"
            onClick={this.generateRandom}
          >
            Click me
          </button>
          {this.state.generaterandom === true ? (
            <>
              <div className="is">Your random ticket number is:</div>
              <div className="random">{this.state.random}</div>
            </>
          ) : null}
        </div>
      </div>
    );
  }
}

export default Keypad;
