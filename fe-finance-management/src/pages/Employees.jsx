import React, { useState } from "react";

function Employees({ employee }) {
  const [search, setSearch] = useState("");

  // Handle Search
  const filteredData = employee.filter((employees) =>
    employees.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <div className="h-20 flex shadow-lg">
        <div className="my-auto font-semibold text-4xl pl-14 text-primary">
          Karyawan
        </div>
      </div>

      <div className="pl-14">
        <div className="text-primary mt-10 text-4xl">Karyawan Perusahaan</div>
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
      <div className="h-[650px] mt-3 overflow-x-auto px-14">
        <table className="table table-lg table-pin-rows">
          <thead>
            <tr>
              <th>No</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Tanggal Lahir</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item, index) => (
                <tr key={item.id}>
                  <td> {index + 1} </td>
                  <td>{item.name}</td>
                  <td> {item.address} </td>
                  <td> {item.birth} </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center">
                  Karyawan tidak ditemukan
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
