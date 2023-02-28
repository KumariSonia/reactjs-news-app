import './App.css';
import React, { Component } from 'react'
import Header from './components/Header';
import News from './components/News';

export default class App extends Component {
  c="John"
  render() {
    return (
      <div>
        <Header />
        <News pageSize={5} />
      </div>
    )
  }
}
