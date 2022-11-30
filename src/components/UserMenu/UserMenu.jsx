import { Box } from 'components/Box/Box';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/Auth/authOperations';
import { selectUsername } from 'redux/Auth/authSelectors';
import { Btn, Name } from './UserMenu.styled';

export const UserMenu = () => {
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
        Exit
      </Btn>
    </Box>
  );
};
