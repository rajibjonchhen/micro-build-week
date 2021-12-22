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
import MyPost from "./components/MyPost";
import { Container, Row, Col } from "react-bootstrap";
import "./MyStyle.css";
import "./App.css";

export default class App extends React.Component {
  state = {
    searchQuery: "",
  };

  setSearchQuery = (search) => {
    this.setState({ searchQuery: search });
    console.log(search);
  };

  handleInput = (input) => {
    this.setState({ searchQuery: input });
    console.log(input);
  };

  render() {
    return (
      <div className="App">
        <div className="nav-category">
          <MyNavBar handleInput={this.handleInput} />
          <MyCategory setSearchQuery={this.setSearchQuery} />
        </div>
        <Container className="main d-flex mt-5">
          <Row>
            <MyJumbotron />
            <MyPost />
            <MyArticles
              searchQuery={this.state.searchQuery || "the world"}
              className="mt-5"
            />
            <SideBar />
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}
