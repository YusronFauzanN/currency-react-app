import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [currency, setCurrency] = useState("");

  const getCurrency = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_API_URL}apikey=${
          import.meta.env.VITE_API_KEY
        }&symbols=CAD,IDR,CHF,JPY,EUR,GBP`
      );
      setCurrency(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCurrency();
  }, []);

  const weBuy = (currency) => (parseFloat(currency) + 5 / 100).toFixed(4);
  const weSell = (currency) => (parseFloat(currency) - 5 / 100).toFixed(4);

  return (
    <>
      <div id='table-wrap'>
        <table>
          <tr>
            <th>Currency</th>
            <th>We Buy</th>
            <th>Exchange Rate</th>
            <th>We Sell</th>
          </tr>

          <tr>
            <td>CAD</td>
            <td>{weBuy(currency?.rates?.CAD)}</td>
            <td>{parseFloat(currency?.rates?.CAD).toFixed(4)}</td>
            <td>{weSell(currency?.rates?.CAD)}</td>
          </tr>

          <tr>
            <td>IDR</td>
            <td>{weBuy(currency?.rates?.IDR)}</td>
            <td>{parseFloat(currency?.rates?.IDR).toFixed(4)}</td>
            <td>{weSell(currency?.rates?.IDR)}</td>
          </tr>

          <tr>
            <td>CHF</td>
            <td>{weBuy(currency?.rates?.CHF)}</td>
            <td>{parseFloat(currency?.rates?.CHF).toFixed(4)}</td>
            <td>{weSell(currency?.rates?.CHF)}</td>
          </tr>

          <tr>
            <td>JPY</td>
            <td>{weBuy(currency?.rates?.JPY)}</td>
            <td>{parseFloat(currency?.rates?.JPY).toFixed(4)}</td>
            <td>{weSell(currency?.rates?.JPY)}</td>
          </tr>

          <tr>
            <td>EUR</td>
            <td>{weBuy(currency?.rates?.EUR)}</td>
            <td>{parseFloat(currency?.rates?.EUR).toFixed(4)}</td>
            <td>{weSell(currency?.rates?.EUR)}</td>
          </tr>

          <tr>
            <td>GBP</td>
            <td>{weBuy(currency?.rates?.GBP)}</td>
            <td>{parseFloat(currency?.rates?.GBP).toFixed(4)}</td>
            <td>{weSell(currency?.rates?.GBP)}</td>
          </tr>
        </table>
      </div>
      <div className="">
        <p>Rates are based from 1 {currency.base}.<br /> This application uses API from https://currencyfreaks.com</p>
      </div>
    </>
  )
}

export default App
