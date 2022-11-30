import * as Yup from 'yup';
import parseDateString from '../parseDateString';

export const IncomeValidationSchema = Yup.object().shape({
  amount: Yup.number().min(0).required('Required'),
  type: Yup.string().required('Required'),
  transactionDate: Yup.date()
    .transform(parseDateString)
    .max(new Date())
    .required('Required'),
  comment: Yup.string(),
});

export default IncomeValidationSchema;
