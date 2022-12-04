import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';

export const MainDiv = styled.div`
  display: inline-block;
`;

export const Nav = styled.nav`
  display: none;
  @media ${breakpoints.minTablet} {
    display: flex;
    flex-direction: column;
    margin-left: 35px;
  }
  @media ${breakpoints.desktop} {
    margin-left: 19px;
  }
`;
export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-weight: 400;
  margin-bottom: 16px;
  &:last-child {
    margin-bottom: 28px;
  }
  &.active {
    font-weight: 700;
  }
  &.active img {
    opacity: 1;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;

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
  margin: 0;
  font-size: 18px;
  line-height: 0.6;
  margin-left: 20px;
  color: #000000;
`;

export const DivMob = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 15px;
  @media ${breakpoints.minTablet} {
    display: none;
  }
`;

export const StyledLinkMob = styled(NavLink)`
  text-decoration: none;
  &.active img {
    opacity: 1;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;

export const ImageMob = styled.img`
  width: 38px;
  height: 38px;
  opacity: 0.5;
`;
