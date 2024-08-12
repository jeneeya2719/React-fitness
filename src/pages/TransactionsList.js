import React, { useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import EditTransaction from './EditTransaction'; // Ensure you import EditTransaction if you have it
import './TransactionsList.css';

const TransactionsList = () => {
  const { transactions, setTransactions } = useContext(FinanceContext);

  const handleDelete = (index) => {
    setTransactions(prevTransactions => prevTransactions.filter((_, i) => i !== index));
  };

  const handleEdit = (index, updatedTransaction) => {
    setTransactions(prevTransactions => {
      const newTransactions = [...prevTransactions];
      newTransactions[index] = updatedTransaction;
      return newTransactions;
    });
  };

  return (
    <div>
      <h2>Transactions List</h2>
      {transactions.length === 0 ? (
        <p>No transactions available</p>
      ) : (
        transactions.map((trans, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ddd', borderRadius: '4px' }}>
            <p>{trans.description}: {trans.amount} ({trans.category})</p>
            <button onClick={() => handleDelete(index)}>Delete</button>
            <EditTransaction
              transaction={trans}
              index={index}
              onSave={handleEdit}
            />
          </div>
        ))
      )}
    </div>
  );
};

export default TransactionsList;
