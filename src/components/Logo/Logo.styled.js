import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';

export const LogoStyled = styled.div`
  display: flex;
  align-items: center;
  @media ${breakpoints.desktop} {
    align-items: flex-end;
  }
`;

export const Image = styled.img`
  width: 30px;
  height: 30px;
  @media ${breakpoints.minTablet} {
    display: inline;
    width: 40px;
    height: 40px;
  }
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 30px;
  line-height: 1.5;
  margin: 0 0 0 20px;
  color: #000000;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;
