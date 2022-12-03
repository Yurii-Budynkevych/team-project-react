import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes, Navigate } from 'react-router-dom';
import { PublicRoute } from '../utils/routes/PublicRoute';
import { PrivateRoute } from '../utils/routes/PrivateRoute';
import { Layout } from 'pages/layout/Layout';
import LoginPage from 'pages/loginPage/Login';
import RegisterPage from 'pages/registerPage/Register';
import HomePage from './HomePage/HomePage';
import { DiagramTab } from './DiagramTab/DiagramTab';
import ErrorPathPage from './ErrorPathPage/ErrorPathPage';
import { refresh } from 'redux/Auth/authOperations';
import {
  selectIsSaveRoute,
  selectIsRefreshing,
  selectIsLoggedIn,
} from '../redux/Auth/authSelectors';

export const App = () => {
  const isSaveRoute = useSelector(selectIsSaveRoute);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    dispatch(refresh());
  }, [dispatch]);

  return (
    <>
      {!isRefreshing && (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              index
              element={
                isLoggedIn ? <Navigate to="/home" /> : <Navigate to="/login" />
              }
            />

            <Route
              path="home"
              element={
                <PrivateRoute redirectTo="/login" component={<HomePage />} />
              }
            />
            <Route
              path="statistics"
              element={
                <PrivateRoute redirectTo="/login" component={<DiagramTab />} />
              }
            />
          </Route>
          <Route
            path="login"
            element={
              <PrivateRoute redirectTo="/home" component={<HomePage />} />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/"
                component={<RegisterPage />}
                restricted
              />
            }
          />

          <Route
            path="login"
            element={
              <PublicRoute
                redirectTo={isSaveRoute ? '/statistics' : '/home'}
                component={<LoginPage />}
              />
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
