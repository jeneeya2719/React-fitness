import React, { useState, useCallback, useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import './AddTransaction.css';

const AddTransaction = () => {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [category, setCategory] = useState('Income');
  const { transactions, setTransactions } = useContext(FinanceContext);

  const handleAdd = useCallback(() => {
    if (description && amount) {
      const newTransaction = { description, amount: parseFloat(amount), category };
      setTransactions(prevTransactions => [...prevTransactions, newTransaction]);
      setDescription('');
      setAmount('');
      setCategory('Income');
    }
  }, [description, amount, category, setTransactions]);

  return (
    <div>
      <h2>Add Transaction</h2>
      <input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Description"
      />
      <input
        type="number"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        placeholder="Amount"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Income">Income</option>
        <option value="Expense">Expense</option>
        <option value="Savings">Savings</option>
      </select>
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddTransaction;
