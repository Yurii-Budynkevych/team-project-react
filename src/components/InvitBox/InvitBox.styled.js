import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (${breakpoints.desktop}) {
    flex-direction: column;
  }
`;

export const Img = styled.img`
  display: block;
  width: 260px;
  margin: 60px 40px 50px 0;
  z-index: 1;

  @media screen and (${breakpoints.desktop}) {
    width: 420px;
    margin-top: 100px;
    margin-bottom: 28px;
  }
`;

export const Title = styled.h2`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 30px;
  line-height: 1.5;
  color: #000000;
  margin: 0;
  z-index: 1;
`;
