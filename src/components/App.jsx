import { Layout } from 'pages/layout/Layout';
import LoginPage from 'pages/loginPage/Login';
import RegisterPage from 'pages/registerPage/Register';
import { selectIsLoggedIn } from '../redux/Auth/authSelectors';
import PrivateRoute from '../redux/Auth/PrivateRoute';
import PublicRoute from '../redux/Auth/PublicRoute';
import HomePage from './HomePage/HomePage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { refresh } from 'redux/Auth/authOperations';

export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <Routes>
      <Route
        path="/"
        element={
          isLoggedIn ? (
            <Navigate to={'/homePage'} />
          ) : (
            <Navigate to={'/login'} />
          )
        }
      />
      <Route
        path="login"
        element={
          <PublicRoute>
            <LoginPage />
          </PublicRoute>
        }
      />
      <Route
        path="register"
        element={
          <PublicRoute>
            <RegisterPage />
          </PublicRoute>
        }
      />
      <Route
        path="homePage"
        element={
          <PrivateRoute>
            <Layout />
            <HomePage />
          </PrivateRoute>
        }
      />
      {/* <Route
        path="statisticsPage"
        element={
          <PrivateRoute>
            <Layout />
            <StatisticsPage />
          </PrivateRoute>
        }
      /> */}
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};
