import React, { createContext, useState } from 'react';

export const FinanceContext = createContext();

export const FinanceProvider = ({ children }) => {
  const [transactions, setTransactions] = useState([]);
  const [settings, setSettings] = useState({ currency: 'USD' });

  return (
    <FinanceContext.Provider value={{ transactions, setTransactions, settings, setSettings }}>
      {children}
    </FinanceContext.Provider>
  );
};
