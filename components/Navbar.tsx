"use client";

import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
export const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [count, setCount] = useState(0);

  function onClick() {
    setDisplay(true);
    setCount(count + 1);
  }

  useEffect(() => {
    document.addEventListener("click", (e) => {
      let menu = document.getElementById("menu2");
      let buton = document.getElementById("buton");
      if (e.target != buton && e.target != menu) {
        setDisplay(false);
      }
    });
  }, []);

  return (
    <>
      <nav className="hidden md:flex justify-between items-center px-16 py-3">
        <div className="flex items-center justify-center text-center">
          Sorina Brif
        </div>
        <div className="flex gap-4">
          <Link href={"/acasa"} className="p-2">
            Acasa
          </Link>
          <Link href={"/about"} className="p-2">
            Despre mine
          </Link>
          <Link href={"/terapie"} className="p-2">
            Despre terapie
          </Link>
          <Link
            href={"/contact"}
            className="py-2 px-6 bg-red-700 text-white rounded-lg"
          >
            Contact
          </Link>
        </div>
      </nav>

      <nav className="md:hidden relative flex justify-between items-center px-4 py-2 pr-1">
        <div>Sorina Brif</div>
        <button
          onClick={onClick}
          className="flex items-center justify-center p-1"
        >
          <svg
            id="buton"
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              id="menu2"
              stroke="black"
              strokeLinecap="round"
              strokeWidth="2"
              d="M5 7h14M5 12h14M5 17h14"
            />
          </svg>
        </button>
      </nav>
      <div
        className={`
          transition-all ease-in duration-500
          ${
            display ? "opacity-100" : "opacity-0 pointer-events-none"
          } flex top-0 md:hidden bg-black/50  w-full min-h-screen absolute `}
      >
        <div className="absolute right-0 w-7/12 bg-blue-200 flex flex-col items-start min-h-screen gap-4 px-4 pt-4">
          <Link href={"/acasa"} className="p-2">
            Acasa
          </Link>
          <Link href={"/about"} className="p-2">
            Despre mine
          </Link>
          <Link href={"/terapie"} className="p-2">
            Despre terapie
          </Link>
          <Link
            href={"/contact"}
            className="py-2 px-6 w-full text-center bg-red-700 text-white rounded-lg"
          >
            Contact
          </Link>
        </div>
      </div>
    </>
  );
};
