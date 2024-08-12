import React, { useMemo } from 'react';
import { useTransactions } from '../hooks/useTransactions';
import './Reports.css';

const Reports = () => {
  const { filteredTransactions } = useTransactions();

  const { totalIncome, totalExpenses, totalSavings } = useMemo(() => {
    return filteredTransactions.reduce(
      (acc, trans) => {
        if (trans.category === 'Income') acc.totalIncome += trans.amount;
        if (trans.category === 'Expense') acc.totalExpenses += trans.amount;
        if (trans.category === 'Savings') acc.totalSavings += trans.amount;
        return acc;
      },
      { totalIncome: 0, totalExpenses: 0, totalSavings: 0 }
    );
  }, [filteredTransactions]);

  return (
    <div>
      <h2>Reports</h2>
      <p>Total Income: {totalIncome}</p>
      <p>Total Expenses: {totalExpenses}</p>
      <p>Total Savings: {totalSavings}</p>
    </div>
  );
};

export default Reports;
