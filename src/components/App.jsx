import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { PublicRoute } from '../utils/routes/PublicRoute';
import { PrivateRoute } from '../utils/routes/PrivateRoute';
import { SaveRoute } from '../utils/routes/SaveRoute';
import { Layout } from 'pages/layout/Layout';
import LoginPage from 'pages/loginPage/Login';
import RegisterPage from 'pages/registerPage/Register';
import HomePage from '../pages/HomePage/HomePage';
import DiagramTab from './DiagramTab/DiagramTab';
import Currency from './Currency/Currency';
import ErrorPathPage from './ErrorPathPage/ErrorPathPage';
import { refresh } from 'redux/Auth/authOperations';
import { selectIsRefreshing } from '../redux/Auth/authSelectors';

export const App = () => {
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();

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
                <SaveRoute home="home" login="login" statistics="statistics" />
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
            <Route
              path="currency"
              element={
                <PrivateRoute redirectTo="/login" component={<Currency />} />
              }
            />
          </Route>

          <Route
            path="login"
            element={
              <PublicRoute
                redirectTo="/home"
                component={<LoginPage />}
                restricted
              />
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute
                redirectTo="/home"
                component={<RegisterPage />}
                restricted
              />
            }
          />

          <Route path="*" element={<ErrorPathPage />} />
        </Routes>
      )}
    </>
  );
};
