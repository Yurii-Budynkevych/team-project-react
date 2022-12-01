import CategoryName from './CategoryName';

export default function TransactionTableRow({ transaction }) {
  const { transactionDate, type, categoryId, comment, amount, balanceAfter } =
    transaction;
  return (
    <tr>
      <td>{transactionDate}</td>
      <td>{type}</td>
      <td>{<CategoryName categoryId={categoryId} />}</td>
      <td>{comment}</td>
      <td>{amount}</td>
      <td>{balanceAfter}</td>
    </tr>
  );
}
