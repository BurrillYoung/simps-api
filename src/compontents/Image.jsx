import React, { Component } from "react";

class Image extends Component {

  render() { 
    return (
      <img className={this.props.direction} src={this.props.srcURL} />
    );
  }
}
 
export default Image;