import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    const fadeConfig = { stiffness: 200, damping: 22 };
    return (
      <div className="app">
        <div className="background-image" />
        <Header links={['Products', 'About Us', 'Contact']} />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
