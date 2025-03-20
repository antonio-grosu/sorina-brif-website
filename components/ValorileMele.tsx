"use client";

import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

export const ValorileMele = () => {
  return (
    <>
      <div className="w-full text-lg flex flex-col gap-12 md:gap-18 p-20 text-center md:text-start md:p-28 bg-rose-100 items-center md:items-start">
        <div className="md:w-7/18">
          <h1 className="font-bold mb-8 text-3xl">Valorile mele</h1>
          <p className="">
            Ma ghidez dupa principii clare in tot ceea ce fac. In activitatea
            mea terapeutica, pun accent pe:
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 ">
          <div className="md:w-1/2">
            <h2 className="font-semibold mb-4">Empatie si ascultare activa</h2>
            <p className="ml-4">
              Fiecare poveste este importanta si merita sa fie auzita fara
              judecata.
            </p>
            <h2 className="mt-12 font-semibold mb-4">
              Autenticitate si profesionalism
            </h2>
            <p className="ml-4">
              Imbin cunostiintele stiintifice cu experienta practica pentru a
              oferi sprijin real si eficient.
            </p>
          </div>
          <div className="md:w-1/2">
            <h2 className="font-semibold mb-4">Respect si confidentialitate</h2>
            <p className="ml-4">
              Fiecare persoana are dreptul la un spatiu sigur unde sa se exprime
              liber.
            </p>
            <h2 className="mt-12 font-semibold mb-4">Crestere continua</h2>
            <p className="ml-4">
              Sunt dedicata invatarii si dezvoltarii profesionale pentru a oferi
              cele mai bune metode terapeutice clientilor mei.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
