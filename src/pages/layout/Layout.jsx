import React from 'react';
import Media from 'react-media';
import { Box } from 'components/Box/Box';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/Auth/authSelectors';
import { Logo } from 'components/Logo/Logo';
import { Outlet } from 'react-router-dom';
import { Navigation } from '../../components/Navigation/Navigation';
import { selectIsModalAddTransactionOpen } from '../../redux/Transactions/transactionsSelectors';

export const Layout = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );

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

      <Outlet />
    </>
  );
};
