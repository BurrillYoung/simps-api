import React, { Component } from 'react';
import Character from './Character';


class Interface extends Component {
   constructor(){
    super();
    this.searchTerm = React.createRef();
  }
  state = { searchTerm:"" } 
   componentDidMount() {
    this.searchTerm.current.focus();
   }
  
   


  render() { 
    const {searchTerm} = this.state;
    const { people, onDelete, onLike,total,liked } = this.props;
    const filter = [];
    // I changed the filter slightly from the class example as if the term didn't match it showed all the characters again.
    [...people].filter((person) => {
      if (person.character.toLowerCase().includes(searchTerm.toLowerCase())){
        filter.push(person);
      }
      return null;
    });
    
    

    return (
      <div className="container mt-5">
      <div className="row">
        <div className="col-12">
          <div className="card mb-4">
            <div className="card-body">
              <input className="w-100" onInput={(e) => {this.setState({searchTerm: e.target.value})}} ref={this.searchTerm}/>
            </div>
          </div>
        </div>
        <div className="col-12 mb-4">
          <div className="card">
            <div className="card-body">
                Total Likes: {total}
            </div>
          </div>
        </div>
      </div>
      
      <div className="row">
      {
        filter.map((person) => {
          return <Character key={person.id} liked={liked} onLike={onLike} onDelete={onDelete} person={person} /> 
        })
      }
      </div>
    </div>
    );
  }
}
 
export default Interface;