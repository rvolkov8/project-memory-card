import Cell from './Cell';

const CardsGrid = (props) => {
  const { foxesInfo } = props;

  const cells = Array.from(
    foxesInfo.map((foxInfo) => {
      return <Cell name={foxInfo.name} picture={foxInfo.picture} />;
    })
  );

  return <div className="cards-grid container">{cells}</div>;
};

export default CardsGrid;
