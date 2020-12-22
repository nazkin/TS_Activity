import React from 'react';
import './comp_styles/header.css';
import {withRouter} from 'react-router-dom';
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  Button,
  FormControl,
} from 'react-bootstrap';
import {FaBeer} from 'react-icons/fa';

// export interface IHeaderProps {}

const Header: React.FC = () => {
  return (
    <header>
      <span className="nav-brand-span">
        <FaBeer size="2em" />
        <a className="navbar-brand" href="/">
          How 'bout a drink?{' '}
        </a>
      </span>
      <Navbar bg="dark" variant="dark" expand="xl" className="header-nav">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <NavDropdown title="Menu" id="basic-nav-dropdown">
              <NavDropdown.Item href="/">Home</NavDropdown.Item>
              <NavDropdown.Item href="/">About</NavDropdown.Item>
              <NavDropdown.Item href="/">Search</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/">Favorites</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withRouter(Header);
