import React, { Component } from 'react';
import Counter from './components/states/setState.jsx';
import Bulbs from './components/hooks/useState.jsx';
import FavoriteMovies from './components/hooks/useReducer.jsx';
import ParentComponent from './components/props/childrenClassProps.jsx';
import './App.css';
import './sass/style.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Counter />
        <Bulbs />
        <FavoriteMovies />
        <ParentComponent name='Dominykas'>
        <div>Hello</div>
          <div>Hello</div>
          <button onClick={() => alert('Hello')}>Click me!</button>
        </ParentComponent>
      </div>
    );
  }
}

export default App;
