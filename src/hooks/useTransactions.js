import { useState, useEffect } from 'react';
import { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';

export const useTransactions = () => {
  const { transactions, setTransactions } = useContext(FinanceContext);
  const [filteredTransactions, setFilteredTransactions] = useState([]);

  useEffect(() => {
    setFilteredTransactions(transactions);
  }, [transactions]);

  return { filteredTransactions, setTransactions };
};
