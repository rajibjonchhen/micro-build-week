import React, { Component } from 'react';
import {Container, Row, Col} from 'react-bootstrap'

class MyFooter extends React.Component {

    BlueText = {
        color:"rgb(1,123,254)",
    } 

    render() { 
        
        return (
            <Container className="p-4 mt-5" style={{backgroundColor:"rgb(249,249,249)",borderTop:"1px solid rgb(229,229,229)"}} fluid>
                <Row>
                    <Col>
                    <div>
                            <p>
                            Blog template built for <span style={this.BlueText}>Bootstrap</span> by <span style={this.BlueText}>@mdo</span>.
                            </p>

                            <p style={this.BlueText}>
                            Back to top
                            </p>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}
 
export default MyFooter;