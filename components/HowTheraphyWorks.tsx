"use client";

import { JSX, use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import React from "react";

type CardProps = {
  text: string;
  children: JSX.Element[];
};

const Card = ({ text, children }: CardProps) => {
  return (
    <>
      <div className="px-3 py-4 bg-blue-200 flex gap-6 items-center bg-white rounded-lg">
        <div>{children}</div>
        <div className="flex jusify-center w-full">
          <h1 className="font-semibold text-center">{text}</h1>
        </div>
      </div>
    </>
  );
};
export const HowTheraphyWorks = () => {
  return (
    <>
      <div className="flex flex-col md:block w-full md:pl-20 md:pr-30 lg:pr-40 bg-rose-100 py-12 px-12">
        <div >
          <h1 className="text-3xl font-bold w-full">Cum functioneaza terapia?</h1>
        </div>
        <div className="flex flex-col md:flex-row md:justify-between gap-8">
          <div className="flex flex-col gap-8 mt-12 md:mt-20">
            <Card text="Programarea unei sesiunii">
              {[<div key="1">daaa</div>]}
            </Card>
            <Card text="Explorarea nevoilor tale">
              {[<div key="2">daaa</div>]}
            </Card>
            <Card text="Stabilirea unui plan">{[<div key="3">daaa</div>]}</Card>
            <Card text="Procesul de schimbare">
              {[<div key="4">daaa</div>]}
            </Card>
          </div>
          <div className="md:mt-10 leading-[2.5] md:max-w-3/5">
            Contacteaza-ma pentru a stabili o prima intalnire. In prima sedinta,
            vom discuta despre dificultatile tale si obiectivele tale. Vom lucra
            impreuna pentru a gasi cele mai potrivite metode care sa to ajute.
            Prin sesiuni regulate, vei invata sa iti gestionezi emotiile si sa
            aplici in viata de zi cu zi ceea ce descoperim impreuna.
          </div>
        </div>
      </div>
    </>
  );
};
