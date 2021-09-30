import React from 'react';
import logo from '../../assets/images/logo.svg';
import './styles.scss';

const Welcome = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FE Finx Dashboard</p>
      </header>
    </div>
  );
};

export default Welcome;
