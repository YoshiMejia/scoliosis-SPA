import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { About } from './components/About';
import { Bibliography } from './components/Bibliography';
import TypesContainer from './containers/TypesContainer';
import Navbar from './components/Navbar';
import { Lumbar } from './components/types_components/Lumbar';
import { Combined } from './components/types_components/Combined';
import { Healthy } from './components/types_components/Healthy';
import { Thoracic } from './components/types_components/Thoracic';
import { ThoracoLumbar } from './components/types_components/ThoracoLumbar.js';
import WorkoutsContainer from './containers/WorkoutsContainer';
import PlannersContainer from './containers/PlannersContainer';

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
              <Route path="/workouts" element={<WorkoutsContainer />} />
              <Route path="/planners" element={<PlannersContainer />} />
              <Route path="/types" element={<TypesContainer />}/>
              <Route path="/types/lumbar" element={<Lumbar />} />
              <Route path="/types/combined" element={<Combined />} />
              <Route path="/types/healthy" element={<Healthy />} />
              <Route path="/types/thoracic" element={<Thoracic />} />
              <Route path="/types/thoraco_lumbar" element={<ThoracoLumbar />} />
            </Routes>
          </div>
        </div>
      </Router>
    );
  }

}
