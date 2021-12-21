import React from "react";
// import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCssCategory.css";
import MyCategory from "./components/MyCategory";
import MyNavBar from "./components/MyNavBar";
import MyArticles from "./components/MyArticles";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import "./MyStyle.css";
import "./App.css";
import SideBar from "./components/SideBar";

export default class App extends React.Component {
  state = {
    searchQuery: "",
  };

  setSearchQuery = (search) => {
    this.setState({ searchQuery: search });
    console.log(search);
  };
  render() {
    return (
      <div className="App">
        <MyNavBar />
        <MyCategory setSearchQuery={this.setSearchQuery} />
        <MyJumbotron />
        <div className="d-flex">
          <MyArticles searchQuery={this.state.searchQuery} />
          <SideBar />
        </div>
        <MyFooter />
      </div>
    );
  }
}
