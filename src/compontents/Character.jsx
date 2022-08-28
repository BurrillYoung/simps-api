import React, { Component } from "react";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

class Character extends Component {
 
  render() { 
    return (
     <div className="col-md-3 mb-5">
      <div className="card h-100">
        <div className="card-body">
          <Image  srcURL={this.props.person.image }/>
          <Name direction={this.props.person.characterDirection.toLowerCase()} name={this.props.person.character }/>
          <Quote direction={this.props.person.characterDirection.toLowerCase()} quote={this.props.person.quote }/>
        </div>
      </div>
     </div>
    );
  }
}
 
export default Character;