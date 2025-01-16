import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

import CEOLogo from './assets/COE_logo.png';

const targetDate = new Date("2025-05-08T00:00:00");

function App() {
  const [timeUntil, setTimeUntil] = useState('');

  useEffect(() => {
    const updateCounter = () => {
      const now = new Date();
      const timeDifference = targetDate - now;

      if (timeDifference <= 0) {
        setTimeUntil("00:00:00:00");
        return;
      }

      const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((timeDifference / (1000 * 60)) % 60);
      const seconds = Math.floor((timeDifference / 1000) % 60);

      setTimeUntil(
        `${String(days).padStart(2, '0')}:${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`
      );
    };

    updateCounter();
    const intervalId = setInterval(updateCounter, 1000);

    return () => clearInterval(intervalId); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      <div class="jumbotron">
        <img id="vculogo" src={CEOLogo} alt="VCU COE Logo" style={{width: '500px', height: 'auto'}}/>
        <p id="counter">{timeUntil}</p>
        <p id="disclaimer">This site is not affiliate with Virginia Commonwealth University or the VCU College of Engineering.</p>
      </div>
    </>
  );
}

export default App;
