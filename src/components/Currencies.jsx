import React, { useEffect, useState } from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";

const Currencies = ({ searchTerm }) => {
  const { data: cryptoList, isFetching } = useGetCryptosQuery();
  const [cryptos, setCryptos] = useState(cryptoList?.data?.coins);

  useEffect(() => {
    setCryptos(cryptoList?.data?.coins);

    const filteredData = cryptoList?.data?.coins.filter((item) =>
      item.name.toLowerCase().includes(searchTerm)
    );

    searchTerm && setCryptos(filteredData);
  }, [cryptoList, searchTerm]);

  console.log(cryptos);

  if (isFetching) {
    return (
      <div className="w-full h-[30rem] flex items-center justify-center">
        <p>Loading</p>
      </div>
    );
  }
  return (
    <>
      {cryptos?.map((coin) => (
        <Link key={coin.uuid} to={`/crypto/${coin.uuid}`} className="coinCards">
          <div
            key={coin.name}
            className="flex flex-col justify-between flex-1 relative rounded-2xl overflow-hidden p-6 bg-base-300 h-[14rem] max-h-80"
          >
            <img
              src={coin.iconUrl}
              alt="iconcoin"
              className="absolute top-0 right-0 object-cover w-24 h-24  blur-3xl saturate-[400%]"
            />
            <div className="flex justify-between">
              <h3 className="font-bold">
                {coin.rank}. {coin.name}
              </h3>
              <img src={coin.iconUrl} alt="iconcoin" className="h-12 z-[1]" />
            </div>
            <div className="">
              <p>Price: {millify(coin.price)}</p>
              <p>Market Cap: {millify(coin.marketCap)}</p>
              <p>Daily Change: {millify(coin.change)}</p>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};

export default Currencies;
