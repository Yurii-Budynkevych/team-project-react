import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-weight: 700;
  font-size: 24px;
  line-height: 1.5;
  color: #000000;
  margin-top: 0;
  margin-bottom: 40px;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  text-align: center;
  display: block;
  max-width: 300px;
  padding: 13px;
  background-color: #24cca7;
  color: #ffffff;
  border: 1px solid transparent;
  border-radius: 20px;
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.5;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;
