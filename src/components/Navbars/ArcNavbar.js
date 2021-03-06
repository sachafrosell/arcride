import React from "react";
// reactstrap components
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
// core components

function ArcNavBar(){
  return (
    <>
      <Navbar className="bg-primary" expand="lg">
        <Container>
          <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
            Navbar
          </NavbarBrand>
          <button className="navbar-toggler" id="navbarNav" type="button">
            <span className="navbar-toggler-icon"></span>
          </button>
          <UncontrolledCollapse navbar toggler="#navbarNav">
            <Nav navbar>
              <NavItem className="active">
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  HhHHHHH <span className="sr-only">(current)</span>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Features
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#pablo" onClick={e => e.preventDefault()}>
                  Pricing
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  className="disabled"
                  href="#pablo"
                  onClick={e => e.preventDefault()}
                >
                  Disabled
                </NavLink>
              </NavItem>
            </Nav>
          </UncontrolledCollapse>
        </Container>
      </Navbar>
    </>
  );
}

export default ArcNavBar;
