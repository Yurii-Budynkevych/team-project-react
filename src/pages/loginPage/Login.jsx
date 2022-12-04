import { useMediaQuery } from 'react-responsive';
import { LoginForm } from '../../components/LoginForm/LoginForm';
import { Section } from '../../components/Section/Section';
import { InvitBox } from '../../components/InvitBox/InvitBox';
import { Elipse1, Elipse2 } from './loginPage.styled';
import elipseR from '../../img/ellipse2.png';
import elipseB from '../../img/ellipse1.png';

export default function LoginPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Section>
      {!isMobile && <Elipse2 src={elipseR} alt="elipse" />}
      {!isMobile && <InvitBox page="login" />}
      <LoginForm />
      {!isMobile && <Elipse1 src={elipseB} alt="elipse" />}
    </Section>
  );
}
