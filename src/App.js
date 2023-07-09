import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import image from "./img/developer.png";



function App() {
  return (
    <React.Fragment>
      <div className='App'>
      <br />
 
      <Navbar className='fixed-top' bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">MyFirstApp</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#Courses">Courses</Nav.Link>
            <Nav.Link href="#Contactus">Contact us</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <div className=" vh-100 d-flex justify-content-center align-items-center">
      <div >
      <p class="h3">Web developer</p>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src= {image}/>
      <Card.Body>
        <Card.Title>React JS</Card.Title>
        <Card.Text>
          Become a front-end developer by learning React.
          
          ReactJS brings with it rich features that make it an easy to use and popular tool among developers
        </Card.Text>
        <Button variant="primary">See more</Button>
      </Card.Body>
    </Card>
    </div>
    </div>
      </div>

    </React.Fragment>
  );
}

export default App;
