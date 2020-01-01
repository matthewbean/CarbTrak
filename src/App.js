import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from './layout/Navbar';
import Home from './pages/Home';
import About from './pages/About';


function App() {
  return (
    <div className="App">
      <Router>
      <Navbar />
      <Switch>
        <Route exact path = '/' component = {Home} />
        <Route exact path = '/about' component = {About} />
      </Switch>
      </Router>
    </div>
  );
}

export default App;
