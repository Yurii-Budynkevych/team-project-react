import { Title, StyledLink, Container } from './ErrorPathPage.styled';

const ErrorPathPage = () => {
  return (
    <Container>
      <Title>Sorry something went wrong</Title>
      <StyledLink to="/">Go back</StyledLink>
    </Container>
  );
};
export default ErrorPathPage;
