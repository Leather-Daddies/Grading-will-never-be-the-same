import React, { Component } from 'react';
import styles from './App.css'
import Footer from './Footer.jsx'

export default class App extends Component {
  constructor(){
    super();

  }

  render(){
    return (
      <div>
        <h1>Hey There</h1>

        <Footer />
      </div>
    )
  }
}
