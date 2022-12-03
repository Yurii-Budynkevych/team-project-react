import ModalAddTransaction from '../../components/ModalAddTransaction/ModalAddTransaction';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { getTransactions } from '../../redux/Transactions/transactionsOperations';
import HomeTab from '../../components/HomeTab/HomeTab';
import { Navigation } from '../../components/Navigation/Navigation';
import addTransaction from '../../img/transaction-modal-open.svg';
import { createSaveRoute } from '../../redux/Auth/authSlice';
export default function HomePage() {
  const dispatch = useDispatch();

  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  const showModalToggle = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
    dispatch(createSaveRoute({ save: false }));
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  return (
    <>
      <section className={css.section}>
        <div className={css.leftSide}>
          <Navigation />
          <h1>CURRENCY</h1>
        </div>
        <div className={css.tableWrapper}>
          <HomeTab />
        </div>
        <button
          className={css.modalButton}
          type="button"
          onClick={() => {
            showModalToggle();
          }}
        >
          <img src={addTransaction} alt="Add Transaction" />
        </button>
        {isModalAddTransactionOpen && (
          <ModalAddTransaction showModalToggle={showModalToggle} />
        )}
      </section>
    </>
  );
}
