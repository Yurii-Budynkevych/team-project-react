import React from 'react';
import { Box } from 'components/Box/Box';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from '../../components/Navigation/Navigation';
import { selectIsModalOpen } from '../../redux/Modal/modalSelectors';
import { ModalExit } from '../../components/ModalExit/ModalExit';
import { useMediaQuery } from 'react-responsive';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const modalStatus = useSelector(selectIsModalOpen);
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      <Box
        as="header"
        top="0"
        width="100%"
        py={`${isMobile ? '15px' : '20px'}`}
      >
        <Box px={4} display="flex" justifyContent="space-between">
          <Logo />
          {isLoggedIn && <UserMenu />}
        </Box>
      </Box>
      <Navigation />

      {modalStatus && <ModalExit />}
    </>
  );
};
