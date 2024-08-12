import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home'; // Make sure this file exists
import AddTransaction from './pages/AddTransaction';
import TransactionsList from './pages/TransactionsList'; // This should be a page or component
import Reports from './pages/Reports';
import Settings from './pages/Settings';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add-transaction" element={<AddTransaction />} />
        <Route path="/transactions-list" element={<TransactionsList transactions={[]} />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
