import { selectIsLoggedIn } from '../../redux/Auth/authSelectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const PublicRoute = ({
  component: Component,
  redirectTo = '/',
  restricted,
}) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const shouldRedirected = restricted && isLoggedIn;
  return shouldRedirected ? <Navigate to={redirectTo} /> : Component;
};
