import { Box } from 'components/Box/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Auth/authOperations';
import exitSvg from '../../img/exit.svg';
import { selectUsername } from 'redux/Auth/authSelectors';
import { Btn, Name, Img } from './UserMenu.styled';
import { useMediaQuery } from 'react-responsive';

export const UserMenu = () => {
  const isTabOrDesk = useMediaQuery({ query: '(min-width: 768px)' });

  const dispatch = useDispatch();
  const name = useSelector(selectUsername);

  return (
    <Box display="flex" alignItems="center">
      <Name>{name}</Name>
      <Btn
        type="button"
        border="white"
        onClick={() => {
          dispatch(logout());
        }}
      >
        <Img src={exitSvg} alt="exit"></Img>
        {isTabOrDesk && 'Exit'}
      </Btn>
    </Box>
  );
};
