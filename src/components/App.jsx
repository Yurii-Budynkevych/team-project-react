import { Layout } from 'pages/layout/Layout';
import LoginPage from 'pages/loginPage/Login';
import RegisterPage from 'pages/registerPage/Register';
import {
  selectIsToken,
  selectIsRefreshing,
  selectIsLoggedIn,
} from '../redux/Auth/authSelectors';
import { PublicRoute } from '../utils/routes/PublicRoute';
import { PrivateRoute } from '../utils/routes/PrivateRoute';
import HomePage from './HomePage/HomePage';
import ErrorPathPage from './ErrorPathPage/ErrorPathPage';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes,Navigate } from 'react-router-dom';
import { refresh } from 'redux/Auth/authOperations';
import { DiagramTab } from './DiagramTab/DiagramTab';


export const App = () => {
  const isToken = useSelector(selectIsToken);
  const isRefreshing = useSelector(selectIsRefreshing);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);

  useEffect(() => {
    isToken && dispatch(refresh());
  }, [dispatch, isToken]);

  return (
    <>
      
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={isLoggedIn? <Navigate to='/home'/>: <Navigate to='/login'/>}/>

              <Route
                path='home'
                element={
                  <PrivateRoute redirectTo="/login" component={<HomePage />} />
                }
              />
              <Route
                path="statistics"
                element={
                  <PrivateRoute
                    redirectTo="/login"
                    component={<DiagramTab />}
                  />
                }
              />
            </Route>
            <Route
              path="login"
              element={
                <PublicRoute
                  redirectTo="/"
                  component={<LoginPage />}
                  restricted
                />
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
              path="*"
              element={
                <PublicRoute>
                  <ErrorPathPage />
                </PublicRoute>
              }
            />

        </Routes>
      
    </>
  );
};
