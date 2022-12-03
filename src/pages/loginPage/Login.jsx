import { Box } from '../../components/Box/Box';
import { LoginForm } from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <Box
      as="section"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flexDirection="column"
      pt="150px"
    >
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column"
      >
        <LoginForm />
      </Box>
    </Box>
  );
}
