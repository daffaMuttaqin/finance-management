import React, { useState } from "react";
import axios from "axios";

function Transaction() {
  // State untuk daftar menu dan harga
  const [menuItems, setMenuItems] = useState([
    { name: "Kopi Susu Gula Aren (Small)", price: 20000 },
    { name: "Kopi Susu Gula Aren (Large)", price: 25000 },
    { name: "Es Teh Tarik", price: 15000 },
    { name: "Coffee Latte", price: 28000 },
    { name: "Matcha Latte", price: 30000 },
    { name: "Nasi Goreng Spesial", price: 35000 },
    { name: "Pasta Aglio e Olio (Regular)", price: 40000 },
    { name: "Pasta Aglio e Olio (Large)", price: 45000 },
    { name: "Pancake (2 pcs)", price: 32000 },
    { name: "Chicken Wings (6 pcs)", price: 35000 },
    { name: "Salad (Caesar)", price: 38000 },
    { name: "Salad (Nasi)", price: 42000 },
  ]);

  // State untuk pilihan pengguna
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [progress, setProgress] = useState(100);

  // Fungsi untuk menangani perubahan pilihan
  const handleSelectChange = (e) => {
    const selected = menuItems.find((item) => item.name === e.target.value);
    setSelectedItem(selected);
    calculateTotalPrice(selected, quantity);
  };

  // Fungsi untuk menangani perubahan jumlah
  const handleQuantityChange = (e) => {
    const qty = parseInt(e.target.value);
    setQuantity(qty);
    calculateTotalPrice(selectedItem, qty);
  };

  // Fungsi untuk menghitung total harga
  const calculateTotalPrice = (item, qty) => {
    if (item && qty > 0) {
      setTotalPrice(item.price * qty);
    } else {
      setTotalPrice(0);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (selectedItem && quantity > 0) {
      const transactionData = {
        productName: selectedItem.name,
        quantity: quantity,
        totalPrice: totalPrice,
      };

      axios
        .post("http://localhost:8080/api/transactions", transactionData)
        .then((response) => {
          console.log("Transaction successful:", response.data);
          setIsModalOpen(true); // Tampilkan modal
          setProgress(150); // Reset progress bar
          let progressValue = 150;
          const interval = setInterval(() => {
            progressValue -= 10; // Turunkan nilai progress bar
            setProgress(progressValue);
            if (progressValue <= 0) {
              clearInterval(interval);
              setIsModalOpen(false); // Sembunyikan modal setelah 150ms
              resetForm(); // Reset form setelah transaksi
            }
          }, 150); // Update setiap 150ms
        })
        .catch((error) => {
          console.error("There was an error creating the transaction!", error);
        });
    } else {
      alert("Silahkan pilih menu dan masukkan jumlah yang valid.");
    }
  };

  // Fungsi untuk mereset form
  const resetForm = () => {
    setSelectedItem(null);
    setQuantity(0);
    setTotalPrice(0);
  };

  return (
    <div>
      <div className="h-20 flex shadow-lg">
        <div className="my-auto font-semibold text-4xl pl-14 text-primary">
          Transaksi
        </div>
      </div>
      <div className="pl-14">
        <div className="text-primary text-center mt-10 text-4xl">
          Tambah Transaksi
        </div>

        {/* FORM */}
        <form className="mt-28 w-full text-center" onSubmit={handleSubmit}>
          <label className="form-control w-full max-w-xs mx-auto">
            <div className="label">
              <span className="label-text">Menu</span>
            </div>
            <select
              className="select select-primary w-full max-w-xs"
              value={selectedItem ? selectedItem.name : ""}
              onChange={handleSelectChange}
            >
              <option value="" disabled selected={!selectedItem}>
                Makanan dan Minuman
              </option>
              {menuItems.map((item, index) => (
                <option key={index} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </label>

          <label className="form-control w-full max-w-xs mx-auto mt-5">
            <div className="label">
              <span className="label-text">Jumlah?</span>
            </div>
            <input
              type="number"
              placeholder="0"
              className="input input-bordered w-full max-w-xs"
              value={quantity}
              onChange={handleQuantityChange}
            />
          </label>

          <div>
            <div className="stat place-items-center">
              <div className="stat-title">Total Harga</div>
              <div className="stat-value text-primary">
                {totalPrice.toLocaleString()}
              </div>
              <input type="text" className="hidden" />
            </div>
          </div>

          <button
            type="submit"
            className="btn btn-active w-full max-w-xs btn-primary"
          >
            Bayar
          </button>
        </form>
        {/* END FORM */}
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Terima kasih sudah belanja!</h3>
            <progress
              className="progress progress-primary w-full"
              value={progress}
              max="150"
            ></progress>
          </div>
        </div>
      )}
    </div>
  );
}

export default Transaction;
