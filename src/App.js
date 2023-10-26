import React from "react";
import HomePage from "./pages/home/HomePage";
import Account from "./pages/account/Account";
import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
    <div className="bg-#FoEBE4">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
};
export default App;