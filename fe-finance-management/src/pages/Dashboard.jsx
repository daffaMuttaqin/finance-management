import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import "moment/locale/id";

moment.locale("id");

function Dashboard() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [itemIdToDelete, setItemIdToDelete] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8080/api/transactions"
        );
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // Handle Search
  const filteredData = data.filter((product) =>
    product.productName.toLowerCase().includes(search.toLowerCase())
  );

  // Handle Delete
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/api/transactions/${id}`);
      setData(data.filter((item) => item.id !== id)); // Hapus item dari state
      setItemIdToDelete(null); // Reset state ID yang akan dihapus
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="">
      <div className="h-20 flex shadow-lg">
        <div className="my-auto font-semibold text-4xl pl-14 text-primary">
          Dashboard
        </div>
      </div>
      <div className="pl-14">
        <div className="text-primary mt-10 text-4xl">Transaksi Terbaru</div>
      </div>

      <div className="w-full flex justify-between">
        {/* Dummy Label */}
        <label htmlFor=""></label>
        {/* End Dummy Label */}
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
      <div className="h-[650px] mt-10 overflow-x-auto px-14">
        <table className="table table-lg table-pin-rows">
          <thead>
            <tr>
              <th>No</th>
              <th>Waktu Transaksi</th>
              <th>Nama Produk</th>
              <th className="text-center">Jumlah</th>
              <th>Dibayar</th>
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
                    {moment(item.transactionTime).format(
                      "D MMMM YYYY, HH:mm:ss"
                    )}{" "}
                  </td>
                  <td> {item.productName} </td>
                  <td className="text-center"> {item.quantity} </td>
                  <td> {item.totalPrice} </td>
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
                  Produk tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
