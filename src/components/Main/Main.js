import ScoreSection from './ScoreSection';
import CardsGrid from './CardsGrid';

const Main = (props) => {
  const { currentScore, bestScore, foxesInfo } = props;
  return (
    <div className="main container">
      <ScoreSection currentScore={currentScore} bestScore={bestScore} />
      <CardsGrid foxesInfo={foxesInfo} />
    </div>
  );
};

export default Main;
