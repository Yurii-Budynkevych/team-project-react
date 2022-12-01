import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

import TransactionTableRow from './TransactionTableRow';
import { selectTransactions } from '../../redux/Transactions/transactionsSelectors';
import { getTransactions } from '../../redux/Transactions/transactionsOperations';
import css from './HomePage.module.css';

export default function HomePage() {
  const dispatch = useDispatch();
  const transactions = useSelector(selectTransactions);
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
      <div>
        <h1 className={css.title}>NAVIGATION</h1>
        <h1>BALANCE</h1>
        <h1>CURRENCY</h1>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Type</th>
            <th>Category</th>
            <th>Comment</th>
            <th>Sum</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <TransactionTableRow
              key={transaction.id}
              transaction={transaction}
            />
          ))}
        </tbody>
      </table>
      <button
        className={css.modalButton}
        type="button"
        onClick={() => {
          showModalToggle();
        }}
      >
        ADD TRANSACTION
      </button>
      {isModalAddTransactionOpen && (
        <ModalAddTransaction showModalToggle={showModalToggle} />
      )}
    </section>
  );
}
