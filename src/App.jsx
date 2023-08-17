import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CssCategory.css";
import Category from "./components/Category";
import NavBar from "./components/NavBar";
import Articles from "./components/Articles";
import Footer from "./components/Footer";
import Jumbotron from "./components/Jumbotron";
import SideBar from "./components/SideBar";
import ScrollPosts from "./components/ScrollPosts";
import { Container, Row, Col } from "react-bootstrap";
import "./Style.css";
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
          <div className="header">
            <NavBar handleInput={this.handleInput} />
            <Category setSearchQuery={this.setSearchQuery} />
          </div>
        <Container className="main d-flex mt-2">
          <Row>
            <Jumbotron />
            <ScrollPosts />
            <Articles url={this.state.url} searchQuery={this.state.searchQuery || "the world"} className="mt-5"/>
          <SideBar filterBy={this.filterBy}/>
          </Row>
        </Container>
        <Footer />
      </div>
    );
  }
}
