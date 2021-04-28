import React from 'react';
import './style/App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Front from './components/Front';
import Legal from './components/Legal';

function App() {
  return (
    <dev>
      <Navbar />
      <Front />
      <Legal />
    </dev>
  );
}

export default App;
