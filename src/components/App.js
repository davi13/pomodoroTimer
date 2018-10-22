import React, { Component } from 'react';
//Components
import Timer from './pomodore/Timer'
//LAYOUT components
import Header from '../shared/components/layout/Header';
import Content from '../shared/components/layout/Content';
import Footer from '../shared/components/layout/Footer';



//style
import './App.css';



//import logo from '../shared/images/logo.svg';



class App extends Component {
  render() {
    return (
      <div className="App">
        <Header title="Welcome To Davi's App" />
        <Content>

          <Timer />
        </Content>
        <Footer />
      </div>
    );
  }
}

export default App;
