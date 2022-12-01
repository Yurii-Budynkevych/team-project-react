import { Navigate } from 'react-router-dom';
import { selectIsLoggedIn } from './authSelectors';
import { useSelector } from 'react-redux';

export default function PrivateRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  return isLoggedIn ? children : <Navigate to={'/'} />;
}
