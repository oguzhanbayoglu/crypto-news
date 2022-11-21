import React from "react";
import { Navbar, NewsPage, CurrenciesPage, Details, Home } from "./components";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/crypto/:coinID" element={<Details />} />
          <Route path="/currencies" element={<CurrenciesPage />} />
          <Route path="/news" element={<NewsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
