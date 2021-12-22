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
    url:"https://newsapi.org/v2/everything?q=bitcoin&apiKey=d22600ae7493498caf03a30df9b6bce6&q=keywords",
  };

  setSearchQuery = (search) => {
    this.setState({ searchQuery: search });
    console.log(search);
  };

  filterBy = (filter,filterValue,searchBy) => {
    this.setState({url: "https://newsapi.org/v2/everything?q=bitcoin&apiKey=d22600ae7493498caf03a30df9b6bce6&q=" + filterValue})
    this.setState({searchQuery:searchBy})
    console.log(filter)
    console.log(filterValue)
    console.log(searchBy)
    console.log(this.state.url)
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
          <MyArticles url={this.state.url} searchQuery={this.state.searchQuery || "the world"} className="mt-5"/>
          <SideBar filterBy={this.filterBy}/>
        </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}
