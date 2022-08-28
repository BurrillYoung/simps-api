import React, { Component } from "react";
//import Simpsons from "./simpsons.json"; //for backup purposes
import axios from "axios";
import Character from "./compontents/Character";
import Counter from "./compontents/Counter";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  state = {};

  async componentDidMount() {
    const apiData = await axios.get(
      "https://thesimpsonsquoteapi.glitch.me/quotes?count=48"
    );

    this.setState({ apiData: apiData.data });
  }

  render() {
    console.log(this.state.apiData);
    if (this.state.apiData) {
      return (
        
        <div className="container">
          <div className="row">
            {
              
                this.state.apiData.map((person) => {
                  return <Character person={person} />
                }
              )
          }
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div class="card-body">
                 <Counter/>
                </div>
              </div> 
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="card mx-auto d-flex justify-content-center mt-5 w-50">
        <div className="card-body d-flex">
           <h1 class="pe-4">Loading.....</h1><span className="loadingCircle"></span>
        </div>
      </div>
    )
  }
}

export default App;