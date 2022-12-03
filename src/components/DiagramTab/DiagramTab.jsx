import React from 'react';
import { useDispatch } from 'react-redux';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import Selector from './Selector/Selector';
import Table from './Table/Table';
import {
  generateLightColorHex,
  YEAR_INITIAL_STATE,
  MONTH_INITIAL_STATE,
  monthOptions,
  yearOptions,
} from 'utils/statisticsSetting';
import Chart from './Chart/Chart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { createSaveRoute } from '../../redux/Auth/authSlice';
ChartJS.register(ArcElement, Tooltip, Legend);

export function DiagramTab() {
  const dispatch = useDispatch();

  const [obj, setObj] = useState(null);
  const totalBalance = obj?.periodTotal;
  // console.log(obj?.categoriesSummary.map(({type}) => type))
  // console.log(obj)
  const data = {
    labels: obj?.categoriesSummary.map(({ name }) => name),
    datasets: [
      {
        label: 'balance',
        // data: obj?.categoriesSummary.map(({total, type}) => (type === "EXPENSE" && -total)),
        data: obj?.categoriesSummary.map(({ total }) => total),
        backgroundColor: [
          generateLightColorHex(),
          generateLightColorHex(),
          generateLightColorHex(),
          generateLightColorHex(),
          generateLightColorHex(),
        ],
        borderColor: [
          generateLightColorHex(),
          generateLightColorHex(),
          generateLightColorHex(),
          generateLightColorHex(),
          generateLightColorHex(),
        ],
        borderWidth: 2,
      },
    ],
  };

  const currentMonth = new Date().getMonth() + 1;
  const [selectMonth, setSelectMonth] = useState(currentMonth);
  const currentYear = new Date().getFullYear();
  const [selectYear, setSelectYear] = useState(currentYear);

  const onSelectMonth = itemTitle => {
    const mnthObj = monthOptions.find(item => item.label === itemTitle);
    const month = Number(mnthObj.value);
    setSelectMonth(month);
  };

  const onSelectYear = itemTitle => {
    const year = Number(itemTitle);
    setSelectYear(year);
  };

  // /api/transactions-summary?month=2&year=2021"
  // /api/transactions-summary"

  useEffect(() => {
    dispatch(createSaveRoute({ save: true }));
    async function getStats() {
      try {
        const res = await axios.get(
          `/api/transactions-summary?month=${selectMonth}&year=${selectYear}`
        );
        return res.data;
      } catch (error) {
        console.log(error);
      }
    }
    // console.log(getStats())
    getStats().then(data => setObj(data));
  }, [dispatch, selectMonth, selectYear]);
  // console.log(obj?.categoriesSummary.length)

  return (
    <>
      <h2>Statistics</h2>
      <Chart data={data} totalBalance={totalBalance} />
      <Selector
        options={monthOptions}
        initialState={MONTH_INITIAL_STATE}
        changeSelector={onSelectMonth}
      />
      <Selector
        options={yearOptions}
        initialState={YEAR_INITIAL_STATE}
        changeSelector={onSelectYear}
      />
      {obj?.categoriesSummary.length === 0 ? (
        <h2>you have no transactions this month</h2>
      ) : (
        <div>
          <ul>
            {obj?.categoriesSummary.map(({ name, total, type }) => (
              <Table key={name} name={name} total={total} type={type} />
            ))}
          </ul>
          <h3>Expenses per month: {obj?.expenseSummary}</h3>
          <h3>Income per month: {obj?.incomeSummary}</h3>
        </div>
      )}
    </>
  );
}
