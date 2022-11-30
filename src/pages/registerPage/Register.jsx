import { Box } from 'components/Box/Box';
import { RegisterForm } from 'components/RegisterForm/RegisterForm';

export default function RegisterPage() {
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
        <RegisterForm />
      </Box>
    </Box>
  );
}
