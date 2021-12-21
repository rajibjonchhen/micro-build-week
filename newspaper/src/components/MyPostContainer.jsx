
import React, {Component} from 'react';
import MyPost from './MyPost'
import {Container, Row, Col} from 'react-bootstrap'
import '../App.css'

export default class MyPostContainer  extends React.Component {
    render(){
        return (
            <Container>
                <Row className="post-container">
                    
                    <MyPost/>
                    
                </Row>
            </Container>
        )
    }
} 
