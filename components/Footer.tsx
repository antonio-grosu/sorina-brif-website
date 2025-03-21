"use client";

import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-start md:items-center md:flex-row md:justify-between text-white bg-stone-800 py-12 px-8 w-full  h-auto">
        <div className="flex flex-col gap-4 items-start md:items-center md:items-start mb-12 md:mb-0">
          <h1 className="text-2xl font-semibold">Sorina Brif</h1>
          <p className="text-sm">Slogan</p>
          <p className="text-sm">Adresa</p>
        </div>
        <div className="flex flex-col md:flex-row gap-16">
          <div className="flex flex-col gap-2 items-start md:items-center">
            <p className="text-xl font-semibold">Link-urile mele</p>
            <Link href="/about" className="font-sm">
              Despre mine
            </Link>
            <Link href="/terapie" className="font-sm">
              Despre terapie
            </Link>
            <Link href={"/contact"} className="font-sm">
              Contact
            </Link>
          </div>
          <div className="flex flex-col items-start md:items-center gap-2">
            <p className="text-xl font-semibold">Linkuri sociale</p>
            <Link href={"instagram"} className="text-sm">
              Instagram
            </Link>
            <Link href={"facebook"} className="text-sm">
              Facebok
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
