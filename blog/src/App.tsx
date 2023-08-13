import React from 'react';
import './styles/App.css';
import Nav from './components/Nav';
import Card from './components/Card';

function App() {
  return (
    <div className="flex flex-col justify-center text-center">
      <Nav/>
      <Card/>
    </div>
  );
}

export default App;
