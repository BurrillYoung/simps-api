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
    apiData.data.forEach((element,index) => {
      element.id = index;
    });
    this.setState({ apiData: apiData.data });
  }

  deleteCharacter = (quote) =>{
    const copy = [...this.state.apiData];

    const index = copy.findIndex(item => {
    
      return item.quote === quote;
    });
    console.log(index);
    copy.splice(index, 1);

    this.setState({apiData: copy});
  }

  render() {
    console.log(this.state.apiData);


    if (this.state.apiData) {
      return (
        
        <div className="container mt-5">
          <div className="row">
            {
                this.state.apiData.map((person) => {
                  return <Character key={person.id} deleteCharacter={this.deleteCharacter} person={person} />
                }
              )
          }
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