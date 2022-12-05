import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';
import backgroundImage from '../../img/bg-image.png';

export const Wrapper = styled.div`
  display: flex;
  height: 100%;
  @media ${breakpoints.maxTablet} {
    flex-direction: column;
    align-items: center;
  }
  background-image: url(${backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;

export const MainDiv = styled.div`
  @media ${breakpoints.minTablet} {
    min-width: 768px;
    margin-top: 45px;
  }
  @media ${breakpoints.desktop} {
    min-width: 480px;
  }
  display: inline-block;
  border: none;
  border-right: 1px solid #e7e5f2;
  box-shadow: -1px 0px 0px rgba(0, 0, 0, 0.05),
    1px 0px 0px rgba(255, 255, 255, 0.6);
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
  display: block;
  justify-content: space-evenly;

  margin-bottom: 15px;
`;

export const StyledLinkMob = styled(NavLink)`
  margin-right: 35px;
  &:first-child {
    margin-left: 65px;
  }
  &:last-child {
    margin-right: 65px;
  }
  &.active img {
    opacity: 1;
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }
`;

export const NewDiv = styled.div`
  padding-top: 15px;
  padding-bottom: 15px;
`;

export const ImageMob = styled.img`
  width: 38px;
  height: 38px;
  opacity: 0.5;
`;
