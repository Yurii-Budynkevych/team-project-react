import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import 'react-datetime/css/react-datetime.css';
import { Formik, Form, Field } from 'formik';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Media from 'react-media';
import { createPortal } from 'react-dom';

import css from './ModalAddTransaction.module.css';
import { Layout } from '../../pages/layout/Layout';
import close from '../../img/close.svg';
import {
  addTransaction,
  showModalToggle,
} from '../../redux/Transactions/transactionsOperations';
import {
  FormikDateTime,
  CURRENT_DATE,
} from './TransactionUtils/FormikDatetime';
import Categories from './TransactionUtils/Categories/Categories';
import ExpanseValidationSchema from './TransactionUtils/Validation/ExpanseValidationSchema';
import IncomeValidationSchema from './TransactionUtils/Validation/IncomeValidationSchema';
import notify from './TransactionUtils/notify';
import { getTransactions } from '../../redux/Transactions/transactionsOperations';
import incomeType from '../../img/transaction-modal-open.svg';
import expenseType from '../../img/expense-type.svg';

const modalRoot = document.querySelector('#modal-root');

export default function ModalAddTransaction() {
  const [currentType, setCurrentType] = useState('EXPENSE');
  const dispatch = useDispatch();

  const hanleKeyDown = event => {
    if (event.code === 'Escape') {
      dispatch(showModalToggle());
    }
  };
  useEffect(() => {
    document.addEventListener('keydown', hanleKeyDown);
    return () => {
      document.removeEventListener('keydown', hanleKeyDown);
    };
    //eslint-disable-next-line
  }, []);

  return createPortal(
    <div
      className={css.backdrop}
      onClick={event => {
        event.currentTarget === event.target && dispatch(showModalToggle());
      }}
    >
      <div className={css.modal}>
        <Media
          queries={{
            small: '(max-width: 767px)',
          }}
        >
          {matches => <>{matches.small && <Layout />}</>}
        </Media>
        <h1 className={css.title}>Add transaction</h1>
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
                amount:
                  currentType === 'INCOME' ? values.amount : values.amount * -1,
                comment: values.comment,
                type: values.type,
                transactionDate: values.transactionDate,
              })
            );
            setTimeout(function () {
              dispatch(getTransactions());
            }, 250);
            setSubmitting(false);
            dispatch(showModalToggle());
          }}
        >
          {({ values, errors, handleChange, handleBlur, isSubmitting }) => (
            <Form className={css.form}>
              {/* Type switcher beginning */}

              <div className={css.switcherWrapper}>
                <label
                  className={
                    values.type === 'EXPENSE'
                      ? css.typeLabel
                      : css.currentIncomeLabel
                  }
                >
                  Income
                  <Field
                    className={css.income}
                    type="radio"
                    name="type"
                    value="INCOME"
                    onClick={() => {
                      setCurrentType('INCOME');
                    }}
                  />
                  {values.type === 'EXPENSE' && (
                    <div className={css.switcerContainer}>
                      <img
                        className={css.imgExpanse}
                        src={expenseType}
                        alt=""
                      />
                    </div>
                  )}
                </label>
                <label
                  className={
                    values.type === 'INCOME'
                      ? css.typeLabel
                      : css.currentExpenceLabel
                  }
                >
                  {values.type === 'INCOME' && (
                    <div className={css.switcerContainer}>
                      <img className={css.imgIncome} src={incomeType} alt="" />
                    </div>
                  )}
                  <Field
                    className={css.expense}
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

              {/* Type switcher ending */}

              {/* {show/hide categories logic} */}
              {values.type === 'EXPENSE' && (
                <Field
                  name="categoryId"
                  value={values.categoryId}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  component={Categories}
                />
              )}

              {/* {amount and date inputs} */}
              <div className={css.amountDateWrapper}>
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
                placeholder="Comment"
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              {/* {"add" and "cancel" buttons} */}
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
                  dispatch(showModalToggle());
                }}
              >
                CANCEL
              </button>
            </Form>
          )}
        </Formik>
        <ToastContainer />
        <button
          className={css.closeModal}
          type="button"
          onClick={() => {
            dispatch(showModalToggle());
          }}
        >
          <img src={close} alt="close" />
        </button>
      </div>
    </div>,
    modalRoot
  );
}
