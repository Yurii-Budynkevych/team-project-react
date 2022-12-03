import {  useSelector } from 'react-redux';
import LogoImage from '../../img/Logo.svg';
import { Image, Text, LogoStyled, StyledLink } from './Logo.styled';
import {selectIsLoggedIn} from '../../redux/Auth/authSelectors'

export const Logo = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <StyledLink to={isLoggedIn?"/":"/register"}>
      <LogoStyled>
        <Image src={LogoImage} alt="Logo" />
        <Text>Wallet</Text>
      </LogoStyled>
    </StyledLink>
  );
};
