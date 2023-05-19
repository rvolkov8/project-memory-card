import logo from '../../assets/fox-logo.png';

const Header = () => {
  return (
    <div className="header container">
      <div className="header content">
        <img className="logo" src={logo} alt="Logo is loading..." />
      </div>
      <div className="header divider"></div>
    </div>
  );
};

export default Header;
