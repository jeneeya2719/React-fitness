import React, { useState, useContext } from 'react';
import { FinanceContext } from '../context/FinanceContext';
import './Settings.css';

const Settings = () => {
  const { settings, setSettings } = useContext(FinanceContext);
  const [currency, setCurrency] = useState(settings.currency);

  const handleSave = () => {
    setSettings({ ...settings, currency });
  };

  return (
    <div>
      <h2>Settings</h2>
      <label>
        Currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </label>
      <button onClick={handleSave}>Save</button>
    </div>
  );
};

export default Settings;
