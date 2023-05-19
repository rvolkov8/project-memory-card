import ScoreSection from './ScoreSection';
import CardsGrid from './CardsGrid';

const Main = (props) => {
  const { currentScore, bestScore, foxesInfo, handleTurnClick } = props;
  return (
    <div className="main container">
      <ScoreSection currentScore={currentScore} bestScore={bestScore} />
      <CardsGrid foxesInfo={foxesInfo} handleTurnClick={handleTurnClick} />
    </div>
  );
};

export default Main;
