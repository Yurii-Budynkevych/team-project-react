import { useState } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import { Formik, Form, Field } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { addTransaction } from '../../../redux/Transactions/transactionsOperations';
import { FormikDateTime, CURRENT_DATE } from './FormikDatetime';
import Categories from './Categories/Categories';
import ExpanseValidationSchema from './ExpanseValidationSchema';
import IncomeValidationSchema from './IncomeValidationSchema';
import notify from './notify';

export default function ModalAddTransaction() {
  const [currentType, setCurrentType] = useState('EXPENSE');
  const dispatch = useDispatch();

  return (
    <div>
      <h1>Add transaction</h1>
      <Formik
        initialValues={{
          categoryId: '',
          amount: '',
          comment: '',
          type: 'EXPENSE',
          transactionDate: CURRENT_DATE,
        }}
        validationSchema={
          currentType === 'EXPENSE'
            ? ExpanseValidationSchema
            : IncomeValidationSchema
        }
        onSubmit={(values, { setSubmitting }) => {
          dispatch(
            addTransaction({
              categoryId:
                currentType === 'INCOME'
                  ? '063f1132-ba5d-42b4-951d-44011ca46262'
                  : values.categoryId,
              amount: values.amount,
              comment: values.comment,
              type: values.type,
              transactionDate: values.transactionDate,
            })
          );
          setSubmitting(false);
        }}
      >
        {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
          <Form>
            <label>
              Income
              <Field
                type="radio"
                name="type"
                value="INCOME"
                onClick={() => {
                  setCurrentType('INCOME');
                }}
              />
            </label>
            <label>
              <Field
                type="radio"
                name="type"
                value="EXPENSE"
                onClick={() => {
                  setCurrentType('EXPENSE');
                }}
              />
              Expense
            </label>
            {values.type === 'EXPENSE' && (
              <Field
                name="categoryId"
                value={values.categoryId}
                onChange={handleChange}
                onBlur={handleBlur}
                component={Categories}
              />
            )}
            <Field
              type="amount"
              name="amount"
              min="0"
              placeholder="0.00"
              value={values.amount}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <Field
              name="transactionDate"
              timeFormat={false}
              onChange={handleChange}
              onBlur={handleBlur}
              component={FormikDateTime}
            />
            <Field
              as="textarea"
              name="comment"
              cols="30"
              rows="10"
              placeholder="Comment"
              value={values.comment}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <button
              type="submit"
              disabled={isSubmitting}
              onClick={() => {
                notify(errors, values, currentType);
              }}
            >
              ADD
            </button>
            <button type="button">CANCEL</button>
          </Form>
        )}
      </Formik>
      <ToastContainer />
    </div>
  );
}
