import { useState, useEffect } from "react";
import { Card, Container, Row } from "react-bootstrap";
import React from "react";
import '../App.css'

export default function MyPost() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    try {
      let resp = await fetch(
        "https://newsapi.org/v2/top-headlines?country=us&apiKey=31873307c9984b4c976a5c43d2ad6ebf"
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
  }, []);

  return (
    <>
      {/* {isLoading ? (
        <span className="sr-only">Loading...</span>
      ) : ( */}
        <Container>
        <Row className="post-container row-cols-1  row-cols-md-2 row-cols-lg-2 p-0 m-0">
          <>
          {
        data.map((post,i) => (
            <Card key={i} className="feature-news" style={{width:"40vw"} } >
              <Card.Img className="feature-image"variant="top" src={post.urlToImage} />
            <Card.Body className="feature-text">
            <Card.Title className="feature-name">
                    {post.source.name}
                  </Card.Title>
              <Card.Title >{post.title}</Card.Title>
              
              <Card.Text >{post.author}</Card.Text>
              <h6 >{post.description}</h6>
              <h6  >{post.url}</h6>
           </Card.Body>
          </Card>
             
        ))
         } 


</>
         </Row>
        
    </Container>
      {/* )} */}
    </>
  );
}



