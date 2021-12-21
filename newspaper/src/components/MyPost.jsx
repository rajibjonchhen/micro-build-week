import { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import React from "react";

export default function MyPost() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      let resp = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=b05b2456108e40a9af9732b781e51033"
      );
      if (resp.ok) {
        let { articles } = await resp.json();
        setData(articles);
        setIsLoading(false);
        console.log(data);
      } else {
        console.log("fetching error");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  });

  return (
    <>
      {isLoading ? (
        <span className="sr-only">Loading...</span>
      ) : (
        data.map((post) => (
            <Card className="feature-news d-flex" style={{width:"20rem"} } >
              <Card.Img className="feature-image"variant="top" src={post.urlToImage} />
            <Card.Body className="feature-text">
              <Card.Title >{post.title}</Card.Title>
              <Card.Text >{post.author}</Card.Text>
              <h6 >{post.description}</h6>
              <h6  >{post.url}</h6>
           </Card.Body>
          </Card>
        ))
      )}
    </>
  );
}



