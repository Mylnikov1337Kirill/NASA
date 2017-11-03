import React, { Component } from 'react';
import {Header} from './components/header/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
      </div>
    );
  }

  handleEditorChange = (e) => console.log(e.target.getContent());
}

export default App;
