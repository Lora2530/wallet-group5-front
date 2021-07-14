import React from 'react';
import { useSelector } from 'react-redux';

import userBalanceSelector from '../../components/balance/balance';
import s from './dasbord.module.css';

import Navigation from '../../components/Navigation/Navigation';
import Balance from '../../components/balance/balance';
import AddTransactionButton from '../../components/addTransactionButton/AddTransactionButton';
import AppBar from '../../components/AppBar/AppBar';
import UserMenu from '../../components/UserMenu/UserMenu';

const DashboardPage = () => {
  const userBalance = useSelector(userBalanceSelector);
  return (
    <>
      
      <UserMenu />
      <Navigation />
      <Balance userBalance={userBalance} />
      <AddTransactionButton />
      <div>
        <table>
          <thead className={s.tabl_heder}> 
            <tr>
              <th className={s.tabl_1}>Дата</th>
              <th className={s.tabl_1}>Тип</th>
              <th className={s.tabl_1}>Категрия</th>
              <th className={s.tabl_1}>Коментарий</th>
              <th className={s.tabl_1}>Сумма</th>
              <th className={s.tabl_1}>Баланс</th>
            </tr>
          </thead>
        </table>
      </div>
    </>

  );
};

export default DashboardPage;
