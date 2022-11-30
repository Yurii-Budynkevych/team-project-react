import * as Yup from 'yup';
import parseDateString from '../parseDateString';

export const ExpanseValidationSchema = Yup.object().shape({
  categoryId: Yup.string().required('Required'),
  amount: Yup.number().max(0).required('Required'),
  type: Yup.string().required('Required'),
  transactionDate: Yup.date()
    .transform(parseDateString)
    .max(new Date())
    .required('Required'),
  comment: Yup.string(),
});

export default ExpanseValidationSchema;
