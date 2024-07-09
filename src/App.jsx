import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./component/Header";
import Currency from "./component/Currency";
import Footer from "./component/Footer";
import "./App.css";
import MostViewed from "./component/MostViewed";
import ImageSwiper from "./component/ImagesSwiper";

const BASE_URL = "https://api.exchangerate-api.com/v4/latest";

function App() {
  const [currencyOptions, setCurrencyOptions] = useState([]);
  const [fromCurrency, setFromCurrency] = useState();
  const [toCurrency, setToCurrency] = useState();
  const [exchangeRate, setExchangeRate] = useState();
  const [amount, setAmount] = useState(1);
  const [amountInFromCurrency, setAmountInFromCurrency] = useState(true);

  useEffect(() => {
    fetch(`${BASE_URL}/USD`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        const firstCurrency = Object.keys(data.rates)[0];
        setCurrencyOptions([data.base, ...Object.keys(data.rates)]);
        setFromCurrency(data.base);
        setToCurrency(firstCurrency);
        setExchangeRate(data.rates[firstCurrency]);
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
      fetch(`${BASE_URL}/USD${fromCurrency}`)
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

      <div className="container">
        <div className="row">
          {/* First Column */}
          <div className="col md-6">
            <div className="card image shadow p-3 mb-5 bg-body rounded ">
              <div
                className=" image-swiper shadow p-4 mb-5 bg-body rounded"
                style={{
                  fontFamily: "fantasy",
                }}
              >
                <h1 className="first" style={{
                  textAlign:"center"
                }}> Get Started</h1>
              </div>
              <ImageSwiper />
            </div>
            <div className="welcome shadow-lg p-3 mb-5 bg-body rounded">
              <strong>
                {" "}
                <h1
                  className="shadow-lg p-4 mb-5 bg-body rounded"
                  style={{ textShadow: "revert-layer", fontFamily: "fantasy" }}
                >
                  Welcome
                </h1>
              </strong>
              <h4>
                <p className="about" style={{
                  fontFamily:"monospace", textAlign:"match-parent"
                }}>
                  Welcome to Shika Flux Currency Convertor! <br />
                  Whether you're globetrotting or simply curious about exchange
                  rates,
                  <strong>Shika Flux</strong> has you covered. <br />
                  Our sleek and user-friendly interface makes currency
                  conversion a breeze!
                </p>
              </h4>
            </div>
            {/* Image */}
            {/* <div className="image shadow p-3 mb-5 bg-body rounded">
              {" "}
              <select name="different-images" id="images">
                <option value="money">
                  <img
                    src="./src/assets/img/page-background.png"
                    style={{ width: 200, height: 150 }}
                    alt="money"
                  />
                  <img
                    src="./src/assets/img/currencywheel.png"
                    alt="money wheel"
                  />
                </option>
              </select>
            </div> */}
          </div>

          {/* Second Column */}
          <div className="col container-md-6">
            <div className="currency-form  ">
              <div className="  shadow-lg p-3 mb-5 bg-body rounded ">
                {/* Currency Selection */}

                <div className="currency d-flex flex-column align-items-center">
                  <div className="shadow-lg p-3 mb-5 bg-body rounded">
                    <h1 className="con" style={{ fontFamily: "fantasy" }}>
                      Convert Here
                    </h1>
                  </div>
                  <Currency
                    currencyOptions={currencyOptions}
                    selectedCurrency={fromCurrency}
                    onChangeCurrency={(e) => setFromCurrency(e.target.value)}
                    onChangeAmount={handleFromAmountChange}
                    amount={fromAmount}
                  />

                  <Currency
                    currencyOptions={currencyOptions}
                    selectedCurrency={toCurrency}
                    onChangeCurrency={(e) => setToCurrency(e.target.value)}
                    onChangeAmount={handleToAmountChange}
                    amount={toAmount}
                  />
                </div>
              </div>
              <div className="shadow-lg p-3 mb-5 bg-body rounded">
                <MostViewed />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default App;
