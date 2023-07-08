import { format, parseISO } from 'date-fns';
import React, { Component } from 'react';
import {Card,} from 'react-bootstrap'
import { Ellipsis } from 'react-bootstrap/esm/PageItem';
class EachArticle extends React.Component {


    render() {
        return <>{
           
            <Card className='text-left mt-4' border="light" style={{height:"300px",overflow:"scroll"}}>
            <Card.Body>
              <p className="h2">{this.props.article.title}</p>
              <span className="small m-2">{format(parseISO(this.props.article.publishedAt),'MMMM do yyyy')} {this.props.article.author}</span>
              {/* <p className="mt-3" style={{textOverflow: 'ellipsis', whiteSpace: 'nowrap', overflow: 'hidden' }}>
              {this.props.article.description}
              </p> */}
            <hr/>
            
                <div className="d-flex">
                <span><img src={this.props.article.urlToImage} alt={this.props.article.title} style={{width:"10rem",margin:"10px"}}/></span>
             <p>
              {this.props.article.content}
              </p>
                </div>
            </Card.Body>
          </Card>
              
        }</>
    }
}
 
export default EachArticle