import React, { useState, useEffect } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";

function ExpenseData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [itemIdToDelete, setItemIdToDelete] = useState(null);
  const [totalTransactions, setTotalTransactions] = useState(0);
  const [totalRevenue, setTotalRevenue] = useState(0);
  const [summary, setSummary] = useState({
    totalTransactions: 0,
    totalRevenue: 0,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/expenses");
        const transaction = response.data;
        setData(transaction);
        calculateSummary(transaction);

        // Hitung total transaksi
        const totalTransactionsCount = transaction.length;

        // Hitung total pengeluaran
        const totalRevenueAmount = transaction.reduce(
          (acc, transaction) => acc + transaction.amount,
          0
        );

        setTotalTransactions(totalTransactionsCount);
        setTotalRevenue(totalRevenueAmount);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle Search
  const filteredData = data.filter((deskripsi) =>
    deskripsi.description.toLowerCase().includes(search.toLowerCase())
  );

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/expenses/${id}`);
      const updatedData = data.filter((item) => item.id !== id);
      setData(updatedData);
      calculateSummary(updatedData); // Update the summary after deleting an item
      setItemIdToDelete(null);
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  // Menghitung ulang ringkasan saat ada data dihapus
  const calculateSummary = (transactions) => {
    const totalTransactions = transactions.length;
    const totalRevenue = transactions.reduce(
      (sum, item) => sum + item.amount,
      0
    );

    setSummary({
      totalTransactions,
      totalRevenue,
    });
  };

  if (loading)
    return <span className="loading loading-spinner text-primary"></span>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <div className="h-20 flex shadow-lg">
        <div className="my-auto font-semibold text-4xl pl-14 text-primary">
          Data Pengeluaran
        </div>
      </div>

      {/* Ringkasan */}
      <div className="w-1/2 mt-3 mx-auto">
        <div className="stats shadow w-full text-center">
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z"
                />
              </svg>
            </div>
            <div className="stat-title">Jumlah Pengeluaran</div>
            <div className="stat-value"> {summary.totalTransactions} </div>
          </div>
          <div className="stat">
            <div className="stat-figure text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="inline-block h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
            </div>
            <div className="stat-title">Total Pengeluaran</div>
            <div className="stat-value">
              {" "}
              Rp. {summary.totalRevenue.toLocaleString()}{" "}
            </div>
          </div>
        </div>
      </div>

      <div className="pl-14">
        <div className="text-primary mt-5 text-4xl">Pengeluaran Terbaru</div>
      </div>

      {/* Search */}
      <div className="w-full flex justify-between">
        <label htmlFor=""></label>
        <label className="input input-bordered w-1/4 flex items-center gap-2 mr-14">
          <input
            type="text"
            className="grow"
            placeholder="Cari"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
        </label>
      </div>

      {/* TABLE */}
      <div className="h-[550px] mt-3 overflow-x-auto px-14">
        <table className="table table-lg table-pin-rows">
          <thead>
            <tr>
              <th>No</th>
              <th>Waktu Transaksi</th>
              <th>Deskripsi Pengeluaran</th>
              <th>Harga</th>
              <th className="text-center">Aksi</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td> {index + 1} </td>
                  <td>
                    {" "}
                    {moment(item.expenseTime).format(
                      "D MMMM YYYY, HH:mm:ss"
                    )}{" "}
                  </td>
                  <td> {item.description} </td>
                  <td> Rp. {item.amount.toLocaleString()} </td>
                  <td className="text-center">
                    <button
                      className="btn btn-outline btn-error"
                      onClick={() => setItemIdToDelete(item.id)}
                    >
                      Delete
                    </button>

                    <dialog
                      id="deleteModal"
                      className="modal"
                      open={itemIdToDelete === item.id}
                    >
                      <div className="modal-box">
                        <h3 className="font-bold text-lg">
                          Apakah kamu yakin ingin menghapus data ini?
                        </h3>
                        <button
                          className="btn w-16 mx-2 mt-10 btn-error"
                          onClick={() => handleDelete(item.id)}
                        >
                          Iya
                        </button>
                        <button
                          className="btn w-16 mx-2 btn-success"
                          onClick={() => setItemIdToDelete(null)}
                        >
                          Tidak
                        </button>
                      </div>
                      <form method="dialog" className="modal-backdrop">
                        <button>close</button>
                      </form>
                    </dialog>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  Deskripsi tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ExpenseData;
