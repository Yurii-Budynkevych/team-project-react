import { Title, Wrapper, Img } from './InvitBox.styled';
import imageDesk from '../../img/login1x.png';
import imageTab from '../../img/login1xtab.png';
import { useMediaQuery } from 'react-responsive';

export const InvitBox = () => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1279px)' });

  return (
    <Wrapper>
      <Img src={isMobileOrTablet ? imageTab : imageDesk} alt="man" />
      <Title>Finance App</Title>
    </Wrapper>
  );
};
