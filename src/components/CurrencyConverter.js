import ExchangeRate from "./ExchangeRate";
import { useState } from "react";
// import axios = from 'axios';

const CurrencyConverter = () => {
  const axios = require("axios");

   const currencies = ['BTC', 'ETH', 'USD', 'XRP', 'LTC', 'ADA'];
   const [chosenPrimaryCurrency, setChosenPrimaryCurrency] = useState('BTC');
   const [chosenSecondaryCurrency, setChosenSecondaryCurrency] = useState('BTC');
   const [amount, setAmount] = useState(1);
   const [exchangeRate, setExchangeRate] = useState(0);
   const [primaryCurrencyExchanged, setPrimaryCurrencyExchanged] = useState('BTC');
   const [secondaryCurrencyExchanged, setSecondaryCurrencyExchanged] = useState('BTC');

   const [result, setResult] = useState(0);

   const convert = () => { 
    const options = {
    method: 'GET',
    url: 'https://alpha-vantage.p.rapidapi.com/query',
    params: {from_currency: chosenPrimaryCurrency, function: 'CURRENCY_EXCHANGE_RATE', to_currency: chosenSecondaryCurrency},
    headers: {
      'X-RapidAPI-Key': 'd6d4eaacb3msh3fe1047f01d3e0ep11a7aejsnf4fb6b9deda9',
      'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
  setExchangeRate(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"]);
  setResult(response.data["Realtime Currency Exchange Rate"]["5. Exchange Rate"] * amount);
  setPrimaryCurrencyExchanged(chosenPrimaryCurrency);
  setSecondaryCurrencyExchanged(chosenSecondaryCurrency);
}).catch(function (error) {
	console.error(error);
});
   }

    return (
      <div className="currency-converter">
       <h2>CurrencyConverter</h2>

       <div className="input-box">
       <table>
          <tbody>
            <tr>
              <td>Primary Currency</td>
              <td>
                <input type="number" name="currency-amount-1" value={amount}
                onChange={(e) => setAmount(e.target.value)} 
                />
              </td>
              <td>
                <select
                  value={chosenPrimaryCurrency}
                  name="currency-option-1"
                  className="currency-options"
                  onChange={(e) => setChosenPrimaryCurrency(e.target.value)}
                  >
                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>

            <tr>
              <td>Secondary Currency</td>
              <td>
                <input 
                name="currency-amount-2" 
                value={result} 
                disabled={true}
                />
              </td>
              <td>
                <select
                  value={chosenSecondaryCurrency}
                  name="currency-option-2"
                  className="currency-options"
                  onChange={(e) => setChosenSecondaryCurrency(e.target.value)}

                  >
                    {currencies.map((currency, _index) => (<option key={_index}>{currency}</option>))}
                </select>
              </td>
            </tr>

          </tbody>

       </table>

        <button id="convert-button" onClick={convert }>Convert</button> 

       </div>
        <ExchangeRate
        exchangeRate={exchangeRate}
        chosenPrimaryCurrency={primaryCurrencyExchanged}
        chosenSecondaryCurrency={secondaryCurrencyExchanged}
        />

      </div>
    )
  };
  
  
  export default CurrencyConverter;


  const axios = require("axios");

const options = {
  method: 'GET',
  url: 'https://alpha-vantage.p.rapidapi.com/query',
  params: {from_currency: 'BTC', function: 'CURRENCY_EXCHANGE_RATE', to_currency: 'USD'},
  headers: {
    'X-RapidAPI-Key': 'd6d4eaacb3msh3fe1047f01d3e0ep11a7aejsnf4fb6b9deda9',
    'X-RapidAPI-Host': 'alpha-vantage.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});