import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  Btn,
  ErrBox,
  Image,
  StyledForm,
  // StyledIconEmail,
  // StyledIconMan,
  // StyledIconPW,
  StyledInput,
  StyledLable,
  StyledLink,
  StyledWrapper,
  Title,
} from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { register } from 'redux/Auth/authOperations';
import LogoImage from '../../img/Logo.svg';

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
    .max(12, "*Names can't be longer than 12 characters")
    .required('*Password required'),
});

const initialValues = {
  username: '',
  email: '',
  password: '',
};

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = (values, actions) => {
    actions.setSubmitting(true);
    dispatch(register(values));
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
        <>
          <Title>
            <Image src={LogoImage} alt="wallet" />
            Wallet
          </Title>
          <StyledForm onSubmit={handleSubmit}>
            <StyledWrapper>
              <StyledLable>
                <StyledInput
                  type="text"
                  name="username"
                  placeholder="Name"
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

              {touched.password && errors.emapasswordil ? (
                <ErrBox>{errors.password}</ErrBox>
              ) : null}
            </StyledWrapper>

            <Btn type="submit" disabled={isSubmitting}>
              Register
            </Btn>
            <StyledLink to="/login">Login</StyledLink>
          </StyledForm>
        </>
      )}
    </Formik>
  );
};
