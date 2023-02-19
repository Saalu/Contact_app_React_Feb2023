import './App.css';

// import { useEffect, useState } from 'react';
// import { v4 as uuidv4 } from 'uuid';
import Home from './components/Home.js' 
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Add from './components/Add';
import Update from './components/Update';

function App() {
 

  return (
    <div >
      <Router>
        <Routes>
          <Route path='/' element={ <Home/>} />
          <Route path='/create' element={ <Add/>} />
          <Route path='/edit' element={ <Update/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
