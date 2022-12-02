import { Balance } from 'components/Balance/Balance';
import { Outlet } from 'react-router-dom';
import {
  DivMob,
  Image,
  Nav,
  NavStyled,
  StyledLink,
  StyledLinkMob,
  Text,
} from './Navigation.styled';
export const Navigation = () => {
  return (
    <>
      <Nav>
        <StyledLink to="/home">
          <NavStyled>
            <Image src="https://via.placeholder.com/18x18" alt="IconHome" />
            <Text>Home</Text>
          </NavStyled>
        </StyledLink>
        <StyledLink to="/diagram">
          <NavStyled>
            <Image
              src="https://via.placeholder.com/18x18"
              alt="IconStatistics"
            />
            <Text>Statistics</Text>
          </NavStyled>
        </StyledLink>
        <Balance />
      </Nav>
      <DivMob>
        <StyledLinkMob to="/home">
          <img src="https://via.placeholder.com/38x38" alt="" />
        </StyledLinkMob>
        <StyledLinkMob to="/diagram">
          <img src="https://via.placeholder.com/38x38" alt="" />
        </StyledLinkMob>
        <StyledLinkMob to="/currency">
          <img src="https://via.placeholder.com/38x38" alt="" />
        </StyledLinkMob>
      </DivMob>
      <Outlet/>
    </>
  );
};
