// import logo from './logo.svg';
import './App.css';
import React from 'react';
import Navbar from './components/Navbar';

export default class App extends React.Component {

  render(){
    return (
    <div className="App">
      <header className="App-header">
        <Navbar store={this.props.store} />
      </header>
    </div>
    );
  }

}
