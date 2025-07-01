import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import './ToggleButton.css';

type ToggleButtonProps = {
  isDark: boolean;
  onClick: () => void;
};

const ToggleButton: React.FC<ToggleButtonProps> = ({ isDark, onClick }) => (
  <button
    className={`navbar__toggle${isDark ? ' navbar__toggle--dark' : ''}`}
    aria-label="Toggle theme"
    onClick={onClick}
  >
    <span className="navbar__toggle-icon">
      {isDark ? <FaMoon /> : <FaSun />}
    </span>
    <span className="navbar__toggle-bg" />
  </button>
);

export default ToggleButton; 