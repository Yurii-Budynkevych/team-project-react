import { useMediaQuery } from 'react-responsive';
import { RegisterForm } from '../../components/RegisterForm/RegisterForm';
import { Section } from '../../components/Section/Section';
import { InvitBox } from '../../components/InvitBox/InvitBox';
import { Elipse1, Elipse2 } from './Register.styled';
import elipseR from '../../img/ellipse2.png';
import elipseB from '../../img/ellipse1.png';

export default function RegisterPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Section>
      {!isMobile && <Elipse2 src={elipseR} alt="elipse" />}
      {!isMobile && <InvitBox page="register" />}
      <RegisterForm />
      {!isMobile && <Elipse1 src={elipseB} alt="elipse" />}
    </Section>
  );
}
