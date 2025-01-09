import React from "react";
import { Link, useLocation } from "react-router-dom";
import tapep from "../assets/Fini dark.png";

function Sidebar() {
  const location = useLocation();
  return (
    <div className="w-full h-full bg-blue-900  rounded-tr-lg rounded-br-lg">
      <div className="h-20 flex shadow-lg">
        <div className="text-center text-4xl font-semibold text-white items-center m-auto">
          <img src={tapep} alt="" className="h-12" />
        </div>
      </div>
      <div className="flex flex-col mt-10">
        <Link
          to="/"
          className={`w-full flex px-5 py-2 mx-auto text-xl  rounded-tl-lg rounded-bl-lg hover:bg-base-100 duration-300 ${
            location.pathname === "/" ? "bg-base-100" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 my-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6a7.5 7.5 0 1 0 7.5 7.5h-7.5V6Z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 10.5H21A7.5 7.5 0 0 0 13.5 3v7.5Z"
            />
          </svg>

          <div className="my-auto pl-5">Dashboard</div>
        </Link>
        <Link
          to="/transaction"
          className={`w-full flex px-5 py-2 mx-auto text-xl  rounded-tl-lg rounded-bl-lg hover:bg-base-100 duration-300 ${
            location.pathname === "/transaction" ? "bg-base-100" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 my-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Z"
            />
          </svg>

          <div className="my-auto pl-5">Transaksi</div>
        </Link>
        <Link
          to="/employee"
          className={`w-full flex px-5 py-2 mx-auto text-xl  rounded-tl-lg rounded-bl-lg hover:bg-base-100 duration-300 ${
            location.pathname === "/employee" ? "bg-base-100" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-10 my-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z"
            />
          </svg>
          <div className="my-auto pl-5">Karyawan</div>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
