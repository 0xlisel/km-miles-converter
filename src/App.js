import React from 'react';
import './App.css';

class Converter extends React.Component{

  constructor(props){
    super(props);
    this.state = { km : 0 };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({km : e.target.value});
  }

  convert(km){
    return (km/1.609344).toFixed(2);
  }

  render(){
    return (
      <div className="converter">
        <h1>KM TO MILES CONVERTER</h1>
        <input type="text" className="box" value={this.state.km} 
          onChange={this.handleChange} /> <b>=</b> 
          <span> {this.convert(this.state.km)} miles</span>
      </div>
    );
  }
}

export default Converter;