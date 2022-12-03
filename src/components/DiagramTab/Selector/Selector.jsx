import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';

export default function Selector({ options, initialState, changeSelector }) {
  const [valueName, setValueName] = useState(initialState);

  const handleChange =  event => {
  setValueName(event.label);
    changeSelector(event.label);
  };

  return (
    <Select
      value={valueName}
      onChange={handleChange}
      options={options}
      placeholder={valueName}
    />
  );
}

Selector.propTypes = {
  options: PropTypes.array,
  initialState: PropTypes.string,
  changeSelector: PropTypes.func,
};