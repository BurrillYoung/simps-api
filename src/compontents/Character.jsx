import React, { Component } from "react";
import Image from "./Image";
import Name from "./Name";
import Quote from "./Quote";

class Character extends Component {
  state = {liked:false}
  likeDay = () => {
    this.setState({liked : !this.state.liked});
    console.log(this.state);
  }
 

  render() { 
    const {liked} = this.state;
    return (
     <div className={"col-md-3 mb-5 "} >
      <div className={"card h-100 " + (liked && "liked")}>
        <div className={"card-body"}>
          <Image  srcURL={this.props.person.image }/>
          <Name direction={this.props.person.characterDirection.toLowerCase()} name={this.props.person.character }/>
          <Quote direction={this.props.person.characterDirection.toLowerCase()} quote={this.props.person.quote }/>
          <button className={"mt-4 me-2"} onClick={this.likeDay}>{liked ? "Unlike" : "Like"} </button>
          <button className={"mt-4"} onClick={() => this.props.deleteCharacter(this.props.person.quote)}>Delete</button>
        </div>
      </div>
     </div>
    );
  }
}
 
export default Character;