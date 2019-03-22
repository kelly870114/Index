import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class APP extends Component {
  render() {
    return (
      <div>
        <h1>Hello {this.props.name}!</h1>
      </div>
    );
  } 
}

export default APP;