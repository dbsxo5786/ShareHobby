import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Game from './pages/Game';
import Music from './pages/Music';
import Webtoon from './pages/Webtoon';
import './app.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const App = () => {

  useEffect(() => {
    const toggleBtn = document.querySelector('.navbar_togleBtn');
    const menu = document.querySelector('.navbar_menu');
    const icons = document.querySelector('.navbar_icons');

    const handleToggle = () => {
      menu.classList.toggle('active');
      icons.classList.toggle('active');
    };

    if (toggleBtn) {
      toggleBtn.addEventListener('click', handleToggle);
    }

    return () => {
      if (toggleBtn) {
        toggleBtn.removeEventListener('click', handleToggle);
      }
    };
  }, []);

  return(
    <Router>
      <div>
        <nav className="navbar">
          <div className="navbar_logo">
            <FontAwesomeIcon icon={faComments} />
            <a>취미공유</a>     
          </div>

          <ul className="navbar_menu">
            <li>
              <Link to="/"><a>메인</a></Link>
            </li>
            <li>
              <Link to="/game"><a>게임</a></Link>
            </li>
            <li>
              <Link to="/music"><a>음악</a></Link>
            </li>
            <li>
              <Link to="/webtoon"><a>웹툰</a></Link>
            </li>
          </ul>

          <div className="navbar_icons">
            <Link to="/login">
              <FontAwesomeIcon icon={faCircleUser} size="2x" />
            </Link>
          </div>

          <a className="navbar_togleBtn">
            <FontAwesomeIcon icon={faBars} />
          </a>
        </nav>

        <Routes>
          <Route path="/" exact Component={Home} />
          <Route path="/login" Component={Login} />
          <Route path="/game" Component={Game} />
          <Route path="/music" Component={Music} />
          <Route path="/webtoon" Component={Webtoon} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;