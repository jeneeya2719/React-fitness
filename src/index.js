import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { FinanceProvider } from './context/FinanceContext';

ReactDOM.render(
  <FinanceProvider>
    <App />
  </FinanceProvider>,
  document.getElementById('root')
);
