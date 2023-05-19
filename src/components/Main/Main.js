import ScoreSection from './ScoreSection';
import CardsGrid from './CardsGrid';

const Main = (props) => {
  const { currentScore, bestScore } = props;
  return (
    <div className="main container">
      <ScoreSection currentScore={currentScore} bestScore={bestScore} />
      <CardsGrid />
    </div>
  );
};

export default Main;
