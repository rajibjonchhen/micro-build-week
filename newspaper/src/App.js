import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
 import MyArticles from './components/MyArticles'

import { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {


  return (
    <div className="App">
     {/* <MyNavBar/>
     <MyCategory/>
     <MyJumbotron/>
     <MyPostContainer/>
    */}
    <MyArticles /> 
    </div>
  );
}

export default App;
