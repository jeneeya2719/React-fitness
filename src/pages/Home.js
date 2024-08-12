import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';  // Import the CSS file
import trackerImage from '../assets/finance-tracker.png';  // Adjust path as necessary

const Home = () => {
  return (
    <div className="container">
      <div className="content-box">
        <div className="image-box">
          <img src={trackerImage} alt="Finance Tracker" className="tracker-image" />
        </div>
        <h1>Welcome to the Personal Finance Tracker</h1>
        <nav>
          <ul>
            <li><Link to="/add-transaction">Add Transaction</Link></li>
            <li><Link to="/transactions-list">Transactions List</Link></li>
            <li><Link to="/reports">Reports</Link></li>
            <li><Link to="/settings">Settings</Link></li>
          </ul>
        </nav>
        <footer>
          <p>© 2024 Personal Finance Tracker</p>
        </footer>
      </div>
    </div>
  );
};

export default Home;
