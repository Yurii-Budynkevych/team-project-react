import styled from 'styled-components';
import { breakpoints } from '../../utils/sizes';

export const Elipse1 = styled.img`
  position: absolute;
  bottom: 0;
  left: 0;
`;

export const Elipse2 = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  @media screen and (${breakpoints.onlyTablet}) {
    top: 0px;
    right: -180px;
  }

  @media screen and (${breakpoints.desktop}) {
    filter: blur(16px);
  }
`;
