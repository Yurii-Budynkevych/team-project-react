import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import css from '../../ModalAddTransaction.module.css';

import Category from './Category';
import { selectCategories } from '../../../../redux/Transactions/transactionsSelectors';
import { getCategories } from '../../../../redux/Transactions/transactionsOperations';

export default function Categories({ field, form }) {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const onFieldChange = value => {
    form.setFieldValue(field.name, value.target.value);
  };

  const onFieldBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <select
      className={field.value === '' ? css.defaultSelect : css.categorySelect}
      id={field.name}
      name={field.name}
      onChange={onFieldChange}
      onBlur={onFieldBlur}
      defaultValue="Select a category"
    >
      <option value="Select a category" disabled>
        Select a category
      </option>
      {categories.map(category => (
        <Category key={category.id} category={category} />
      ))}
    </select>
  );
}
