import React, { Component } from "react";

class Image extends Component {

  render() { 
    return (
      <img alt={this.props.direction} className={this.props.direction} src={this.props.srcURL} />
    );
  }
}
 
export default Image;