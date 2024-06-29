import React, { Component } from 'react';
import Counter from './components/states/setState.jsx';
import Bulbs from './components/hooks/useState.jsx';
import FavoriteMovies from './components/hooks/useReducer.jsx';
import './App.css';
import './sass/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Bulbs />
        <FavoriteMovies />
      </div>
    );
  }
}

export default App;
