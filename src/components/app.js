import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header
          title="Fig Knight"
          links={['Products', 'About Us', 'Contact']}
        />
        <div className="content">
          {this.props.children}
        </div>
      </div>
    );
  }
}
