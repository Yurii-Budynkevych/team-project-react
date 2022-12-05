import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { VscDiffAdded } from 'react-icons/vsc';
import { Button } from 'react-bootstrap';
import { Box } from 'components/Box/Box';

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

export const Header = styled(Box)`
  width: 100%;
  padding-top: 7.5px;
  padding-bottom: 7.5px;
  padding-left: 16px;
  padding-right: 16px;
  display: flex;
  justify-content: space-between;
  @media screen and (min-width: 1280px) {
    padding-top: 32px;
    padding-bottom: 32px;
  }
  @media screen and(min-width: 767px) and (max-width: 1279px) {
    padding-top: 17.5px;
    padding-bottom: 17.5px;
  }
`;
