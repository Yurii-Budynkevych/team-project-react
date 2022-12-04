import PropTypes from 'prop-types';
import { useState } from 'react';
import Select from 'react-select';

export default function Selector({ options, initialState, changeSelector }) {
  const [valueName, setValueName] = useState(initialState);

  const handleChange = event => {
    setValueName(event.label);
    changeSelector(event.label);
  };

  const customStyles = {
    menu: provided => ({
      ...provided,
      width: '100%',
      color: 'black',
      padding: 10,
      borderRadius: 10,
    }),

    control: (_, { selectProps: { width } }) => ({
      width: width,
      border: '2px solid black',
      borderRadius: 50,
      opacity: 1,
      display: 'flex',
      justifyContent: 'space-between',
    }),
    placeholder: () => ({
      color: 'black',
    }),
    valueContainer: () => ({
      display: 'flex',
      alignItems: 'center',
      padding: 15,
    }),
  };

  return (
    <div className="statistic__selector">
      <Select
        value={valueName}
        onChange={handleChange}
        options={options}
        placeholder={valueName}
        styles={customStyles}
      />
    </div>
  );
}

Selector.propTypes = {
  options: PropTypes.array,
  initialState: PropTypes.string,
  changeSelector: PropTypes.func,
};
