import React from "react";
import "./App.css";

class Odometer extends React.Component {
  constructor(props) {
    super(props);

    this.state = { miles: 0 };
    this.user = { name: "" };
  }

  add_inc = () => {
    this.setState({ miles: this.state.miles + 1 });
  };
  sub_inc = () => {
    this.setState({ miles: this.state.miles - 1 });
  };

  kilo_convert = () => {
    this.setState({ miles: this.state.miles * 1.609344 });
  };
  add_ten = () => {
    this.setState({ miles: this.state.miles + 10 });
  };
  minus_ten = () => {
    this.setState({ miles: this.state.miles - 10 });
  };
  add_100 = () => {
    this.setState({ miles: this.state.miles + 100 });
  };
  minus_100 = () => {
    this.setState({ miles: this.state.miles - 100 });
  };
  add_1000 = () => {
    this.setState({ miles: this.state.miles + 1000 });
  };
  minus_1000 = () => {
    this.setState({ miles: this.state.miles - 1000 });
  };
  zero = () => {
    this.setState({ miles: (this.state.miles = 0) });
  };

  render() {
    return (
    <section>
    <div className="App">
      <h1>Odometer</h1>
      <h2>use + to in incriment miles - to sub tract files</h2>
      <h2> Lets add some miles today </h2>
      <div> {this.state.miles.toString().padStart(4, "0")} </div>
      <button id="btn" onClick={this.add_inc}>
        ADD +{" "}
      </button>
      <button id="btn" onClick={this.sub_inc}>
        Minus -{" "}
      </button>
      <button id="btn" onClick={this.add_ten}>
        ADD + 10{" "}
      </button>
      <button id="btn" onClick={this.add_100}>
        {" "}
        ADD + 100{" "}
      </button>
      <button id="btn" onClick={this.add_1000}>
        ADD + 1000{" "}
      </button>
      <button id="btn" onClick={this.minus_1000}>
        Minus - 10000{" "}
      </button>
      <button id="btn" onClick={this.minus_ten}>
        Minus - 10{" "}
      </button>
      <button id="btn" onClick={this.kilo_convert}>
        kilo convert{" "}
      </button>
      <button id="btn" onClick={this.zero}>
        {" "}
        zero{" "}
      </button>
    </div>
    </section>
    );
  }
}

export default Odometer;
