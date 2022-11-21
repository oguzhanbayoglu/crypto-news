import millify from "millify";
import React from "react";
import HTMLReactParser from "html-react-parser";
//
import { useParams } from "react-router-dom";
import { useGetCryptoDetailsQuery } from "../services/cryptoApi";
import { BiDollar } from "react-icons/bi";
import { FaSlackHash } from "react-icons/fa";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { AiOutlineStop } from "react-icons/ai";
import { AiOutlineTrophy } from "react-icons/ai";
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { RiFundsBoxLine } from "react-icons/ri";
import { RiMoneyCnyCircleLine } from "react-icons/ri";
//

const Details = () => {
  const { coinID } = useParams();
  const { data, isFetching } = useGetCryptoDetailsQuery(coinID);

  const cryptoDetails = data?.data?.coin;

  const vol = "24hVolume";
  console.log(data);
  console.log(cryptoDetails);

  if (isFetching) {
    return (
      <div className="w-full flex justify-center items-center h-[30rem]">
        <p>Loading</p>
      </div>
    );
  }

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${cryptoDetails?.price && millify(cryptoDetails?.price)}`,
      icon: <BiDollar />,
    },
    { title: "Rank", value: cryptoDetails?.rank, icon: <FaSlackHash /> },
    {
      title: "24h Volume",
      value: `$ ${cryptoDetails[vol] && millify(cryptoDetails[vol])}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${
        cryptoDetails?.marketCap && millify(cryptoDetails?.marketCap)
      }`,
      icon: <BiDollar />,
    },
    {
      title: "All-time-high",
      desc: " (daily avg.)",
      value: `$ ${
        cryptoDetails?.allTimeHigh?.price &&
        millify(cryptoDetails?.allTimeHigh?.price)
      }`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: cryptoDetails?.numberOfMarkets,
      icon: <RiFundsBoxLine />,
    },
    {
      title: "Number Of Exchanges",
      value: cryptoDetails?.numberOfExchanges,
      icon: <RiMoneyCnyCircleLine />,
    },
    {
      title: "Aprroved Supply",
      value: cryptoDetails?.supply?.confirmed ? (
        <div className="flex gap-4 items-center">
          <AiOutlineCheckCircle />
          <span className="!text-lg">Aprroved</span>
        </div>
      ) : (
        <div className="flex gap-4 items-center">
          <AiOutlineStop />
          <span className="!text-lg">Not Aprroved</span>
        </div>
      ),
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${
        cryptoDetails?.supply?.total && millify(cryptoDetails?.supply?.total)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${
        cryptoDetails?.supply?.circulating &&
        millify(cryptoDetails?.supply?.circulating)
      }`,
      icon: <AiOutlineExclamationCircle />,
    },
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-4">
      <div className="flex flex-col justify-center items-center my-16 relative">
        <img src={cryptoDetails.iconUrl} alt="img" className="h-20 mb-16" />
        <img
          src={cryptoDetails.iconUrl}
          alt="img"
          className="h-28 -top-4 absolute blur-3xl -z-10 opacity-70"
        />
        <h2 className="text-[4rem] font-bold">{cryptoDetails.name}</h2>
        <p>
          {cryptoDetails.name} live price in US Dollar (USD). View value
          statistics, market cap and supply.
        </p>
      </div>

      <div className="flex flex-col w-[80rem]  justify-center gap-4 mb-4">
        <div>
          <h3 className="font-bold text-2xl mb-2">
            {cryptoDetails.name} Value Statistics
          </h3>
          <p>
            An overview showing the statistics of {cryptoDetails.name}, such as
            the base and quote currency, the rank, and trading volume.
          </p>
        </div>
        <div className="stats h-32 ">
          {stats.map(({ icon, title, value, desc }) => (
            <div className="stat bg-base-300">
              <div className="stat-title flex gap-2 items-center">
                {icon} {title}
              </div>
              <div className="stat-desc mb-2 ml-6">{desc}</div>
              <div className="stat-value text-center">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col w-[80rem] justify-center gap-4">
        <div>
          <h3 className="font-bold text-2xl mb-2">Other Stats </h3>
        </div>
        <div className="stats  h-32 ">
          {genericStats.map(({ icon, title, value, desc }) => (
            <div className="stat bg-base-300">
              <div className="stat-title flex gap-2 items-center">
                {icon} {title}
              </div>
              <div className="stat-desc mb-2">{desc}</div>
              <div className="stat-value text-center">{value}</div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 p-8 max-w-[84rem] descript">
        <h3>What is {cryptoDetails.name}?</h3>
        {HTMLReactParser(cryptoDetails.description)}
      </div>
      <div className="flex flex-col gap-4 p-8 max-w-[84rem]">
        {cryptoDetails.links?.map((link) => (
          <div className="flex justify-between" key={link.name}>
            <h3 level={5} className=" mr-20 font-bold uppercase text-lg">
              {link.type}
            </h3>
            <a
              href={link.url}
              target="_blank"
              rel="noreferrer"
              className="font-light hover:underline"
            >
              {link.name}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Details;
