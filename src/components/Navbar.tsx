import React from 'react';
import logo from '@/assets/images/logo.jpg';
import ToggleButton from './ToggleButton';
import './Navbar.css';

const Navbar = () => {
  // Placeholder for theme state and toggle logic
  const [isDark, setIsDark] = React.useState(false);

  return (
    <nav className="navbar">
      <div className="navbar__logo-container">
        <img src={logo} alt="Logo" className="navbar__logo" />
      </div>
      <ToggleButton isDark={isDark} onClick={() => setIsDark((prev) => !prev)} />
    </nav>
  );
};

export default Navbar;