const ScoreSection = (props) => {
  const { currentScore, bestScore } = props;
  return (
    <div className="score-section container">
      <div className="current-score">Current score: {currentScore}</div>
      <div className="best-score">Best score: {bestScore}</div>
    </div>
  );
};

export default ScoreSection;
