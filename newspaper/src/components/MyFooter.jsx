import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class MyFooter extends React.Component {

    BlueText = {
        color:"rgb(1,123,254)",
        TextDecoder:"none",
    } 

    
    render() { 
        
        return (
            <Container className="p-4 mt-5" style={{backgroundColor:"rgb(249,249,249)",borderTop:"1px solid rgb(229,229,229)"}} fluid id="back">
                <Row>
                    <Col>
                    <div>
                            <p>
                            Blog template built for <a style={this.BlueText}>Bootstrap</a> by <a style={this.BlueText}>@mdo</a>.
                            </p>

                            <p style={this.BlueText}>
                            <a href='back'> Back to top</a>
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
 
export default MyFooter;