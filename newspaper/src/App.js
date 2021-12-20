import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
// import MyNavBar from './components/MyNavBar.jsx'
 import MyArticles from './components/MyArticles'
// import MyJumbotron from './components/MyJumbotron'
// import MyPostContainer from './components/MyJumbotron'
// import MyArticles from './components/MyJumbotron'
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
    <MyArticles/> 
    </div>
  );
}

export default App;
