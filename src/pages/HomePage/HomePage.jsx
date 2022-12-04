import Media from 'react-media';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from './HomePage.module.css';

import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import {
  getTransactions,
  showModalToggle,
} from '../../redux/Transactions/transactionsOperations';
import HomeTab from '../../components/HomeTab/HomeTab';
import addTransaction from '../../img/transaction-modal-open.svg';
import { createSaveRoute, createIsHomePage } from '../../redux/Auth/authSlice';
import MobileHomeTab from '../../components/HomeTab/MobileHomeTab';
import {
  selectTransactions,
  selectIsModalAddTransactionOpen,
} from '../../redux/Transactions/transactionsSelectors';

export default function HomePage() {
  const isModalAddTransactionOpen = useSelector(
    selectIsModalAddTransactionOpen
  );
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);

  useEffect(() => {
    dispatch(createSaveRoute({ save: true }));
    dispatch(createIsHomePage({ isHome: true }));
    dispatch(getTransactions());
  }, [dispatch]);
  return (
    <>
      <section className={css.section}>
        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches => (
            <>
              {matches.small ? (
                <ul className={css.mobileHomeTab}>
                  {transactions.map(transaction => (
                    <MobileHomeTab
                      key={transaction.id}
                      transaction={transaction}
                    />
                  ))}
                </ul>
              ) : (
                <HomeTab />
              )}
            </>
          )}
        </Media>

        <button
          className={css.modalButton}
          type="button"
          onClick={() => {
            dispatch(showModalToggle());
          }}
        >
          <img src={addTransaction} alt="Add Transaction" />
        </button>
        {isModalAddTransactionOpen && <ModalAddTransaction />}
      </section>
    </>
  );
}
