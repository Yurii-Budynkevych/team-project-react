import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Btn,
  ErrBox,
  Icon,
  Image,
  StyledForm,
  StyledInput,
  StyledLable,
  StyledLink,
  StyledWrapper,
  Title,
  FormContainer,
  ConfirmPassErrBar,
  ConfirmPassOkBar,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import LogoImage from '../../img/Logo.svg';
import Envelope from '../../img/baseline-email-24px 1.svg';
import Lock from '../../img/baseline-lock-24px 1.svg';
import Person from '../../img/baseline-account_box-24px 1.svg';
import PasswordStrengthBar from 'react-password-strength-bar';

const nameRegExp = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .matches(
      nameRegExp,
      "*Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .min(3, '*Names must have at least 3 characters')
    .max(40, "*Names can't be longer than 40 characters")
    .required('*Name is required'),
  email: Yup.string()
    .email('*Must be a valid email address')
    .max(100, '*Email must be less than 100 characters')
    .required('*Email is required'),
  password: Yup.string()
    .min(6, '*Password must have at least 6 characters')
    .max(12, "*Password can't be longer than 12 characters")
    .required('*Password required'),
  cpassword: Yup.string()
    .required('Confirm Password is required')
    .min(4, '*Password must have at least 6 characters')
    .max(12, "*Password can't be longer than 12 characters")
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
  cpassword: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    const { username, email, password } = values;
    actions.setSubmitting(true);
    dispatch(register(values));
    dispatch(register({ username, email, password }));
    actions.resetForm();
    actions.setSubmitting(false);
  };

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
        <FormContainer>
          <StyledForm onSubmit={handleSubmit}>
            <Title>
              <Image src={LogoImage} alt="wallet" />
              Wallet
            </Title>
            <StyledWrapper>
              <Icon src={Envelope} alt="envelop" />
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
              <Icon src={Lock} alt="lock" />
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
              <PasswordStrengthBar
                shortScoreWord={''}
                password={values.password}
              />
              {touched.password && errors.password ? (
                <ErrBox>{errors.password}</ErrBox>
              ) : null}
            </StyledWrapper>

            <StyledWrapper>
              <Icon src={Lock} alt="lock" />
              <StyledLable>
                <StyledInput
                  type="password"
                  name="cpassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.cpassword}
                  // className={
                  //   touched.cpassword && errors.cpassword ? 'error' : null
                  // }
                />
              </StyledLable>

              {touched.cpassword && errors.cpassword ? (
                <ConfirmPassErrBar />
              ) : (
                <ConfirmPassOkBar />
              )}
            </StyledWrapper>

            <StyledWrapper>
              <Icon src={Person} alt="person" />
              <StyledLable>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="First name"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.username}
                  className={
                    touched.username && errors.username ? 'error' : null
                  }
                />
              </StyledLable>

              {touched.username && errors.username ? (
                <ErrBox>{errors.username}</ErrBox>
              ) : null}
            </StyledWrapper>

            <Btn type="submit" disabled={isSubmitting}>
              Register
            </Btn>
            <StyledLink to="/login">Login</StyledLink>
          </StyledForm>
        </FormContainer>
      )}
    </Formik>
  );
};
