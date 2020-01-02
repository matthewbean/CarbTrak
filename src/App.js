import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';


import FoodState from './context/food/FoodState'


function App() {
  return (
    <FoodState>
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About} />
      </Switch>
      </Router>
    </div>
    </FoodState>
  );
}

export default App;
