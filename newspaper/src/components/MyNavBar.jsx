import {Navbar, Container, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap'

const MyNavBar = () => {
    return (
        <Navbar expand="lg" className='my-3'>
            <Container fluid>
                <div>
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1">Subscribe</Nav.Link>
                    </Nav>
                </div>
                
                <div className='d-flex justify-content-center'>
                    <h1 href="#" >Strive Times News</h1>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                </div>

                <div>
                    <Navbar.Collapse id="navbarScroll">
                        <Form className="d-flex ml-auto">
                        <div className='d-flex align-items-center'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search mr-2" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                        </div>
                            
                            <Button variant="outline-secondary">Sign up</Button>
                        </Form>
                    </Navbar.Collapse>
                </div>
            </Container>
           
        </Navbar>
    )
        
    
}

export default MyNavBar