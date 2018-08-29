import React from 'react';

export class Address extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      address: ''
    }

    this.handleAddress = this.handleAddress.bind(this);
  }

  handleAddress(e){
    this.setState({
      address: e.target.value
    });
  }

  render(){
    return (
      <div style={{textAlign: 'left'}}>
        <hr />
        <h3>Address</h3>
        <div className="form-group">
          <input type="text" className="form-control col-md-8" onChange={this.handleAddress} row="5" />
        </div>
      </div>
    );
  }
}