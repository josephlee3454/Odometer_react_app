
import React from 'react';
import "./App.css";

class Header extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      hello: props.hello
    }
  }

  render() {
    return (
      <>
      <div id = "block">
      <h1>{this.state.hello}</h1>
      <p>this is the react life</p>
      </div>
      </>
    )
  }
}

export default Header;