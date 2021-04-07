import React, { Component } from "react";
import Nav from "react-bootstrap/Nav";
class componentName extends Component {
  render() {
    return (
      <Nav justify>
        <Nav.Item className="nav-box">
          <Nav.Link href="/" className="nav-text">
            Home
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-box">
          <Nav.Link href="/Articles" className="nav-text">
            Latest
          </Nav.Link>
        </Nav.Item>
        <Nav.Item className="nav-box">
          <Nav.Link href="/Categories" className="nav-text">
            Categories
          </Nav.Link>
        </Nav.Item>
      </Nav>
    );
  }
}

export default componentName;
