import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';

export const BalanceStyled = styled.div`
  flex-direction: column;
  display: flex;
  width: 280px;
  height: 80px;
  background: silver;
  border-radius: 30px;
  padding-left: 40px;
  margin: 0 auto;
  @media ${breakpoints.minTablet} {
    width: 336px;
    margin-left: 35px;
  }
  @media ${breakpoints.desktop} {
    width: 395px;
    margin-left: 19px;
  }
`;

export const Text = styled.p`
  font-family: 'circeRegular';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 0.6;
  text-transform: uppercase;
  color: #a6a6a6;
  margin: 0;
  margin-top: 12px;
`;

export const Number = styled.p`
  font-family: 'poppins';
  font-style: normal;
  font-weight: 700;
  font-size: 30px;
  line-height: 45px;
  color: #000000;
  margin: 0;
  margin-top: 12px;
  margin-bottom: 12px;
`;
