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
  elColor,
} from 'utils/statisticsSetting';
import Chart from './Chart/Chart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import './DiagramTab.css';
import { createSaveRoute, createIsHomePage } from '../../redux/Auth/authSlice';
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
        backgroundColor: elColor,
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

  useEffect(() => {
    dispatch(createSaveRoute({ save: false }));
    dispatch(createIsHomePage({ isHome: false }));
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
  // console.log(obj?.categoriesSummary.length);

  return (
    <div className="statistic">
      <h2 className="statistic__title">Statistics</h2>
      <div className="statistic__data">
        <Chart data={data} totalBalance={totalBalance} />
        <div className="statistic__table">
          <div className="statistic__select">
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
          </div>
          {obj?.categoriesSummary.length === 0 ? (
            <h2 className="emptyTitle">you have no transactions this month</h2>
          ) : (
            <div>
              <div className="statistic__listTitle">
                <span>Category</span>
                <span>Sum</span>
              </div>
              <ul className="statistic__list">
                {obj?.categoriesSummary.map(({ name, total }, i) => (
                  <Table
                    key={name}
                    name={name}
                    total={total}
                    color={elColor[i]}
                  />
                ))}
              </ul>
              <h3 className="statistic__value">
                <span>Expenses per month:</span>
                <span style={{ color: '#FF6596' }}>{obj?.expenseSummary}</span>
              </h3>
              <h3 className="statistic__value">
                <span>Income per month:</span>
                <span style={{ color: '#24CCA7' }}>{obj?.incomeSummary}</span>
              </h3>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
