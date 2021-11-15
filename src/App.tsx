import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const rating: number = Math.floor(Math.random() * 11);


  return (
    <>
      <div>Hello Ice Lolly Rocket Fans! The time is 16:36</div>
      <div>We like ice lolly rockets this much {rating} out of 10!</div>
    </>
  );
}

export default App;
