import React from 'react';
import PropTypes from 'prop-types';
import { NavLink as RRNavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import './Mavbar.scss';

class Mavbar extends React.Component {
  static propTypes = {
    isAuthed: PropTypes.bool,
    logoutClicky: PropTypes.func,
  }

  state = {
    isOpen: false,
  };

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    const { isAuthed, logoutClicky } = this.props;

    const buildMavbar = () => {
      if (isAuthed) {
        return (
          <Nav className='ml-auto' navbar>
            <NavItem>
              <NavLink tag={RRNavLink} to='/friends'>Friends</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/articles'>Articles</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/weather'>Weather</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/events'>Events</NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/messages'>Messages</NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logoutClicky}>Logout</NavLink>
            </NavItem>
          </Nav>
        );
      }
      return <Nav className='ml-auto' navbar />;
    };

    return (
      <div className="my-navbar">
        <Navbar color="dark" dark expand="md">
            <NavbarBrand href="/">React Nutshell</NavbarBrand>
            <NavbarToggler onClick={e => this.toggle(e)} />
            <Collapse isOpen={this.state.isOpen} navbar>
              {buildMavbar()}
              </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Mavbar;
