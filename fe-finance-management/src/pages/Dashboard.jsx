import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Dashboard() {
  const [error, setError] = useState(null);
  const [expanse, setExpanse] = useState(0);
  const [income, setIncome] = useState(0);
  const [dataEx, setDataEx] = useState([]);
  const [dataIn, setDataIn] = useState([]);
  const [pendapatan, setPendapatan] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/expenses");
        const responseIncome = await axios.get(
          "http://localhost:8080/api/transactions"
        );
        const transaction = response.data;
        const transactionIncome = responseIncome.data;
        setDataEx(transaction);
        setDataIn(transactionIncome);

        // Hitung total pengeluaran
        const totalExpanseAmount = transaction.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );

        // Hitung total pemasukan
        const totalRevenueAmount = transactionIncome.reduce(
          (acc, transactionIncome) => acc + transactionIncome.totalPrice,
          0
        );

        //Mencari total pendapatan
        const totalPendapatan = totalRevenueAmount - totalExpanseAmount;
        setPendapatan(totalPendapatan);

        setExpanse(totalExpanseAmount);
        setIncome(totalRevenueAmount);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full relative">
      <div className="h-20 flex shadow-lg">
        <div className="my-auto font-semibold text-4xl pl-14 text-primary">
          Dashboard
        </div>
      </div>

      <div className="stats bg-primary text-primary-content absolute left-1/4 top-1/3">
        <div className="stat">
          <div className="stat-title text-neutral font-semibold">
            Total Profit
          </div>
          <div className="stat-value"> Rp. {pendapatan.toLocaleString()} </div>
          <div className="stat-actions">
            {/* <button className="btn btn-sm btn-success">Add funds</button> */}
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-neutral font-semibold">
            Total Pemasukan
          </div>
          <div className="stat-value"> Rp. {income.toLocaleString()} </div>
          <div className="stat-actions">
            <Link to={"/transaction"} className="btn btn-sm">
              Tambah Transaksi
            </Link>
            <Link to={"/transactionData"} className="btn btn-sm ml-1">
              List Transaksi
            </Link>
          </div>
        </div>

        <div className="stat">
          <div className="stat-title text-neutral font-semibold">
            Total Pengeluaran
          </div>
          <div className="stat-value"> Rp. {expanse.toLocaleString()} </div>
          <div className="stat-actions">
            <Link to={"/expense"} className="btn btn-sm">
              Tambah Pengeluaran
            </Link>
            <Link to={"/expenseData"} className="btn btn-sm ml-1">
              List Pengeluaran
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
