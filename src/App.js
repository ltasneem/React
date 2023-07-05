import React, { Component } from 'react';
import './App.css';
import UIRoot from './components/UIRoot';
import { BrowserRouter } from "react-router-dom";

class App extends Component {
  
  render() {
    return (
      <BrowserRouter>
        <UIRoot />
      </BrowserRouter>
    );
  }
}

export default App;
