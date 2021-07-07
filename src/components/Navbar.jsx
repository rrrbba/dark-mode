import React from 'react';
import { useDarkMode } from '../hooks/useDarkMode';

const Navbar = () => {
  //this shows that we are controlling the toggle dark mode (setDarkMode(darkMode)) with some state hook (was originally useState() but we changed it to useDarkMode() in order to run the function we imported from useDarkMode.js) 
  const [darkMode, setDarkMode] = useDarkMode();
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  //now darkMode will toggle with it's clicked!

  return (
    <nav className="navbar">
      <h1>Crypto Tracker</h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;
