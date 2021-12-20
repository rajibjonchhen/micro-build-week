import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap'

export default class MyCategory extends Component {
    state = {
        categoryState: "",
    }

    categories = [
        `business`,
        `entertainment`,
        `general`,
        `health`,
        `science`,
        `sports`,
        `technology`
    ]

    render() {
        return (
            <div>
                <Container id="nav-category">
                    <Nav defaultActiveKey="/home" as="ul" className='d-flex justify-content-center py-4'>
                    <Nav.Item as="li">
                        {console.log(this.state.category)}
                        {this.categories.map ( (category, i) => (
                                <Nav.Link key={i} onClick={() => this.setState({categoryState: category})}> {category} </Nav.Link>
                            ))
                        }
                    </Nav.Item>
                    </Nav>
                </Container>
            </div>
        )
    }
}
