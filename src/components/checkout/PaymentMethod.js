import React from 'react';

export class PaymentMethod extends React.Component {
  render(){
    return (
      <div style={{textAlign: 'left'}}>
        <hr />
        <h3>Payment Method</h3>

        <select className="form-control" onChange={this.props.handlePayment} value={this.props.value} >
          <option value="BCA">BCA</option>
          <option value="BRI">BRI</option>
          <option value="Mandiri">Mandiri</option>
        </select>
      </div>
    );
  }
}