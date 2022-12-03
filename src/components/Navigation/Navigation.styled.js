import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';
export const NavStyled = styled.div`
  display: flex;
  align-items: center;
`;
export const Image = styled.img`
  width: 18px;
  height: 18px;
  opacity: 0.5;
`;
export const Text = styled.p`
  font-family: 'poppins';

  font-size: 18px;
  line-height: 0.6;
  margin-left: 20px;
  color: #000000;
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 400;
  &.active {
    font-weight: 700;
  }
  &.active img {
    opacity: 1;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;
export const Nav = styled.nav`
  display: none;
  @media ${breakpoints.minTablet} {
    display: block;
  }
`;
export const DivMob = styled.div`
  display: flex;
  justify-content: space-evenly;
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;
export const StyledLinkMob = styled(NavLink)`
  text-decoration: none;
`;
