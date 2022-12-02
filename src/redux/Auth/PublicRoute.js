import { selectIsLoggedIn } from './authSelectors';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export default function PublicRoute({ children }) {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  
  return isLoggedIn ? <Navigate to={'/'} /> : children;
}
