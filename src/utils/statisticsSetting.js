const monthOptions = [
  { value: '1', label: 'January' },
  { value: '2', label: 'February' },
  { value: '3', label: 'March' },
  { value: '4', label: 'Apryl' },
  { value: '5', label: 'May' },
  { value: '6', label: 'June' },
  { value: '7', label: 'July' },
  { value: '8', label: 'August' },
  { value: '9', label: 'September' },
  { value: '10', label: 'October' },
  { value: '11', label: 'November' },
  { value: '12', label: 'December' },
];

const yearOptions = [
  { value: '2021', label: '2021' },
  { value: '2022', label: '2022' },
  { value: '2023', label: '2023' },
  { value: '2024', label: '2024' },
];
  const elColor = [
    '#ddff00',
    '#ff8000',
    '#2bff00',
    '#a25970',
    '#01cde8',
    '#9e8ed0',
    '#461bc7',
    '#824509',
    '#820937',
    '#d288a4',
    '#423d4d',
  ];
const YEAR_INITIAL_STATE = new Date().getFullYear() + '';
const currentMonth = new Date().getMonth();
const monthObj = monthOptions.find(el => Number(el.value) === currentMonth + 1);
const MONTH_INITIAL_STATE = monthObj.label;

const generateLightColorHex = () => {
  let color = '#';
  for (let i = 0; i < 3; i++)
    color += (
      '0' + Math.floor(((1 + Math.random()) * Math.pow(16, 2)) / 2).toString(16)
    ).slice(-2);
  return color;
};

export {
  monthOptions,
  yearOptions,
  YEAR_INITIAL_STATE,
  MONTH_INITIAL_STATE,
  generateLightColorHex,
  elColor,
};