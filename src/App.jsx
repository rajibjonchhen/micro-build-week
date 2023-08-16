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
    url:"https://newsapi.org/v2/everything?q=bitcoin&apiKey=31873307c9984b4c976a5c43d2ad6ebf&q=business",
  };

  setSearchQuery = (search) => {
    this.setState({ url: "https://newsapi.org/v2/top-headlines?apiKey=31873307c9984b4c976a5c43d2ad6ebf&q=" + search });
    this.setState({searchQuery:search})
      };

  filterBy = (filter,filterValue,searchBy) => {
  if ( filter == "country") {
    this.setState({url: "https://newsapi.org/v2/top-headlines?apiKey=31873307c9984b4c976a5c43d2ad6ebf&q="+ filterValue})

  } else {
    this.setState({url: "https://newsapi.org/v2/everything?apiKey=31873307c9984b4c976a5c43d2ad6ebf&q="+ filterValue})

  }
    this.setState({searchQuery:searchBy})
  }
  handleInput = (input) => {
    this.setState({ url: "https://newsapi.org/v2/everything?apiKey=31873307c9984b4c976a5c43d2ad6ebf&q=" + input });
    this.setState({searchQuery:"search result"})
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
            <MyArticles url={this.state.url} searchQuery={this.state.searchQuery || "the world"} className="mt-5"/>
          <SideBar filterBy={this.filterBy}/>
          </Row>
        </Container>
        <MyFooter />
      </div>
    );
  }
}
