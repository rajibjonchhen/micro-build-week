import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import MyArticles from './components/MyArticles'

import { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyFooter from './components/MyFooter';

class App extends Component{
  state = {
    searchQuery:"art"
  }

setSearch

  render(){
    return (
      <div className="App">
       {/* <MyNavBar/>
       <MyCategory/>
       <MyJumbotron/>
       <MyPostContainer/>
      */}
      <MyArticles searchQuery={this.state.searchQuery}/> 
      <MyFooter/>
      </div>
    );
  }
}

export default App;
