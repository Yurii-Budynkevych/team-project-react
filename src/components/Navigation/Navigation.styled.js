import { Link } from 'react-router-dom';
import styled from 'styled-components';
// import { breakpoints } from '../../utils/sizes';

export const NavStyled = styled.div`
  display: flex;
  align-items: center;
`;

export const Image = styled.img`
  width: 18px;
  height: 18px;
`;

export const Text = styled.p`
  font-family: 'Poppins';
  font-weight: 400;
  font-size: 18px;
  line-height: 0.6;
  margin-left: 20px;
  color: #000000;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;