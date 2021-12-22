import React from "react";
import { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./MyCssCategory.css";
import MyCategory from "./components/MyCategory";
import MyNavBar from "./components/MyNavBar";
import MyArticles from "./components/MyArticles";
import MyFooter from "./components/MyFooter";
import MyJumbotron from "./components/MyJumbotron";
import SideBar from "./components/SideBar";
import MyPost from './components/MyPost'
import {Container, Row, Col} from 'react-bootstrap'
import "./MyStyle.css";
import "./App.css";

export default class App extends React.Component {
  state = {
    searchQuery: "",
    url:""
  };

  setSearchQuery = (search) => {
    this.setState({ searchQuery: search });
    console.log(search);
  };

  filterBy = (filter,filterValue) => {
    this.setState({url:"https://newsapi.org/v2/top-headlines?&apiKey=0f004968c8634a11bc6de3a41b29c857&" + filter + "=" + filterValue})
  }
  render() {
    return (
      <div className="App">
        <div className="nav-category">
        <MyNavBar />
        <MyCategory setSearchQuery={this.setSearchQuery} />
        </div>
        <Container className="main d-flex mt-5">
        <Row>
        <MyJumbotron />
        <MyPost />
          <MyArticles searchQuery={this.state.searchQuery || "the world"} className="mt-5"/>
          <SideBar filterBy={this.filterBy}/>
        </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}
