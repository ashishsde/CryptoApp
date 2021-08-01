import React from "react";
import "./Coins.css";

function Coins({ name, image, symbol, price, volume, priceChange, marketcap }) {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img alt="coin-icon" src={image} />
          <h1>{name}</h1>
          <p className="coin-symbol">{symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">Rs{price}</p>
          <p className="coin-volume">Rs{volume.toLocaleString()}</p>
          {priceChange < 0 ? (
            <p className="coin-percent red">{priceChange.toFixed(2)}%</p>
          ) : (
            <p className="coin-percent green">{priceChange.toFixed(2)}%</p>
          )}
          <p className="coin-marketcap">
            Mkt Cap: Rs{marketcap.toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Coins;
