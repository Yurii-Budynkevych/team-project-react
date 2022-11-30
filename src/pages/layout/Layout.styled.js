import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { VscDiffAdded } from 'react-icons/vsc';
import { Button } from 'react-bootstrap';

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

export const Plus = styled(VscDiffAdded)`
  width: 28px;
  height: 28px;
  color: inherit;
`;

export const StyledBtn = styled(Button)`
  color: lightgray;
  transition: color 250ms cubic-bezier(0.075, 0.82, 0.165, 1);
  &:hover {
    color: white;
  }
`;
