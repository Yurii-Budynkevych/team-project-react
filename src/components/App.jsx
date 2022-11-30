import { Layout } from 'pages/layout/Layout';
import LoginPage from 'pages/loginPage/Login';
import RegisterPage from 'pages/registerPage/Register';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refresh } from 'redux/Auth/authOperations';

export const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route path="login" element={<LoginPage />} />
      <Route path="register" element={<RegisterPage />} />
    </Routes>
  );
};
