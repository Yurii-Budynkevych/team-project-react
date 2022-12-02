import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Btn,
  ErrBox,
  Image,
  StyledForm,
  // StyledIconMan,
  // StyledIconPW,
  StyledInput,
  StyledLable,
  StyledLink,
  StyledWrapper,
  Title,
} from './LoginForm.styled';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/Auth/authOperations';
import LogoImage from '../../img/Logo.svg';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string().required('*Password required'),
});

const initialValues = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    dispatch(logIn(values));
    actions.resetForm();
    actions.setSubmitting(false);
  };

  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <>
          <Title>
            <Image src={LogoImage} alt="wallet" />
            Wallet
          </Title>
          <StyledForm onSubmit={handleSubmit}>
            <StyledWrapper>
              <StyledLable>
                <StyledInput
                  type="email"
                  name="email"
                  placeholder="E-mail"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                  className={touched.email && errors.email ? 'error' : null}
                />
              </StyledLable>
              {touched.email && errors.email ? (
                <ErrBox>{errors.email}</ErrBox>
              ) : null}
            </StyledWrapper>
            <StyledWrapper>
              <StyledLable>
                <StyledInput
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                  className={
                    touched.password && errors.password ? 'error' : null
                  }
                />
              </StyledLable>

              {touched.password && errors.password ? (
                <ErrBox>{errors.password}</ErrBox>
              ) : null}
            </StyledWrapper>
            <Btn type="submit" disabled={isSubmitting}>
              Log in
            </Btn>
            <StyledLink to="/register">Register</StyledLink>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};
