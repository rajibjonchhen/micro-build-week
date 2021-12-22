import React, { Component } from "react";
import EachArticle from "./EachArticle";
import { Container, Row, Col, Spinner, Alert, Button } from "react-bootstrap";
import { compareAsc, format } from "date-fns";
class MyArticles extends React.Component {
  state = {
    articles: [],
    
    isLoading: true,
    showError: false,
    errorMsg: "",
    numberOfArticles: 4,
    arrStart: 0,
    arrEnd: 4,
  };



 

  fetchpost = async () => {
    
    try {
      let response = await fetch(this.props.url);
      let data = await response.json();

      if (data) {
        this.setState({ isLoading: false });
        this.setState({ articles: data.articles });
        this.setState({ numberOfArticles: data.articles.length });
      } else {
        this.setState({ isloading: false });
        this.setState({ errorMsg: "error on loading articles" });
        this.setState({ showError: true });
      }
    } catch (error) {
      this.setState({ isloading: false });
      this.setState({ errorMsg: error });
      this.setState({ showError: true });
    } 
  };


  componentDidMount = async () => {
  this.fetchpost()
  };

  componentDidUpdate = ( prevProps, prevState) => {
    if(prevProps.url !== this.props.url){
      this.fetchpost()
    }
  }


  nextArticles = (e) => {
    e.preventDefault();
    if (this.state.numberOfArticles > this.state.arrEnd) {
      this.setState({ arrStart: this.state.arrStart + 4 });
      this.setState({ arrEnd: this.state.arrEnd + 4 });
    }
  };

  prevArticles = (e) => {
    e.preventDefault();
    if (this.state.arrStart > 0) {
      this.setState({ arrStart: this.state.arrStart - 4 });
      this.setState({ arrEnd: this.state.arrEnd - 4 });
    }
  };
  render() {
    return (
      <Col sm={12} md={8} lg={8}>
        {/* Overall title of the article section */}
        <p className="h2 text-left"> Articles Based on {this.props.searchQuery}</p>
        <hr />
        {/* loader multiple spinner for colorful spinner :-D */}
        {this.state.isLoading && (
          <div>
            <Spinner animation="grow" variant="primary" />
            <Spinner animation="grow" variant="secondary" />
            <Spinner animation="grow" variant="success" />
            <Spinner animation="grow" variant="danger" />
            <Spinner animation="grow" variant="warning" />
            <Spinner animation="grow" variant="info" />
            <Spinner animation="grow" variant="dark" />
          </div>
        )}
        {/* error handling */}
        {this.state.showError === true && (
          <Alert variant="danger">
            {this.state.showError} Errror on Loading articles Cannot display
          </Alert>
        )}
        {/* loader and error handling ended */}
        {/*  {this.state.activities
            .sort(
              (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
            ) */}
        {this.state.articles &&
          this.state.articles.sort((a,b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
            .slice(this.state.arrStart, this.state.arrEnd)
            .map((article, i) => <EachArticle key={i} article={article} />)}
        {/*  */}

        <div className="text-left">
          <Button
            onClick={(e) => this.prevArticles(e)}
            style={{ borderRadius: "20px" }}
            variant="outline-primary"
          >
            Older
          </Button>
          <Button
            onClick={(e) => this.nextArticles(e)}
            className="ml-2"
            style={{ borderRadius: "20px" }}
            variant="outline-primary"
          >
            Newer
          </Button>
        </div>
      </Col>
    );
  }
}

export default MyArticles;
