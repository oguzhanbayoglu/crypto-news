import React, { useState } from "react";
import { useGetCryptosQuery } from "../services/cryptoApi";
import News from "./News";

const NewsPage = () => {
  const [newsCategory, setNewsCategory] = useState("Cryptocurrency");
  const { data } = useGetCryptosQuery();

  return (
    <div className="flex flex-col gap-4 justify-center items-center mt-4 p-4">
      <select
        className="select select-bordered w-full max-w-xs"
        onChange={(e) => setNewsCategory(e.target.value.toLowerCase())}
      >
        <option value="cryptocurrency">Cryptocurrency</option>
        {data?.data?.coins?.map((currency) => (
          <option value={currency.name}>{currency.name}</option>
        ))}
      </select>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
        <News newsCategory={newsCategory} />
      </div>
    </div>
  );
};

export default NewsPage;
