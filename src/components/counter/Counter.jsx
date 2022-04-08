import { Component } from "react";
import CounterButton from "../counter-button/CounterButton";
import './Counter.css';

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
    };
    // this.increment = this.increment.bind(this);
    this.reset = this.reset.bind(this);
  }
  render() {
    return (
      <div className="counter">
        {/* <button onClick={this.increment}>+{this.props.add}</button> */}
        <CounterButton by={1}/>
        <CounterButton by={5}/>
        <CounterButton by={10}/>
        <span className="count">{this.state.counter}</span>
        <div>
            <button className="reset" onClick={this.reset}>Reset</button>
        </div>
      </div>
    );
  }

  increment() {
    console.log("Increment");
    this.setState({ counter: this.state.counter + this.props.add });
  }

  decrement(){

  }

  reset(){
      this.setState({counter: 0});
  }
}

export default Counter;
