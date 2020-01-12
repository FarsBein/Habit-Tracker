import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Route} from 'react-router-dom'
import AllNotes from './components/allNotes'
import OneNote from './components/oneNote'
import EditNote from './components/editNote'
import CreateNote from './components/createNote'
// import CreateUser from './components/createUser'
import Navbar from './components/Navbar'

function App() {
  return (
        <Router>
          <Navbar />
          <br/>
          <div className="container">
            <Route  path="/" exact component={AllNotes} /> 
            <Route  path="/create" component={CreateNote} />
            {/* <Route  path="/user" component={CreateUser} /> */}
            <Route  path="/edit/:id" component={EditNote} />          
            <Route  path="/oneNote/:id" component={OneNote} /> 
          </div>
        </Router>
  );
}

export default App;
