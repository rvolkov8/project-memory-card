import Cell from './Cell';
import DefeatPopUp from './DefeatPopUp';
import VictoryPopUp from './VictoryPopUp';

const CardsGrid = (props) => {
  const { foxesInfo, handleTurnClick, currentScore, resetGame, playerLost } =
    props;

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };

  const cells = Array.from(
    foxesInfo.map((foxInfo) => {
      return (
        <Cell
          name={foxInfo.name}
          picture={foxInfo.picture}
          key={foxInfo.id}
          id={foxInfo.id}
          handleTurnClick={handleTurnClick}
        />
      );
    })
  );

  return (
    <div className="cards-grid container">
      {playerLost === true && <DefeatPopUp resetGame={resetGame} />}
      {currentScore === 12 && <VictoryPopUp resetGame={resetGame} />}
      {shuffleArray(cells)}
    </div>
  );
};

export default CardsGrid;
