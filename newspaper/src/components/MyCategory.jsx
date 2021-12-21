import React, { Component } from 'react'
import { Container, Nav } from 'react-bootstrap'

export default class MyCategory extends Component {
    
    categories = [
        `business`,
        `entertainment`,
        `general`,
        `health`,
        `science`,
        `sports`,
        `technology`
    ]

    passCategory = (category) => {
        this.props.setSearchQuery(category)
    }

    render() {
        return (
            <div>
                <Container id="nav-category">
                    <Nav defaultActiveKey="/home" as="ul" className='d-flex justify-content-center py-4'>
                    <Nav.Item as="li">
                       {/*  {console.log(this.state.categoryState)} */}
                        {this.categories.map ( (category, i) => (
                                <Nav.Link key={i} onClick={() => this.passCategory(category) }> {category} </Nav.Link>
                            ))
                        }
                    </Nav.Item>
                    </Nav>
                </Container>
            </div>
        )
    }
}
