const Cell = (props) => {
  const { name, picture } = props;
  return (
    <div className="cell container">
      <img className="fox picture" src={picture} alt="loading..." />
      <div className="fox name">{name}</div>
    </div>
  );
};

export default Cell;
