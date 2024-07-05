import React, { Component } from 'react';
import Counter from './components/states/setState.jsx';
import Bulbs from './components/hooks/useState.jsx';
import FavoriteMovies from './components/hooks/useReducer.jsx';
import ParentComponent from './components/props/childrenClassProps.jsx';
import Loop from './components/loop/loop.jsx';
import Greet from './components/destructor/destructorFunctional.jsx';
import GreetClass from './components/destructor/destructorFunctional.jsx';
import IfElse from './components/conditionalRendering/ifElse.jsx';
import ElementVariables from './components/conditionalRendering/elementVariables.jsx';
import Ternary from './components/conditionalRendering/ternary.jsx';
import ShortCircuit from './components/conditionalRendering/shortCircuit.jsx';
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
        <Loop />
        <Greet name='Dominykas' heroName='SuperCoder' />
        <GreetClass name='Dominykas' heroName='SuperCoder' />
        <IfElse />
        <ElementVariables />
        <Ternary />
        <ShortCircuit />
        
      </div>
    );
  }
}

export default App;
