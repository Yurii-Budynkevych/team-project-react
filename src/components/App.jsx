import { Layout } from 'pages/layout/Layout';
import LoginPage from 'pages/loginPage/Login';
import RegisterPage from 'pages/registerPage/Register';
import { selectIsToken, selectIsRefreshing } from '../redux/Auth/authSelectors';
import { PublicRoute } from '../utils/routes/PublicRoute';
import { PrivateRoute } from '../utils/routes/PrivateRoute';
import HomePage from './HomePage/HomePage';
import ErrorPathPage from './ErrorPathPage/ErrorPathPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { refresh } from 'redux/Auth/authOperations';

export const App = () => {
  const isToken = useSelector(selectIsToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

  useEffect(() => {
    isToken && dispatch(refresh());
  }, [dispatch, isToken]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="home"
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            />

          </Route>
          <Route
            path="login"
            element={
              <PublicRoute redirectTo="/home" component={<LoginPage />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute redirectTo="/home" component={<RegisterPage />} />
            }
          />

          <Route
            path="*"
            element={
              <PublicRoute>
                <ErrorPathPage />
              </PublicRoute>
            }
          />
        </Routes>
      )}
    </>
  );
};
