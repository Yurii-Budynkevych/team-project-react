import { Nav } from 'react-bootstrap';
import { NavItem } from './AuthNav.styled';

export const AuthNav = () => {
  return (
    <Nav className="me-auto, justify-content-end">
      <NavItem to="/registration">Register</NavItem>
      <NavItem to="/login">Login</NavItem>
    </Nav>
  );
};
