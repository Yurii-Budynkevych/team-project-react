import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrencyRate } from '../../redux/Currency/operation/CurrencyOperation';
import { selectorCurrencyRates } from '../../redux/Currency/selectors/CurrencySelectors';
import scss from './Currency.module.scss';

// import {
//   Table,
//   TableBody,
//   TableContainer,
//   TableHead,
//   TableRow,
//   TableCell,
// } from '@mui/material';

function Currency() {
  const currencyRates = useSelector(selectorCurrencyRates);
  const chooseCurrencyRates = currencyRates.slice(0, 3);
  const dispatch = useDispatch();
  let timerId = useRef();
  // const intervalCurrencyRates = () => {
  //   dispatch(getCurrencyRate());
  //   if (currencyRates.length > 0) {
  //     timerId.current = setInterval(() => {
  //       dispatch(getCurrencyRate());
  //     }, 86400000);
  //   }
  // };

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

  // 86400000
  return (
    //  <div className="currency__page">
    //       <div className={scss.currency_sidebar}>
    //         <TableContainer className={scss.currency_table_container}>
    //           <Table className={scss.currency_table} size="small">
    //             <TableHead className={scss.currency_head}>
    //               <TableRow className={scss.currency_head_row}>
    //                 <TableCell className={scss.currency_header}>Currency</TableCell>
    //                 <TableCell align="center" className={scss.currency_header}>
    //                   Purchase
    //                 </TableCell>
    //                 <TableCell align="center" className={scss.currency_header}>
    //                   Sale
    //                 </TableCell>
    //               </TableRow>
    //             </TableHead>
    //             <TableBody className={scss.currency_body}>
    //               {currency?.map((element) => (
    //                 <TableRow key={element.rateBuy
    //                 }>
    //                   <TableCell
    //                     component="th"
    //                     scope="row"
    //                     align="left"
    //                     className={scss.currency_name}
    //                   >
    //                     {element.rateBuy}
    //                   </TableCell>
    //                   <TableCell align="center" className={scss.currency_item}>
    //                     {Math.floor(element.buy * 100) / 100}
    //                   </TableCell>
    //                   <TableCell align="center" className={scss.currency_item}>
    //                     {Math.floor(element.sale * 100) / 100}
    //                   </TableCell>
    //                 </TableRow>
    //               ))}
    //             </TableBody>
    //           </Table>
    //           <div className={scss.currency_bg}></div>
    //         </TableContainer>
    //       </div>
    //     </div>

 
    
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
