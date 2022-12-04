import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate } from '../../redux/Currency/operation/CurrencyOperation';
import { selectorCurrencyRates } from '../../redux/Currency/selectors/CurrencySelectors';
import scss from './Currency.module.scss';

function Currency() {
  const currencyRates = useSelector(selectorCurrencyRates);
  const chooseCurrencyRates = currencyRates.slice(0, 3);
  const dispatch = useDispatch();
  let timerId = useRef();
  useEffect(() => {
    if ((currencyRates.length === 0)) {
      dispatch(getCurrencyRate());
    }
    if (currencyRates.length > 0) {
      timerId.current = setInterval(() => {
        dispatch(getCurrencyRate());
      }, 86400000);
    }
    return () => {
      timerId.current = null;
    };
  }, [currencyRates, currencyRates.length, dispatch]);


  return (
    <div className={scss.currency__container}>
     
        <ul className={scss.currency__item_header}>
          <li className={scss.currency__title}>Currency</li>
          <li className={scss.currency__title}>Purchase</li>
          <li className={scss.currency__title}>Sale</li>
        </ul>
     
      <div className={scss.wrapper}>
        <ul className={scss.currency__item}>
          <li className={scss.currency}>USD</li>
          <li className={scss.currency}>EUR</li>
          <li className={scss.currency}>USD/EUR</li>
      </ul>
     
        <ul className={scss.currency__item}>
          {chooseCurrencyRates.map(({ rateBuy }) => (
            <li className={scss.currency} key={rateBuy}>{rateBuy.toFixed(2)}</li>
          ))}
        </ul>
     
        <ul className={scss.currency__item}>
          {chooseCurrencyRates.map(({ rateSell }) => (
            <li className={scss.currency} key={rateSell}>{rateSell.toFixed(2)}</li>
          ))}
        </ul>
  
      </div>
      </div>
     
  );
}

export default Currency;
