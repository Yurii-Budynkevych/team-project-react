import { InvitBox } from '../../components/InvitBox/InvitBox';
import { LoginForm } from 'components/LoginForm/LoginForm';
import { Elipse1, Elipse2 } from './loginPage.styled';
import { Section } from '../../components/Section/Section';
import elipseB from '../../img/ellipse1.png';
import elipseR from '../../img/ellipse2.png';
import { useMediaQuery } from 'react-responsive';

export default function LoginPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Section>
      {!isMobile && <Elipse2 src={elipseR} alt="elipse" />}
      {!isMobile && <InvitBox />}
      <LoginForm />
      {!isMobile && <Elipse1 src={elipseB} alt="elipse" />}
    </Section>
  );
}
