import React, { useState, useEffect } from "react";
import axios from "axios";
import Coins from "./Coins";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=INR&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  return (
    <div className="coin-app">
      <nav className="navbar-container">
        <ul className="item-list">
          <li>
            <img
              alt="icon"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTTPaAEErvLACZ5-K3R8dferoejD9TlIgUxrg&usqp=CAU"
            />
          </li>
          <li>
            <h3 className="tagline">BlockChain Tech</h3>
          </li>
          <li>
            <input
              type="text"
              placeholder="search a currency"
              onChange={handleChange}
            />
          </li>
        </ul>
      </nav>
      <div className="coin-search">
        <h1 className="coin-text">Welcome to the world of CryptoCurrency</h1>
      </div>
      <div className="intro-crypto">
        <p className="defination">
          A cryptocurrency is a digital or virtual currency that is secured by
          cryptography, which makes it nearly impossible to counterfeit or
          double-spend. Many cryptocurrencies are decentralized networks based
          on blockchain technology—a distributed ledger enforced by a disparate
          network of computers. A defining feature of cryptocurrencies is that
          they are generally not issued by any central authority, rendering them
          theoretically immune to government interference or manipulation.
        </p>
      </div>
      {coins
        .filter((coin) =>
          coin.name.toLowerCase().includes(search.toLowerCase())
        )
        .map((coin) => {
          return (
            <Coins
              key={coin.id}
              name={coin.name}
              image={coin.image}
              price={coin.current_price}
              marketcap={coin.market_cap}
              symbol={coin.symbol}
              priceChange={coin.price_change_percentage_24h}
              volume={coin.total_volume}
            />
          );
        })}
    </div>
  );
}

export default App;
