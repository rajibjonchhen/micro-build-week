import {
  Navbar,
  Container,
  Nav,
  Button,
} from "react-bootstrap";

const NavBar = (props) => {
  return (
    <>
      <Navbar expand="lg" className="my-1">
        <Container>
          <div>
            <Nav
              className="me-auto my-2 my-lg-0 d-none d-md-flex"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Subscribe</Nav.Link>
            </Nav>
          </div>

          <div className="d-flex justify-content-center">
            <h1 href="#" className="mr-5 mr-lg-0">
              Strive Times News
            </h1>
            <Navbar.Toggle aria-controls="navbarScroll" />
          </div>

          <div>
            <Navbar.Collapse id="navbarScroll">
              <div className="d-block d-md-flex ml-auto">
                <span className="d-block d-md-flex">
                  <div className="d-flex align-items-center search-box">
                    <input className="search-input" type="text" name="" placeholder="Search" onChange={(e) => {
                          props.handleInput(e.currentTarget.value);
                          //console.log(e.currentTarget.value)
                        }}/>
                        <a href="#" className="search-btn">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search mr-2" viewBox="0 0 16 16">
                                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>                                
                            </svg>
                        </a>     
                  </div>
                  <Button variant="outline-secondary">Sign up</Button>
                </span>

                <Nav
                  className="me-auto my-2 my-lg-0 d-block d-md-none"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav.Link href="#action1">Subscribe</Nav.Link>
                </Nav>
              </div>
            </Navbar.Collapse>
          </div>
        </Container>
      </Navbar>
      <Container>
        <hr className="my-1" />
      </Container>
    </>
  );
};

export default NavBar;
