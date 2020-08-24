import React from 'react';
import { Route, Switch, Link } from 'react-router-dom'
import './App.css';
import HomePage from './pages/homepage/homepage.component'

const HatsPage = (props) => {
  return (
    <div>Hats Page</div>
  )
}

function App() {
  return (
    <div>
      {/* <Switch> */}
        <Route exact path='/' component={HomePage}>
        
        </Route>
        <Route path='/hats' component={HatsPage}>

        </Route>
      {/* </Switch> */}
      {/* <HomePage /> */}
    </div>
  );
}

export default App;
