import React from 'react';

const Header = () => {
  return (
    <header className="header section" id="header">
      <div className="wrapper">
        <h1 className="header-title">Suzuki Customer Satisfaction Survey</h1>
        <p tabindex="0" className="header-message">Let us hear your voice so we can serve you better. Every opinion counts!</p>
        <a className="start-survey-link" href="#sectionCarModels">Start survey</a>
      </div>
    </header>
  );
};

export default Header;

