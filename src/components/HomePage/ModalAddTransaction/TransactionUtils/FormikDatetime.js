import Datetime from 'react-datetime';
import moment from 'moment';

export const CURRENT_DATE = `${new Date().getFullYear()}-${(
  new Date().getMonth() + 1
)
  .toString()
  .padStart(2, '0')}-${new Date().getDate().toString().padStart(2, '0')}`;

const DATE_FORMAT = 'YYYY-MM-DD';

export const FormikDateTime = ({ field, form, timeFormat }) => {
  const onFieldChange = value => {
    let dateValue = value;
    if (value instanceof moment) {
      dateValue = moment(value).format(DATE_FORMAT);
    }

    form.setFieldValue(field.name, dateValue);
  };

  const onFieldBlur = () => {
    form.setFieldTouched(field.name, true);
  };

  return (
    <Datetime
      initialValue={new Date()}
      dateFormat={DATE_FORMAT}
      timeFormat={timeFormat}
      id={field.name}
      name={field.name}
      onChange={onFieldChange}
      onBlur={onFieldBlur}
    />
  );
};
