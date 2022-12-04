import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';
import {
  selectIsSaveRoute,
  selectIsLoggedIn,
  selectIsHomePage,
} from '../../redux/Auth/authSelectors';

export const SaveRoute = ({ home, login, statistics }) => {
  const isSaveRoute = useSelector(selectIsSaveRoute);
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isHomePage = useSelector(selectIsHomePage);
  if (!isLoggedIn) return <Navigate to={login} />;
  if (isLoggedIn && isSaveRoute && isHomePage) {
    return <Navigate to={home} />;
  } else {
    return <Navigate to={statistics} />;
  }


};
