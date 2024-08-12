import React, { useState, useContext, useEffect } from 'react';
import { FinanceContext } from '../context/FinanceContext';

const EditTransaction = ({ transaction, index, onSave }) => {
  const [description, setDescription] = useState(transaction.description);
  const [amount, setAmount] = useState(transaction.amount);
  const [category, setCategory] = useState(transaction.category);

  const handleSave = () => {
    onSave(index, { description, amount, category });
  };

  return (
    <div>
      <h2>Edit Transaction</h2>
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
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default EditTransaction;
