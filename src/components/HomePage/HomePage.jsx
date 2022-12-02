import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';
import { useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import css from './HomePage.module.css';
import { getTransactions } from '../../redux/Transactions/transactionsOperations';
import HomeTab from './HomeTab/HomeTab';

export default function HomePage() {
  const dispatch = useDispatch();

  const [isModalAddTransactionOpen, setIsModalAddTransactionOpen] =
    useState(false);

  const showModalToggle = () => {
    setIsModalAddTransactionOpen(!isModalAddTransactionOpen);
  };

  useEffect(() => {
    dispatch(getTransactions());
  }, [dispatch]);
  return (
    <section className={css.section}>
      <div className={css.leftSide}>
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
        +
      </button>
      {isModalAddTransactionOpen && (
        <ModalAddTransaction showModalToggle={showModalToggle} />
      )}
    </section>
  );
}
