import './App.css';

// import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Home from './components/Home.js' 
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

function App() {
 

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>} />
        </Routes>
      </Router>
    
    </div>
  );
}

export default App;
