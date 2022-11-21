import React from "react";
import millify from "millify";
import { Link } from "react-router-dom";
import { useGetCryptosQuery } from "../services/cryptoApi";
import { Currencies, News } from "./";

const Home = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const stats = data?.data?.stats;
  console.log(data);

  if (isFetching) {
    return (
      <div className="flex justify-center items-center w-full h-full">
        <p>Loading</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 h-auto overflow-hidden">
      <div className="my-28 text-center">
        <h2 className="text-[3rem] font-bold mb-8">Global Crypto Stats</h2>
        <div className="stats stats-vertical lg:stats-horizontal">
          <div className="stat lg:w-[12.4rem] bg-base-300">
            <h3 className="stat-title">
              Total <span className="block font-bold">Cryptocurrencies</span>
            </h3>
            <p className="stat-value">{stats.total}</p>
          </div>
          <div className="stat lg:w-[12.4rem] bg-base-300">
            <h3 className="stat-title">
              Total <span className="block font-bold">Exchances</span>
            </h3>
            <p className="stat-value">{millify(stats.totalExchanges)}</p>
          </div>
          <div className="stat lg:w-[12.4rem] bg-base-300">
            <h3 className="stat-title">
              Total <span className="block font-bold">Market Capacity</span>
            </h3>
            <p className="stat-value">{millify(stats.totalMarketCap)}</p>
          </div>
          <div className="stat lg:w-[12.4rem] bg-base-300">
            <h3 className="stat-title">
              Total <span className="block font-bold">24h Volume</span>
            </h3>
            <p className="stat-value">{millify(stats.total24hVolume)}</p>
          </div>
          <div className="stat lg:w-[12.4rem] bg-base-300">
            <h3 className="stat-title">
              Total <span className="block font-bold">Markets</span>
            </h3>
            <p className="stat-value">{millify(stats.totalMarkets)}</p>
          </div>
        </div>
      </div>
      <div className="w-full lg:flex-row flex flex-col justify-center gap-2 px-4">
        <div className="xl:w-[60%] w-full">
          <div className="m-4 mb-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold ml-4">
                Top Cryptocurrencies in the World
              </h2>
              <p>
                <Link to="/currencies">Show more...</Link>
              </p>
            </div>
            <div className="overflow-scroll rounded-2xl h-[37rem] w-full -mb-4 grid lg:grid-cols-3 grid-cols-2 gap-4">
              <Currencies />
            </div>
          </div>
        </div>
        <div className="xl:w-[40%] w-full ">
          <div className="m-4 mb-0">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold ml-4">
                Latest Crypto News
              </h2>
              <Link to="/news">Show more...</Link>
            </div>
            <div className="overflow-scroll rounded-2xl h-[37rem] -mb-4 grid grid-cols-1 gap-4">
              <News />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
