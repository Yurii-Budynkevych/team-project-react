import Media from 'react-media';
import { Outlet } from 'react-router-dom';
import { Balance } from 'components/Balance/Balance';
import home from '../../img/IconHome.svg';
import statistics from '../../img/IconStatistics.svg';
import homeMob from '../../img/IconHomeMobile.svg';
import statisticsMob from '../../img/IconStatisticsMobile.svg';
import currencyMob from '../../img/IconCurrencyMobile.svg';
import Currency from '../Currency/Currency';
import {
  Wrapper,
  DivMob,
  Image,
  Nav,
  NavStyled,
  StyledLink,
  StyledLinkMob,
  Text,
  ImageMob,
  MainDiv,
} from './Navigation.styled';

export const Navigation = () => {
  return (
    <Wrapper>
      <Media
        queries={{
          small: '(max-width: 767px)',
        }}
      >
        {matches => (
          <>
            {matches.small ? (
              <DivMob>
                <StyledLinkMob to="home">
                  <ImageMob src={homeMob} alt="home" />
                </StyledLinkMob>
                <StyledLinkMob to="statistics">
                  <ImageMob src={statisticsMob} alt="statistic" />
                </StyledLinkMob>
                <StyledLinkMob to="currency">
                  <ImageMob src={currencyMob} alt="urrency" />
                </StyledLinkMob>
                <Balance />
              </DivMob>
            ) : (
              <MainDiv>
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
                  <Currency />
                </Nav>
              </MainDiv>
            )}
          </>
        )}
      </Media>
      <Outlet />
    </Wrapper>
  );
};
