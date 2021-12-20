import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import MyArticles from './components/MyArticles'

import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component{
  state = {
    searchQuery:"business"
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
      </div>
    );
  }
}

export default App;
