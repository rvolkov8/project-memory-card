const DefeatPopUp = (props) => {
  const { resetGame } = props;
  return (
    <div className="defeat-pop-up container">
      <div className="defeat-pop-up text">You lose. Try one more time!</div>
      <button onClick={resetGame} className="play-again">
        Play again
      </button>
    </div>
  );
};

export default DefeatPopUp;
