import { Title, Wrapper, Img } from './InvitBox.styled';
import loginDesk from '../../img/login1x.png';
import loginTab from '../../img/login1xtab.png';
import regDesk from '../../img/reg1xdesk.png';
import regTab from '../../img/reg1xtab.png';
import { useMediaQuery } from 'react-responsive';

export const InvitBox = ({ page }) => {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 1279px)' });

  return (
    <Wrapper>
      {page === 'login' ? (
        <Img src={isMobileOrTablet ? loginTab : loginDesk} alt="man" />
      ) : (
        <Img src={isMobileOrTablet ? regTab : regDesk} alt="woman" />
      )}
      <Title>Finance App</Title>
    </Wrapper>
  );
};
