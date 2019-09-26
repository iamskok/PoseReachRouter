import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Link, Location } from '@reach/router';
import posed, { PoseGroup } from 'react-pose';
import Home from './pages/home';
import About from './pages/about';

import './styles.css';

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: 300 },
  exit: { opacity: 0 }
});

const PosedRouter = ({ children }) => (
  <Location>
    {({ location }) => (
      <PoseGroup>
        <RouteContainer key={location.key}>
          <Router location={location}>{children}</Router>
        </RouteContainer>
      </PoseGroup>
    )}
  </Location>
);

const App = () => (
  <div id="site-container">
    <header>
      <h1>Route transitions with Pose and Reach Router</h1>
    </header>
    <div id="content-container">
      <ul id="site-nav">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
      </ul>
      <PosedRouter>
        <Home path="/" />
        <About path="/about" />
      </PosedRouter>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));
