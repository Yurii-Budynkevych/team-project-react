import { toast } from 'react-toastify';

export default function notify(errors, values, currentType) {
  if (values.amount === '' || errors.amount) {
    toast(
      "You need to enter the amount of the transaction. It's must be a number"
    );
  } else if (values.transactionDate === '' || errors.transactionDate) {
    toast(
      "You need to enter the date of the transaction. It's must be a date in format YYYY.MM.DD and no later than today"
    );
  } else if (values.categoryId === '' && currentType === 'EXPENSE') {
    toast('You need to choose category of the transaction');
  }
}
