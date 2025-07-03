import React from 'react';
import logo from '@/assets/images/logo.jpg';
import ToggleButton from '../ToggleButton';
import './Navbar.css';

type NavbarProps = {
  isDark: boolean;
  onToggleTheme: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ isDark, onToggleTheme }) => {
  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>
      {/* <p>Toggle</p> */}
      <ToggleButton isDark={isDark} onClick={onToggleTheme} />
    </nav>
  );
};

export default Navbar;