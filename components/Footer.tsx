"use client";

import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export const Footer = () => {
  return (
    <>
      <div className="flex flex-col items-center md:flex-row md:justify-between text-white bg-stone-800 py-12 px-8 w-full  h-auto">
        <div className="flex flex-col gap-4 items-center md:items-start mb-12 md:mb-0">
          <h1 className="text-2xl">Sorina Brif</h1>
          <p>Slogan</p>
          <p>Adresa</p>
        </div>
        <div className="flex gap-16">
          <div className="flex flex-col gap-2 items-center">
            <p className="text-xl">Link-urile mele</p>
            <Link href="/about">Despre mine</Link>
            <Link href="/terapie">Despre terapie</Link>
            <Link href={"/contact"}>Contact</Link>
          </div>
          <div className="flex flex-col items-center gap-2">
            <p className="text-xl">Linkuri sociale</p>
            <Link href={"instagram"}>Instagram</Link>
            <Link href={"facebook"}>Facebok</Link>
          </div>
        </div>
      </div>
    </>
  );
};
