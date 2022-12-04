import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';
import './Selector.css';

export default function Selector({ options, initialState, changeSelector }) {
  const [valueName, setValueName] = useState(initialState);

  const handleChange = event => {
    setValueName(event.label);
    changeSelector(event.label);
  };

  return (
    <Select
      value={valueName}
      onChange={handleChange}
      options={options}
      placeholder={valueName}
      // className="statistic__selector"
      // classNames={{
      //   control: (state) =>
      //     state.isFocused ? 'border-red-800',
      // }}
      // styles={{
      //   borderRadius: '10px',
      //   color: 'black',
      // }}
    />
  );
}

Selector.propTypes = {
  options: PropTypes.array,
  initialState: PropTypes.string,
  changeSelector: PropTypes.func,
};
