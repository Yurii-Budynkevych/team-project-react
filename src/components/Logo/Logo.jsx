import LogoImage from '../../img/Logo.svg';
import { Image, Text, LogoStyled, StyledLink } from './Logo.styled';

export const Logo = () => {
  return (
    <StyledLink to="/register">
      <LogoStyled>
        <Image src={LogoImage} alt="Logo" />
        <Text>Wallet</Text>
      </LogoStyled>
    </StyledLink>
  );
};
