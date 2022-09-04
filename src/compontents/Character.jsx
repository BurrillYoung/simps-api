import React, { Component } from "react";
import Image from "./CharacterCard/Image";
import Name from "./CharacterCard/Name";
import Quote from "./CharacterCard/Quote";
import Like from "./CharacterCard/Like";
class Character extends Component {
  render() { 
    const {image, characterDirection, character, quote, id,liked } = this.props.person;
    return (
     <div className={"col-md-3 mb-5 "} >
      <div className={"card h-100 " + (liked && "liked")}>
        <div className={"card-body"}>
          <Image  srcURL={image}/>
          <Name direction={characterDirection.toLowerCase()} name={character }/>
          <Quote direction={characterDirection.toLowerCase()} quote={quote }/>
          <Like liked={liked} onLike={this.props.onLike} characterId={id}/>
          <button className={"mt-4"} onClick={() => this.props.onDelete(id)}>Delete</button>
        </div>
      </div>
     </div>
    );
  }
}
 
export default Character;