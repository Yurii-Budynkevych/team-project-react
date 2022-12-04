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
