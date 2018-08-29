import React from 'react';

export class Name extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <div style={{textAlign: 'left'}}>
        <hr />
        <h3>Full Name</h3>

        <div className="form-group">
          <input type="text" className="form-control col-md-8" onChange={this.props.handleName} row="5" value={this.props.name} />
        </div>
      </div>
    );
  }
}