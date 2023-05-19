import { useState } from 'react';

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

function App() {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [foxesInfo, setFoxesInfo] = useState([
    { name: 'B-day boy', picture: bDayBoyPicture },
    { name: 'Curious', picture: curiousPicture },
    { name: 'Discoverer', picture: discovererPicture },
    { name: 'Grumpy', picture: grumpyPicture },
    { name: 'Learner', picture: learnerPicture },
    { name: 'Sad', picture: sadPicture },
    { name: 'Self-assured', picture: selfAssuredPicture },
    { name: 'Sleeper', picture: sleeperPicture },
    { name: 'Thoughtful', picture: thoughtfulPicture },
    { name: 'Winner', picture: winnerPicture },
    { name: 'Party animal', picture: partyAnimalPicture },
    { name: 'Runner', picture: runnerPicture },
  ]);

  return (
    <>
      <Header />
      <Main
        currentScore={currentScore}
        bestScore={bestScore}
        foxesInfo={foxesInfo}
      />
      <Footer />
    </>
  );
}

export default App;
