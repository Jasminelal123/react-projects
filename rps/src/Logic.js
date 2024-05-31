import React from 'react';

const Logic = ({ userChoice }) => {
  const choices = ['rock', 'paper', 'scissors'];
  const [computerChoice, setComputerChoice] = useState('');
  const [result, setResult] = useState('');

  useEffect(() => {
    if (userChoice) {
      const index = Math.floor(Math.random() * choices.length);
      const computer = choices[index];
      setComputerChoice(computer);

      if (userChoice === computer) {
        setResult('It\'s a tie!');
      } else if (
        (userChoice === 'rock' && computer === 'scissors') ||
        (userChoice === 'paper' && computer === 'rock') ||
        (userChoice === 'scissors' && computer === 'paper')
      ) {
        setResult('You win!');
      } else {
        setResult('You lose!');
      }
    }
  }, [userChoice]);

  return (
    <div>
      {userChoice && (
        <>
          <p>{`Your choice: ${userChoice}`}</p>
          <p>{`Computer's choice: ${computerChoice}`}</p>
          <p>{`Result: ${result}`}</p>
        </>
      )}
    </div>
  );
};

export default Logic;
