import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Currency from "./component/Currency";
import Footer from "./component/Footer";
import "./App.css";

const BASE_URL = "http://api.currencylayer.com/live";
const ACCESS_KEY = "1483df00246df51b16ed1d40eb341e25"; 

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}?access_key=${ACCESS_KEY}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const firstCurrency = Object.keys(data.quotes)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.quotes[firstCurrency]);
      })
      .catch((error) => {
        if (error.name === "TypeError") {
          console.error("There was a problem fetching the data:", error);
        } else if (error.message.includes("HTTP error")) {
          console.error("There was a problem with the response:", error);
        } else {
          console.error("An unknown error occurred:", error);
        }
      });
  }, []);

  useEffect(() => {
    if (fromCurrency != null && toCurrency != null) {
      fetch(
        `${BASE_URL}?base=${fromCurrency}&symbols=${toCurrency}&access_key=${ACCESS_KEY}`
      )
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
          return response.json();
        })
        .then((data) => setExchangeRate(data.rates[toCurrency]))
        .catch((error) => {
          if (error.name === "TypeError") {
            console.error(
              "There was a problem fetching the exchange rate:",
              error
            );
          } else if (error.message.includes("HTTP error")) {
            console.error("There was a problem with the response:", error);
          } else {
            console.error("An unknown error occurred:", error);
          }
        });
    }
  }, [fromCurrency, toCurrency]);

  let toAmount, fromAmount;
  if (amountInFromCurrency) {
    fromAmount = amount;
    toAmount = amount * exchangeRate;
  } else {
    toAmount = amount;
    fromAmount = amount / exchangeRate;
  }

  function handleFromAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(true);
  }

  function handleToAmountChange(e) {
    setAmount(e.target.value);
    setAmountInFromCurrency(false);
  }

  return (
    <div>
      <Header />

      <div>
        <h1 className="con">Convert</h1>
        <Currency
          currencyOptions={currencyOptions}
          selectedCurrency={fromCurrency}
          onChangeCurrency={(e) => setFromCurrency(e.target.value)}
          onChangeAmount={handleFromAmountChange}
          amount={fromAmount}
        />
        <div className="equals">=</div>
        <Currency
          currencyOptions={currencyOptions}
          selectedCurrency={toCurrency}
          onChangeCurrency={(e) => setToCurrency(e.target.value)}
          onChangeAmount={handleToAmountChange}
          amount={toAmount}
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;
