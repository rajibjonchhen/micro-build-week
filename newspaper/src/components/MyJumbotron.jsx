import React from "react";
import { Container, Jumbotron } from "react-bootstrap";

export default class MyJumbotron extends React.Component {
  render() {
    return (
      <Container>
        <Jumbotron className="bg-dark text-light">
          <div className="">
            <h1>Title of a longer featured blog post</h1>
            <p>
              Multiple lines of text that form the lede, informing new readers
              quickly and efficiently about what's most interesting in this
              post's contents.
            </p>
            <p>
              <a href="" className="">
                Continue reading..
              </a>
            </p>
          </div>
        </Jumbotron>
      </Container>
    );
  }
}
