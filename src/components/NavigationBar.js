import React, { Children } from 'react';
import { Nav, Navbar, Form, FormControl, NavDropdown } from 'react-bootstrap';
import styled from 'styled-components';
import hsbc from '../asset/hsbc.png'
const Styles = styled.div`
  .navbar { background-color: white; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: black;
    &:hover { color: darkgrey; }
  }
  .navbar-brand {
    font-size: 1.4em;
    color: black;
    &:hover { color: darkgrey; }
  }
  .nav-link{
    margin: auto 20px;
    &:hover {border-bottom: 1px solid #DB0011 }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
  }
`;

const DropDown = ({children}) => (
  <StyledDropDown title={children} id="basic-nav-dropdown">
    <NavDropdown.Item href="/business-profile">Business Profile</NavDropdown.Item>
    <NavDropdown.Item href="/dashboard">Dasboard</NavDropdown.Item>
    <NavDropdown.Item href="/projectlist">Crowd Lending Opportunities</NavDropdown.Item>
  </StyledDropDown>
);

const StyledDropDown = styled(NavDropdown)`
`;

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg" className="shadow p-3 mb-5 bg-white rounded">
      <Navbar.Brand href="/">
        <img
          alt=""
          src={hsbc}
          height="30"
          className="d-inline-block align-text-top ml-"
        />{' '}
        Digital Hub
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-center">
        <Nav>
          <Nav.Item><Nav.Link href="/">Home Page</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/">Digital Loan</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/p2blanding">Crowd Lending</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/">Marketplace</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
     <DropDown className='ml-auto'>Vicky Zhang</DropDown>
    </Navbar>
  </Styles>
)