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
              <NavLink tag={RRNavLink} to='/friends'><i className="fas fa-user-friends fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/articles'><i className="fas fa-newspaper fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/weather'><i className="fas fa-sun fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/events'><i className="fas fa-calendar-week fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={RRNavLink} to='/messages'><i className="fas fa-comments fa-2x"></i></NavLink>
            </NavItem>
            <NavItem>
              <NavLink onClick={logoutClicky}><i className="fas fa-sign-out-alt fa-2x"></i></NavLink>
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
