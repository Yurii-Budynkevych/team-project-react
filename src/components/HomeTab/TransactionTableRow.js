import CategoryName from './CategoryName';
import css from '../../pages/HomePage/HomePage.module.css';

export default function TransactionTableRow({ transaction }) {
  const { transactionDate, type, categoryId, comment, amount, balanceAfter } =
    transaction;
  return (
    <tr className={css.tr}>
      <td className={css.td}>{`${new Date(transactionDate)
        .getDate()
        .toString()
        .padStart(2, '0')}.${(new Date(transactionDate).getMonth() + 1)
        .toString()
        .padStart(2, '0')}.${new Date(transactionDate)
        .getFullYear()
        .toString()
        .slice(2)}`}</td>
      <td className={css.td}>{type === 'INCOME' ? '+' : '-'}</td>
      <td className={css.td}>{<CategoryName categoryId={categoryId} />}</td>
      <td className={css.td}>{comment}</td>
      <td className={amount > 0 ? css.income : css.expence}>
        {amount < 0 ? amount * -1 : amount}
      </td>
      <td className={css.td}>{balanceAfter}</td>
    </tr>
  );
}
