import { InvitBox } from '../../components/InvitBox/InvitBox';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Elipse1, Elipse2 } from './Register.styled';
import { Section } from '../../components/Section/Section';
import elipseB from '../../img/ellipse1.png';
import elipseR from '../../img/ellipse2.png';
import { useMediaQuery } from 'react-responsive';

export default function RegisterPage() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <Section>
      {!isMobile && <Elipse2 src={elipseR} alt="elipse" />}
      {!isMobile && <InvitBox />}
      <RegisterForm />
      {!isMobile && <Elipse1 src={elipseB} alt="elipse" />}
    </Section>
  );
}
