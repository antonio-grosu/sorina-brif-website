"use client";
"use client";

import { JSX, use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";
import React from "react";

type CardProps = {
  text: string;
  children: JSX.Element[];
};

export const Card = ({ text, children }: CardProps) => {
  return (
    <>
      <div className="px-3 py-4 flex gap-6 items-center bg-white rounded-lg">
        <div>{children}</div>
        <div className="flex jusify-center w-full">
          <h1 className="font-semibold text-center">{text}</h1>
        </div>
      </div>
    </>
  );
};
