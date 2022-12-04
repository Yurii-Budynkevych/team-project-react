import { useSelector } from 'react-redux';
import { selectTransactions } from '../../redux/Transactions/transactionsSelectors';

import TransactionTableRow from './TransactionTableRow';
import css from '../../pages/HomePage/HomePage.module.css';

export default function HomeTab() {
  const transactions = useSelector(selectTransactions);

  return (
    <div className={css.tableWrapper}>
      <div className={css.tableHeaderWrapper}>
        <table className={css.table}>
          <thead>
            <tr className={css.tableHead}>
              <th className={css.thDate}>Date</th>
              <th className={css.thType}>Type</th>
              <th className={css.thCategory}>Category</th>
              <th className={css.thComment}>Comment</th>
              <th className={css.thSum}>Sum</th>
              <th className={css.thBalance}>Balance</th>
            </tr>
          </thead>
        </table>
      </div>
      <div className={css.tableRawsWrapper}>
        <table className={css.table}>
          <tbody>
            {transactions.map(transaction => (
              <TransactionTableRow
                key={transaction.id}
                transaction={transaction}
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
