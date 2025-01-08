import React from "react";
import { Link } from "react-router-dom";
import tapep from "../assets/Fini dark.png";

function Sidebar() {
  return (
    <div className="w-full h-full bg-blue-900 shadow-xl rounded-tr-lg rounded-br-lg">
      <div className="h-20 flex shadow-lg">
        <div className="text-center text-4xl font-semibold text-white items-center m-auto">
          <img src={tapep} alt="" className="h-12" />
        </div>
      </div>
      <div className="flex flex-col h-full mt-10">
        <Link
          to={"/"}
          className="w-full flex px-5 py-2  mx-auto text-xl  text-slate-200 rounded-tl-lg  rounded-bl-lg hover:bg-base-100 duration-300"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-10 my-auto"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
            />
          </svg>
          <div className="my-auto pl-5">Dashboard</div>
        </Link>
        <Link
          to={"/transaction"}
          className="w-full flex px-5 py-2  mx-auto text-xl  text-slate-200 rounded-tl-lg  rounded-bl-lg hover:bg-base-100 duration-300"
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
      </div>
    </div>
  );
}

export default Sidebar;
