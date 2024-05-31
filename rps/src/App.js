import React, { useState } from 'react';
import Paper from './images/paper-emoji.png';
import Scissor from './images/scissor-emoji.png';
import Rock from './images/rock-emoji.png';
import Logic from './Logic';

const App = () => {
  const [userChoice, setUserChoice] = useState('');

  const handleChoice = (choice) => {
    setUserChoice(choice);
  };

  return (
    <div>
      <center><h1>ROCK PAPER SCISSOR</h1></center>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <button onClick={() => handleChoice('paper')}>
          <img src={Paper} alt='Paper' />
        </button>
        <button onClick={() => handleChoice('rock')}>
          <img src={Rock} alt='Rock' />
        </button>
        <button onClick={() => handleChoice('scissors')}>
          <img src={Scissor} alt='Scissors' />
        </button>
      </div>
      <Logic userChoice={userChoice} />
    </div>
  );
};

export default App;

