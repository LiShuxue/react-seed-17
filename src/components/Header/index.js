import { NavLink } from 'react-router-dom';
import './style.scss';
import logo from '../../assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img className="header-icon" src={logo} alt="logo" />
      <div className="header-nav">
        <NavLink to="/page1" className="link" activeClassName="active">
          page1
        </NavLink>
        <NavLink to="/page2" className="link" activeClassName="active">
          page2
        </NavLink>
        <NavLink to="/page3" className="link" activeClassName="active">
          page3
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
