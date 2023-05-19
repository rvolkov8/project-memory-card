import { useState } from 'react';

import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';

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

  return (
    <>
      <Header />
      <Main currentScore={currentScore} bestScore={bestScore} />
      <Footer />
    </>
  );
}

export default App;
