import React, { Component } from 'react';
import EachArticle from './EachArticle'
import {Container, Row, Col, Spinner, Alert, Button} from 'react-bootstrap'
import { compareAsc, format } from 'date-fns'
class MyArticles extends React.Component {
state = {
    articles : [],
    search: this.props.searchQuery? this.props.searchQuery:"keyword",
    isLoading:true,
    showError:false,
    errorMsg:"",
    
}

    componentDidMount = async() => {
       try {
        let response =  await fetch("https://newsapi.org/v2/everything?apiKey=0f004968c8634a11bc6de3a41b29c857&q=" + this.state.search)
        let data = await response.json()
         console.log(data.articles)
         this.setState({articles:data.articles})
         this.setState({isLoading:false})
       } catch (error) {
         console.log(error)  
         this.setState({isloading:false})
         this.setState({errorMsg:error})
         this.setState({showError:true})
       }
    }
        
    render() { 
        return <Container>
           <Row>    
                   <Col sm={12} md={10} lg={8}>
                <p className="h2 text-left"> Top Stories from {this.props.searchQuery}</p>
                <hr/>
                {/* loader and error handling */}
                { this.state.isLoading && (<div>
             <Spinner animation="grow" variant="primary" />
              <Spinner animation="grow" variant="secondary" />
              <Spinner animation="grow" variant="success" />
              <Spinner animation="grow" variant="danger" />
              <Spinner animation="grow" variant="warning" />
              <Spinner animation="grow" variant="info" />
              <Spinner animation="grow" variant="light" />
              <Spinner animation="grow" variant="dark" />
             </div>)}
          
              { this.state.showError === true &&
              <Alert variant="danger">
                  {this.state.showError} Cannot display
               </Alert>
              }
                {/* loader and error handling ended */}
               { this.state.articles && (this.state.articles.map((article,i) => <EachArticle key={i} article={article}/>))}

                  </Col>
                </Row>
                <Row>
                  <Col className="text-left">
                  <Button style={{borderRadius:"20px"}} variant="outline-primary">Older</Button>
                  <Button className="ml-2" style={{borderRadius:"20px"}} variant="outline-primary">Newer</Button>
                  </Col>
                </Row>
        </Container>
    }
}

export default MyArticles;