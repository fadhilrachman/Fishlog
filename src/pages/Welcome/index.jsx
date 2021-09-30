import React from 'react';
import { useHistory } from 'react-router';

// components
import { Button } from '../../compontes/atoms';

// assets
import logo from '../../assets/images/logo.svg';

import './styles.scss';

const Welcome = () => {
  const history = useHistory();
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>FE Finx Dashboard</p>
        <div className="d-flex">
          <Button size="sm" onClick={() => history.push('/about')}>
            About
          </Button>
        </div>
      </header>
    </div>
  );
};

export default Welcome;
