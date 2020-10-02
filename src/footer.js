import React from 'react';

class Footer extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <>
      <div id = "footerblock">
      <h3> {this.props.trademark} INC. </h3>
      <p>This is my Footer</p>
      </div>
      </>
    )
  }
}

export default Footer;