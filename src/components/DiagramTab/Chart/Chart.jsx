import { Doughnut } from 'react-chartjs-2';
import PropTypes from 'prop-types';

const options = {
  cutout: '70%',
  plugins: {
    legend: {
      display: true,
    },
  },
};

const Chart = ({ data, totalBalance }) => {
  return (
    <div style={{width:"300px", height:"auto"}}>
      <Doughnut options={options} data={data}  />
      <span>₴ {totalBalance}</span>
    </div>
  );
};

Chart.propTypes = {
  data: PropTypes.object,
  totalBalance: PropTypes.number,
};

export default Chart;