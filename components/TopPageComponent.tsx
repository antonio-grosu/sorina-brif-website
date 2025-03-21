"use client";

import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

interface TopPageProps {
  title: string;
  pozaUrl: string;
}

export const TopPageComponent = (props: TopPageProps) => {
  return (
    <>
      <div
        className={`z-100 relative flex justify-center items-center w-full h-40  bg-center bg-no-repeat bg-fixed bg-cover`}
        style={{ backgroundImage: `url(${props.pozaUrl})` }}
      >
        <h1 className="text-5xl text-rose-100">{props.title}</h1>
        <div className="w-full absolute top-0 left-0 h-full bg-gray-100/5 z-400"></div>
      </div>
    </>
  );
};
