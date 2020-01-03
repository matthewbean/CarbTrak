import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Alerts from './components/layout/Alerts'

import AlertState from './context/alert/AlertState'
import FoodState from './context/food/FoodState'


function App() {
  return (
    <FoodState>
      <AlertState>
    <div className="App">
      <Router>
      <Navbar />     
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About} />
      </Switch>
      </Router>
    </div>
    </AlertState>
    </FoodState>
    
  );
}

export default App;
