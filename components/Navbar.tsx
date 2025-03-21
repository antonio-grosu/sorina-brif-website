"use client";

import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
export const Navbar = () => {
  const [display, setDisplay] = useState(false);
  const [animate, setAnimate] = useState(false);

  function onClick() {
    setDisplay(true);
  }

  // useEffect(() => {
  //   document.addEventListener("click", (e) => {
  //     let menu = document.getElementById("menu2");
  //     let buton = document.getElementById("buton");
  //     if (e.target != buton && e.target != menu) {
  //       setDisplay(false);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    setTimeout(() => {
      setAnimate(display);
    }, 0);
  }, [display]);

  return (
    <>
      <nav className="hidden bg-rose-100 shadow-sm md:flex justify-between items-center px-16 py-3">
        <div className="flex items-center justify-center text-center">
          <Link
            href={"/"}
            className="hover:text-red-700 font-bold transition-all"
          >
            Sorina Brif
          </Link>
        </div>
        <div className="flex gap-4">
          <Link href={"/"} className="p-2 hover:text-red-700 transition-all">
            Acasa
          </Link>
          <Link
            href={"/about"}
            className="p-2 hover:text-red-700 transition-all"
          >
            Despre mine
          </Link>
          <Link
            href={"/terapie"}
            className="p-2 hover:text-red-700 transition-all"
          >
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

      <nav className="md:hidden bg-rose-100 shadow-sm relative flex justify-between items-center px-4 py-2 pr-1">
        <div className="cursor-pointer font-bold">Sorina Brif</div>
        <button
          onClick={onClick}
          className="flex items-center cursor-pointer justify-center p-1"
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
      {display && (
        <div
          className={`
          transition-all ease-in duration-300
          flex top-0 md:hidden bg-black/50  w-full min-h-screen absolute `}
          onClick={(e) => {
            let burger = document.getElementById("burger");
            if (e.target != burger) {
              setAnimate(false);
              setTimeout(() => {
                setDisplay(false);
              }, 300);
            }
          }}
        >
          {display && (
            <div
              id="burger"
              className={`absolute -right-7/12 transform transition-transform ease-in-out duration-500 ${
                animate ? "-translate-x-full" : " translate-x-full "
              } w-7/12 bg-rose-100 flex flex-col items-start min-h-screen gap-4 px-4 pt-4`}
            >
              <h1 className="p-2 font-bold mb-4">Sorina Brif</h1>
              <div className="flex flex-col gap-2 mb-8 w-full">
                <h2 className="border-b border-black border-solid w-full p-2 font-semibold">
                  Pagini
                </h2>
                <Link
                  href={"/"}
                  className="px-2 hover:text-red-700 bg-blue transition-all"
                >
                  Acasa
                </Link>
                <Link
                  href={"/about"}
                  className="px-2 hover:text-red-700 transition-all"
                >
                  Despre mine
                </Link>
                <Link
                  href={"/terapie"}
                  className="px-2 hover:text-red-700 transition-all"
                >
                  Despre terapie
                </Link>
              </div>
              <div className="w-full flex flex-col gap-2 items-center">
                <h2 className="font-semibold p-2 mb-2 w-full border-b border-black border-solid">
                  Contacti-ma
                </h2>
                <Link
                  href={"/contact"}
                  className="py-2 px-6 w-full text-center bg-red-700 text-white rounded-lg"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};
