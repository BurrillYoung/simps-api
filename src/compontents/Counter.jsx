import React, { Component } from "react";

class Counter extends Component{
  state = {count:100};

  onAdd = () => {
    this.setState({ count: this.state.count + 1},() => {
        console.log(this.state)
    });
  }
  onRemove = () => {
    this.setState({ count: this.state.count - 1});
  }

  render(){
    return(
            <div className="row">
              <div className="col-4 d-flex justify-content-center"><button className="w-100" onClick = {this.onAdd}>Add</button></div>
              <div className="col-4"><h1 className="text-center">{this.state.count}</h1></div>
              <div className="col-4 d-flex justify-content-center"><button className="w-100" onClick = {this.onRemove}>Remove</button></div>
           
        </div>
      )
        
  }
}

export default Counter;