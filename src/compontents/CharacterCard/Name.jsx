import React, { Component } from 'react';

class Name
 extends Component {
 
    render() { 
        return (
            <div className={this.props.direction}>
                <h5 className="card-title pt-4">{this.props.name} </h5>
            </div>
        );
    }
}
 
export default Name
;