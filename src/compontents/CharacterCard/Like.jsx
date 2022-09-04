import React, { Component } from "react";

class Like extends Component {
 

  render() { 
    const {characterId, onLike, liked} = this.props
    return (
      <div>
        <button className={"mt-4 me-2"} onClick={() => onLike(characterId)}>{ liked ? "Unliked" : "Like"}</button>
      </div>
    );
  }
}
 
export default Like;