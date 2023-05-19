import ScoreSection from './ScoreSection';
import CardsGrid from './CardsGrid';

const Main = (props) => {
  const {
    currentScore,
    bestScore,
    foxesInfo,
    handleTurnClick,
    resetGame,
    playerLost,
  } = props;
  return (
    <div className="main container">
      <ScoreSection currentScore={currentScore} bestScore={bestScore} />
      <CardsGrid
        currentScore={currentScore}
        foxesInfo={foxesInfo}
        handleTurnClick={handleTurnClick}
        resetGame={resetGame}
        playerLost={playerLost}
      />
    </div>
  );
};

export default Main;
