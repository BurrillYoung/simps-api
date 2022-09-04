import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import Interface from "./compontents/Interface";
import "./App.css";

class App extends Component {
  state = {
  };
  async componentDidMount() {
       try {
        const apiData = await axios.get(
          "https://thesimpsonsquoteapi.glitch.me/quotes?count=48"
        );
        apiData.data.forEach((element,index) => {
          element.id = index;
        });

        apiData.data.sort((char1,char2) => {
          if(char1.Character > char2.character){return 1}
          if(char1.character < char2.character){return -1}
          return 0;

        })
         
        this.setState({ apiData: apiData.data });
       
      }catch (error) {
        console.log(error);
      }

     
  }
  onLike = (id) => {
   
    const apiData = [...this.state.apiData];
    const index = this.state.apiData.findIndex(item => {
      return item.id === id;
    });
    apiData[index].liked = apiData[index].liked ? false : true;
    this.setState({apiData});
  }

  onDelete = (id) => {
    const apiData = [...this.state.apiData];
    const index = this.state.apiData.findIndex(item => {
      return item.id === id;
    });
    apiData.splice(index, 1);
    this.setState({apiData});
  }

  render() {
    const {apiData,liked} = this.state;

    if (apiData === undefined) {
      return (
        <div className="card mx-auto d-flex justify-content-center mt-5 w-50">
          <div className="card-body d-flex">
             <h1 className="pe-4">Loading.....</h1><span className="loadingCircle"></span>
          </div>
        </div>
      )
    }
    let total = 0;
      apiData.forEach(item =>{
        return  item.liked && (total += 1);
      })
    return (
      <Interface total={total} liked={liked} onLike={this.onLike} onDelete={this.onDelete} people={apiData}/>
    )
  }
}

export default App;