import ModalAddTransaction from './ModalAddTransaction/ModalAddTransaction';

export default function HomePage() {
  return (
    <>
      <div>
        <h1>NAVIGATION</h1>
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
          <tr>
            <td>1</td>
            <td>2</td>
            <td>3</td>
            <td>4</td>
            <td>5</td>
            <td>6</td>
          </tr>
        </tbody>
      </table>
      <button type="button"> + </button>
      <ModalAddTransaction />
    </>
  );
}
