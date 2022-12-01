import { Balance } from 'components/Balance/Balance';
import { Image, NavStyled, StyledLink, Text } from './Navigation.styled';

export const Navigation = () => {
  return (
    <nav>
      <StyledLink to="/home">
        <NavStyled>
          <Image src="https://via.placeholder.com/18x18" alt="IconHome" />
          <Text>Home</Text>
        </NavStyled>
      </StyledLink>
      <StyledLink to="/diagram">
        <NavStyled>
          <Image src="https://via.placeholder.com/18x18" alt="IconStatistics" />
          <Text>Statistics</Text>
        </NavStyled>
      </StyledLink>
      <Balance />
    </nav>
  );
};
