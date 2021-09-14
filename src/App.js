import React from 'react'
import logo from './logo.svg';
import './App.css';
import Counter from "./components/counter";

function App() {
  return (
    <div className="m-3">
       <Counter title="Profile " value={1} image="images/profile.jpg" />
       <Counter title="Dolphin " value={1} image="images/profile.jpg" />
    </div>
    );
}

export default App;
