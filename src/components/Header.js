import React, { Component } from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <Navbar  bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/">NewsApp</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>)
  }
}
