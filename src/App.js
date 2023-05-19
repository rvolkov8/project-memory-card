import { useState, useEffect } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

import bDayBoyPicture from './assets/fox-pictures/b-day-boy-fox.png';
import curiousPicture from './assets/fox-pictures/curious-fox.png';
import discovererPicture from './assets/fox-pictures/discoverer-fox.png';
import grumpyPicture from './assets/fox-pictures/grumpy-fox.png';
import learnerPicture from './assets/fox-pictures/learner-fox.png';
import sadPicture from './assets/fox-pictures/sad-fox.png';
import selfAssuredPicture from './assets/fox-pictures/self-assured-fox.png';
import sleeperPicture from './assets/fox-pictures/sleeper-fox.png';
import thoughtfulPicture from './assets/fox-pictures/thoughtful-fox.png';
import winnerPicture from './assets/fox-pictures/winner-fox.png';
import partyAnimalPicture from './assets/fox-pictures/party-animal-fox.png';
import runnerPicture from './assets/fox-pictures/runner-fox.png';

import './styles/App.css';
import './styles/Header.css';
import './styles/Main.css';
import './styles/Footer.css';
import './styles/ScoreSection.css';
import './styles/CardsGrid.css';
import './styles/Cell.css';
import './styles/VictoryPopUp.css';
import './styles/DefeatPopUp.css';

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [foxesInfo, setFoxesInfo] = useState([
    {
      name: 'B-day boy',
      picture: bDayBoyPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    {
      name: 'Curious',
      picture: curiousPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    {
      name: 'Discoverer',
      picture: discovererPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    { name: 'Grumpy', picture: grumpyPicture, id: uuidv4(), wasPressed: false },
    {
      name: 'Learner',
      picture: learnerPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    { name: 'Sad', picture: sadPicture, id: uuidv4(), wasPressed: false },
    {
      name: 'Self-assured',
      picture: selfAssuredPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    {
      name: 'Sleeper',
      picture: sleeperPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    {
      name: 'Thoughtful',
      picture: thoughtfulPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    { name: 'Winner', picture: winnerPicture, id: uuidv4(), wasPressed: false },
    {
      name: 'Party animal',
      picture: partyAnimalPicture,
      id: uuidv4(),
      wasPressed: false,
    },
    { name: 'Runner', picture: runnerPicture, id: uuidv4(), wasPressed: false },
  ]);
  const [playerLost, setPlayerLost] = useState(false);

  useEffect(() => {
    if (currentScore > bestScore) {
      setBestScore(currentScore);
    }
  }, [bestScore, currentScore]);

  const checkIfPressed = (id) => {
    let result = false;
    // eslint-disable-next-line array-callback-return
    foxesInfo.map((foxInfo) => {
      if (foxInfo.id === id && foxInfo.wasPressed === true) {
        result = true;
      }
    });
    return result;
  };

  const handleTurnClick = (id) => {
    if (checkIfPressed(id)) {
      setPlayerLost(true);
    } else {
      setFoxesInfo((prevState) => {
        const newState = [...prevState];
        // eslint-disable-next-line array-callback-return
        newState.map((el) => {
          if (el.id === id) {
            el.wasPressed = true;
          }
        });
        return newState;
      });
      setCurrentScore((prevState) => {
        const newState = prevState + 1;
        return newState;
      });
    }
  };

  const resetGame = () => {
    setCurrentScore(0);
    setFoxesInfo((prevState) => {
      const newState = [...prevState];
      // eslint-disable-next-line array-callback-return
      newState.map((el) => {
        el.wasPressed = false;
      });
      return newState;
    });
    setPlayerLost(false);
  };

  return (
    <>
      <Header />
      <Main
        currentScore={currentScore}
        bestScore={bestScore}
        foxesInfo={foxesInfo}
        handleTurnClick={handleTurnClick}
        resetGame={resetGame}
        playerLost={playerLost}
      />
      <Footer />
    </>
  );
}

export default App;
