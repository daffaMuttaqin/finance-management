import { useState } from "react";
import Dashboard from "./pages/Dashboard";
import Transaction from "./pages/Transaction";
import Sidebar from "./components/Sidebar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import Employees from "./pages/Employees";

function App() {
  const [employee, setEmployee] = useState([
    {
      id: 0,
      name: "Ahmad Rifai",
      address: "Jl. Sudirman No. 123, Medan",
      birth: "1990-01-01",
    },
    {
      id: 1,
      name: "Siti Nurhayati",
      address: "Jl. Gatot Subroto No. 456, Medan",
      birth: "1992-02-02",
    },
    {
      id: 2,
      name: "Muhammad Iqbal",
      address: "Jl. Jendral Sudirman No. 789, Medan",
      birth: "1994-03-03",
    },
    {
      id: 3,
      name: "Nurul Hidayah",
      address: "Jl. Adam Malik No. 1011, Medan",
      birth: "1996-04-04",
    },
    {
      id: 4,
      name: "Dimas Prasetyo",
      address: "Jl. T Amir Hamzah No. 1213, Medan",
      birth: "1998-05-05",
    },
    {
      id: 5,
      name: "Ayu Lestari",
      address: "Jl. S Parman No. 1415, Medan",
      birth: "2000-06-06",
    },
    {
      id: 6,
      name: "Andi Saputra",
      address: "Jl. Veteran No. 1617, Medan",
      birth: "2002-07-07",
    },
    {
      id: 7,
      name: "Putri Rahmawati",
      address: "Jl. Pangeran Diponegoro No. 1819, Medan",
      birth: "2004-08-08",
    },
    {
      id: 8,
      name: "Rizky Maulana",
      address: "Jl. Imam Bonjol No. 2021, Medan",
      birth: "2006-09-09",
    },
    {
      id: 9,
      name: "Intan Permata Sari",
      address: "Jl. Raden Saleh No. 2223, Medan",
      birth: "2008-10-10",
    },
  ]);
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
            <Route path="/" element={<Dashboard employee={employee} />} />
            <Route path="/transaction" element={<Transaction />} />
            <Route
              path="/employee"
              element={<Employees employee={employee} />}
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
