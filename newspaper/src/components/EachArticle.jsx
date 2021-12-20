import React, { Component } from 'react';
import {Card,} from 'react-bootstrap'
class EachArticle extends React.Component {
    render() { 
        return <>{
           
            <Card className='mt-4' border="dark" style={{ width: '58rem' }}>
            <Card.Header>{this.props.article.source.name} {this.props.article.author}</Card.Header>
            <Card.Body>
              <Card.Title>{this.props.article.title}</Card.Title>
              <Card.Text>
              {this.props.article.content}
              </Card.Text>
            </Card.Body>
          </Card>
                // <div className="">

                // <p className="h3">{</p>
                // <span></span>
                // <span></span>
                // <p>
                //     

                // </p>
                // </div>
            
           

        }</>;
    }
}
 
export default EachArticle;