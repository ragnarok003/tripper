import React from "react";
import HomePage from "./pages/home/HomePage";
import Account from "./pages/account/Account";
import { Routes, Route } from "react-router-dom";
import GeneralInfo from "./pages/account/GeneralInfo";
import Orders from "./pages/account/Orders";

const App = () => {
  return (
    <div className="bg-#FoEBE4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
        <Route path="/account/generalinfo" element={<GeneralInfo />} />
        <Route path="/account/orders" element={<Orders />} />
        <Route path="/account/bookings" element={<Orders />} />
      </Routes>
    </div>
  );
};
export default App;