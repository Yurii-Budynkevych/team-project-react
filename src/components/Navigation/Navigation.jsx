import { Balance } from 'components/Balance/Balance';
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
  ImageMob,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <Nav>
        <StyledLink to="home">
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
        <Balance />
      </Nav>

      <DivMob>
        <StyledLinkMob to="home">
          <ImageMob src={homeMob} alt="" />
        </StyledLinkMob>
        <StyledLinkMob to="statistics">
          <ImageMob src={statisticsMob} alt="" />
        </StyledLinkMob>
        <StyledLinkMob to="currency">
          <ImageMob src={currencyMob} alt="" />
        </StyledLinkMob>
      </DivMob>
    </>
  );
};
