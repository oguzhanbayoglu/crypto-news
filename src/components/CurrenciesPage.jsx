import React, { useState } from "react";
import Currencies from "./Currencies";

const CurrenciesPage = () => {
  const [searchTerm, setSearchTerm] = useState(null);

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="form-control my-6">
        <div className="input-group">
          <input
            type="text"
            placeholder="Search…"
            className="input input-bordered w-96"
            onChange={(e) => setSearchTerm(e.target.value.toLowerCase())}
          />
          <button className="btn btn-square ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 stroke-white fill-none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div className="grid xl:grid-cols-5 md:grid-cols-4 gap-4 p-4">
        <Currencies searchTerm={searchTerm} />
      </div>
    </div>
  );
};

export default CurrenciesPage;
