import React, { Component } from "react";

class Quote extends Component {

  render() { 
    return (
      <div className={this.props.direction}>
        <p className="card-text">"{this.props.quote}"</p>
      </div>
    );
  }
}
 
export default Quote;