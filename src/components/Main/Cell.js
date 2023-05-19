const Cell = (props) => {
  const { name, picture, handleTurnClick, id } = props;
  return (
    <div
      className="cell container"
      onClick={() => {
        handleTurnClick(id);
      }}
    >
      <img className="fox picture" src={picture} alt="loading..." />
      <div className="fox name">{name}</div>
    </div>
  );
};

export default Cell;
