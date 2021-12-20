import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap'

export default class MyCategory extends Component {
    render() {
        return (
            <div>
                <Container id="nav-category">
                    <Nav defaultActiveKey="/home" as="ul" className='d-flex justify-content-between py-4'>
                        <Nav.Item as="li">
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item> 
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link href="/home">Active</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-1">Link</Nav.Link>
                        </Nav.Item>
                        <Nav.Item as="li">
                            <Nav.Link eventKey="link-2">Link</Nav.Link>
                        </Nav.Item>
                    </Nav>
                </Container>
            </div>
        )
    }
}
