import logo from './logo.svg';
import './App.css';
import Sample from "./components/sample.js";
import ClassComponent from "./components/classComponent.js";
import React from 'react';
import AddSubtract from './components/addsubtract/addsubtract.js';

function App() {
  return (
    <div className="App">
      <h1>I love React</h1>
       <Sample/>
       <ClassComponent/>
       <AddSubtract />
    </div>
  );
}

export default App;

