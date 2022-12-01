import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import { Formik, Form, Field } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import css from './ModalAddTransaction.module.css';
import { addTransaction } from '../../../redux/Transactions/transactionsOperations';
import {
  FormikDateTime,
  CURRENT_DATE,
} from './TransactionUtils/FormikDatetime';
import Categories from './Categories/Categories';
import ExpanseValidationSchema from './TransactionUtils/Validation/ExpanseValidationSchema';
import IncomeValidationSchema from './TransactionUtils/Validation/IncomeValidationSchema';
import notify from './TransactionUtils/notify';
import { getTransactions } from '../../../redux/Transactions/transactionsOperations';

export default function ModalAddTransaction({ showModalToggle }) {
  const [currentType, setCurrentType] = useState('EXPENSE');
  const dispatch = useDispatch();

  const hanleKeyDown = event => {
    if (event.code === 'Escape') {
      showModalToggle();
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', hanleKeyDown);
    return () => {
      document.removeEventListener('keydown', hanleKeyDown);
    };
    //eslint-disable-next-line
  }, []);

  return (
    <div
      className={css.backdrop}
      onClick={event => {
        event.currentTarget === event.target && showModalToggle();
      }}
    >
      <div className={css.modal}>
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
            setTimeout(function () {
              dispatch(getTransactions());
            }, 250);
            setSubmitting(false);
            showModalToggle();
          }}
        >
          {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
            <Form className={css.form}>
              <div className={css.wrapper}>
                <label>
                  Income
                  <Field
                    className={css.field}
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
                    className={css.field}
                    type="radio"
                    name="type"
                    value="EXPENSE"
                    onClick={() => {
                      setCurrentType('EXPENSE');
                    }}
                  />
                  Expense
                </label>
              </div>
              {values.type === 'EXPENSE' && (
                <Field
                  className={css.field}
                  name="categoryId"
                  value={values.categoryId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={Categories}
                />
              )}
              <div className={css.wrapper}>
                <Field
                  className={css.field}
                  type="amount"
                  name="amount"
                  min="0"
                  placeholder="0.00"
                  value={values.amount}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <Field
                  className={css.field}
                  name="transactionDate"
                  timeFormat={false}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={FormikDateTime}
                />
              </div>
              <Field
                className={css.field}
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
                className={css.add}
                type="submit"
                disabled={isSubmitting}
                onClick={() => {
                  notify(errors, values, currentType);
                }}
              >
                ADD
              </button>
              <button
                className={css.cancel}
                type="button"
                onClick={() => {
                  showModalToggle();
                }}
              >
                CANCEL
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer />
        <button
          className={css.close}
          type="button"
          onClick={() => {
            showModalToggle();
          }}
        >
          X
        </button>
      </div>
    </div>
  );
}
