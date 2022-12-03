import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsSaveRoute,
  selectIsLoggedIn,
} from '../../redux/Auth/authSelectors';

export const SaveRoute = ({ home, login, statistics }) => {
  const isSaveRoute = useSelector(selectIsSaveRoute);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  console.log(isSaveRoute);
  if (!isLoggedIn) return <Navigate to={login} />;
  if (isLoggedIn && isSaveRoute) return <Navigate to={statistics} />;

  if (isLoggedIn) return <Navigate to={home} />;
};
