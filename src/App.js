import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Router from '../src/Router';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar></Navbar>
          <Router />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
