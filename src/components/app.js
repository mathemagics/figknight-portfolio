import React, { Component } from 'react';
import Header from './header';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header
          title="Fig Knight"
          links={['Products', 'About Us', 'Contact']}
        />
        {this.props.children}
      </div>
    );
  }
}
