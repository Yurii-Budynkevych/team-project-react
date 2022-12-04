import React from 'react';
import Media from 'react-media';
import { Box } from 'components/Box/Box';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { Navigation } from '../../components/Navigation/Navigation';
import { selectIsModalAddTransactionOpen } from '../../redux/Transactions/transactionsSelectors';
import { selectIsModalOpen } from '../../redux/Modal/modalSelectors';
import { ModalExit } from '../../components/ModalExit/ModalExit';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );
  const modalStatus = useSelector(selectIsModalOpen);

  return (
    <>
      <Box as="header" top="0" width="100%" py={5}>
        <Box px={4} display="flex" justifyContent="space-between">
          <Logo />
          {isLoggedIn && <UserMenu />}
        </Box>
      </Box>

      {isModalAddTransactionOpen ? (
        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches => <>{!matches.small && <Navigation />}</>}
        </Media>
      ) : (
        <Navigation />
      )}

      {modalStatus && <ModalExit />}
    </>
  );
};
