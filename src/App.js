import React from 'react';
import './App.css';

const Icon = ({ link, iconName }) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="main-icon"
    >
      <ion-icon name={iconName} />
    </a>
  );
};

function App() {
  return (
    <div className="main">
      <h1 id="main-name">Shiyuan Huang</h1>
      <h2 id="main-descrip">CS @ Cornell</h2>
      <div id="icon-row">
        <Icon
          link="https://github.com/Shiyuan-Huang-23"
          iconName="logo-github"
        />
        <Icon
          link="https://www.linkedin.com/in/shiyuan-huang/"
          iconName="logo-linkedin"
        />
      </div>
    </div>
  );
}

export default App;
