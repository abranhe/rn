import React, { Component } from 'react';
import logo from './logo.svg';
import logos from './favicon.png';
import './App.css';

const links = {
  twitterUrl: 'https://twitter.com/',
  githubUrl: 'https://github.com/'
};

const images = {
  twitterImgUrl: 'https://img.shields.io/twitter/follow/',
  githubImgUrl: 'https://img.shields.io/github/followers/',
  endImage: '.svg?style=social&label=Follow'
};

const buildUserInfo = username => {
  images.twitterImg = images.twitterImgUrl + username + images.endImage;
  images.githubImg = images.githubImgUrl + username + images.endImage;
  links.twitter = links.twitterUrl + username;
  links.github = links.githubUrl + username;
};

buildUserInfo('abranhe');

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            I am into React and React Native ⚛️
          </p>
          <div className="nav">
            <ul>
              <li>
                <a
                href={links.twitter}
                target="_blank"
                >
                <img src={images.twitterImg} alt="Twitter Image"/>
                </a>
              </li>
              <li>
                <a
                href={links.github}
                target="_blank"
                >
                <img src={images.githubImg} alt="Github Image"/>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
