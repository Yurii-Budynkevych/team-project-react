import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from '../../redux/Auth/authSelectors';
import { useSelector } from 'react-redux';

export const PrivateRoute = ({ component:Component }) => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return isLoggedIn ? Component : <Navigate to={'/'} />;
};
