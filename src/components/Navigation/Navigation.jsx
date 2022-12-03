import { Balance } from 'components/Balance/Balance';
import { Outlet } from 'react-router-dom';
import home from '../../img/IconHome.svg';
import statistics from '../../img/IconStatistics.svg';
import homeMob from '../../img/IconHomeMobile.svg';
import statisticsMob from '../../img/IconStatisticsMobile.svg';
import currencyMob from '../../img/IconCurrencyMobile.svg';
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
        <StyledLink to="/">
          <NavStyled>
            <Image src={home} alt="IconHome" />
            <Text>Home</Text>
          </NavStyled>
        </StyledLink>
        <StyledLink to="statistics">
          <NavStyled>
            <Image src={statistics} alt="IconStatistics" />
            <Text>Statistics</Text>
          </NavStyled>
        </StyledLink>
      </Nav>
      <Balance />
      <DivMob>
        <StyledLinkMob to="/">
          <img src={homeMob} alt="" />
        </StyledLinkMob>
        <StyledLinkMob to="/diagram">
          <img src={statisticsMob} alt="" />
        </StyledLinkMob>
        <StyledLinkMob to="/currency">
          <img src={currencyMob} alt="" />
        </StyledLinkMob>
      </DivMob>
      <Outlet />
    </>
  );
};
