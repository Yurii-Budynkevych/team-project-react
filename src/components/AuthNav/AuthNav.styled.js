import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavItem = styled(NavLink)`
  color: lightgrey;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: white;
  }

  &:not(:last-child) {
    margin-right: 20px;
  }
`;
