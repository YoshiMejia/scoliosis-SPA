import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Bibliography } from './components/Bibliography';
import TypesContainer from './containers/TypesContainer';
import Navbar from './components/Navbar';

export default class App extends React.Component {

  render(){
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div id='page-body'>
            <Routes>
              <Route path="/" element={<About />} exact />
              <Route path="/bibliography" element={<Bibliography />} />
              <Route path="/types" element={<TypesContainer />}/>
              <Route path="/types/:typeName" element={<TypesContainer />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

}
