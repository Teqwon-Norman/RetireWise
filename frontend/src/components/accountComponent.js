import React from "react";

export default function AccountComponent({ 
    tickers,
    totalProfit,
    accountBalance
}) {
    return (
        <div className="posts-container">
          <div className="circle"></div>
          <div className="red-line"></div>
          <ul>
          {tickers.map((ticker, index) => (
            <li key={index}>{ticker}</li>
          ))}
        </ul>
          <h1 className="account-information">Total Profit: {totalProfit}</h1>
          <h1 className="account-information">Balance: {accountBalance}</h1>
        </div>
    );
}