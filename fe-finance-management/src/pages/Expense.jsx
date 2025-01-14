import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Expense() {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newExpense = {
      description: description,
      amount: price,
    };

    try {
      await axios.post("http://localhost:8080/api/expenses", newExpense);
      navigate("/expenseData");
    } catch (error) {
      setError(error);
    }
  };

  const handlePriceChange = (e) => {
    const value = parseInt(e.target.value);
    setPrice(value);
  };

  return (
    <div>
      <div className="h-20 flex shadow-lg">
        <div className="my-auto font-semibold text-4xl pl-14 text-primary">
          Tambah Pengeluaran
        </div>
      </div>

      <div className="pl-14">
        <div className="text-primary text-center mt-10 text-4xl">
          Tambah Pengeluaran
        </div>
        {/* FORM */}
        <form className="mt-28 w-full text-center" onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs mx-auto">
            <div className="label">
              <span className="label-text">Deskripsi Pengeluaran</span>
            </div>
            <input
              type="text"
              placeholder="Deskripsi pengeluaran"
              className="input input-bordered w-full max-w-xs"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
            />
            <div className="label"></div>
          </label>

          <label className="form-control w-full max-w-xs mx-auto">
            <div className="label">
              <span className="label-text">Harga</span>
            </div>
            <input
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
              value={price}
              onChange={handlePriceChange}
              required
            />
          </label>

          <button
            type="submit"
            className="btn btn-active w-full max-w-xs mt-5 btn-primary"
          >
            Tambahkan
          </button>
        </form>
        {/* END FORM */}
      </div>
    </div>
  );
}

export default Expense;
