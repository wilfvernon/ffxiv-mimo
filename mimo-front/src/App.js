import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './containers/Login.js'
import { 
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/login">
          <Login/>
        </Route>
      </Router>
    </div>
  );
}

export default App;
