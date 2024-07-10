import React, { useState } from "react";

const MostViewed = () => {
  const currencies = [
    "1 USD == 15.49 GHS",
    "1 GBP == 1 USD",
    "1 USD == 161.23 JPY",
    " 1 EUR == 1 USD",
    "1 USD == 92.66 ALL",
    "1 GHS == 87.34 RUB",
  ];
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
            // onClick={() => handleCurrencyClick(currency)}
            style={{
              cursor: "pointer",
              fontWeight: selectedCurrency === currency ? "normal" : "bold",fontSize: "20px",

            }}
          >
            {currency}
          </li> 
        ))} 
      </ul>
      {selectedCurrency && (
        <div
          style={{
            cursor: "pointer",
            fontWeight: selectedCurrency === currency ? "bold" : "normal", 
          }}
        >
          Details for {selectedCurrency} go here (e.g. exchange rates, trends,
          ).
        </div>
      )}
    </div>
  );
};

export default MostViewed;
