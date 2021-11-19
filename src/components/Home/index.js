import React, { useEffect, useState } from "react";
import httpService from "../../services/http";
import Coin from "../Coin";
import Navbar from "./partials/Navbar";
import Footer from "./partials/Footer";

function Home() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(async () => {
    try {
      const response = await httpService.getCurrencies(100, 1);
      setCoins(response);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLocaleLowerCase())
  );

  return (
    <>
      <Navbar />
      <div className="coin-app">
        <div className="coin-search">
          <h1 className="coin-text">Pesquisar moeda</h1>
          <form>
            <input
              type="text"
              placeholder="Pesquisar"
              className="coin-input"
              onChange={handleChange}
            />
          </form>
        </div>
        {filteredCoins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            image={coin.image}
            symbol={coin.symbol}
            marketcap={coin.market_cap}
            price={coin.current_price}
            priceChange={coin.price_change_percentage_24h}
            volume={coin.total_volume}
          />
        ))}
      </div>
      <Footer />
    </>
  );
}

export default Home;
