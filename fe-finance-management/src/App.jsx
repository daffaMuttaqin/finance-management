import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <BrowserRouter className="w-full h-full">
      <div className="flex">
        {/* Sidebar */}
        <div className="w-2/12 h-screen ">
          <Sidebar />
        </div>
        {/* End Sidebar */}
        <div className="w-10/12">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
