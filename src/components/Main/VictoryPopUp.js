const VictoryPopUp = (props) => {
  const { resetGame } = props;
  return (
    <div className="victory-pop-up container">
      <div className="victory-pop-up text">Congratulations, you win!</div>
      <button onClick={resetGame} className="play-again">
        Play again
      </button>
    </div>
  );
};

export default VictoryPopUp;
