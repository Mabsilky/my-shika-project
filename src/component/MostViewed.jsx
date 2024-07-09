import React, { useState } from "react";

const MostViewed = () => {
  const currencies = ["USD", "GHS", "GBP", "EUR", "ALL", "JPY", "RUB"];
  const [selectedCurrency, setSelectedCurrency] = useState(null);

  const handleCurrencyClick = (currency) => {
    setSelectedCurrency(currency);
  };

  return (
    <div>
      <div>
        <div className="shadow-lg p-3 mb-5 bg-body rounded">
          <h1 style={{ textAlign: "center", fontFamily: "fantasy" }}>
            Most Selected Currencies 
          </h1>
        </div>
      </div>
      <ul>
        {currencies.map((currency) => (
          <li
            key={currency}
            onClick={() => handleCurrencyClick(currency)}
            style={{
              cursor: "pointer",
              fontWeight: selectedCurrency === currency ? "bold" : "normal",
            }}
          >
            {currency}
          </li>
        ))}
      </ul>
      {selectedCurrency && (
        <div style={{
              cursor: "pointer",
              fontWeight: selectedCurrency === currency ? "bold" : "normal",
            }}>
          Details for {selectedCurrency} go here (Convert Here).
        </div>
      )}
    </div>
  );
};

export default MostViewed;
