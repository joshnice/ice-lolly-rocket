import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const rating: number = Math.floor(Math.random() * 11);


  return (
    <>
      <div>Hello Ice Lolly Rocket Fans! The time is 16:36</div>
      <div>We like ice lolly rockets this much {rating} out of 10!</div>
      <div>An opinion on the james bond film: The Sea Viper (Astra 30) an anti air missile, flies at 4.5 MAC, and has a range of 70 miles. So flight time of 1.30 minutes. Not nine, deary deary me</div>
    </>
  );
}

export default App;
