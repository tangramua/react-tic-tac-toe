import React from 'react';
import Home from './containers/HomeContainer';
import { BrowserRouter as Router, Route }   from 'react-router-dom'
import Credit from './containers/CreditContainer'
import Game from './containers/GameContainer'

import './App.css';

function App() {
  return (
      <div className="App">
          <Router>
              <Route path='/' exact render={() => <Home />} />
              <Route path='/credit' render={() => <Credit />} />
              <Route path='/start' render={() => <Game />} />
          </Router>
      </div>
  );
}

export default App;
