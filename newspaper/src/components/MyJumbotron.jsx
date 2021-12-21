import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import "./MyJumbotron.css";

export default class MyJumbotron extends React.Component {
  state = {
    // news: [],
    object1: {},
  };
  componentDidMount = async () => {
    try {
      let response = await fetch(
        "https://newsapi.org/v2/everything?q=politics&apiKey=b05b2456108e40a9af9732b781e51033"
      );
      console.log("THIS is the Response", response); //CHECK
      if (response.ok) {
        let data = await response.json();

        // this.setState({ news: data.articles }); why it did not work  as an array
        this.setState({ object1: data.articles[2] });
        console.log("This is a data", data.articles);
      } else {
        console.log("SOMETHING WENT WRONG"); //CHECK
      }
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <Container>
        <Jumbotron className="p-5 bg-dark text-light">
          <h1 className="text-white font-italic display-4">
            {this.state.object1.title}
          </h1>
          <p className="lead my-3">{this.state.object1.description}</p>
          <p>
            {/* note: ask ubeyt about href links&fetch! */}
            <a
              href={`${this.state.object1.url}`}
              className="font-weight-bolder text-light"
            >
              Continue reading..
            </a>
          </p>
        </Jumbotron>
      </Container>
    );
  }
}
