import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';

export const StyledSection = styled.section`
  position: relative;
  display: grid;

  min-height: 100vh;

  @media screen and (${breakpoints.mobile}) {
    background-color: #ffffff;
  }

  @media screen and (${breakpoints.onlyTablet}) {
    grid-template-rows: 1fr 2fr;
    overflow: hidden;
  }

  @media screen and (${breakpoints.minTablet}) {
    background-color: #e5e5e5;
  }

  @media screen and (${breakpoints.desktop}) {
    grid-template-columns: 1fr 1.3fr;
  }
`;
