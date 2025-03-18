"use client";

import { use, useState } from "react";
import { useEffect } from "react";
import Link from "next/link";

interface TopPageProps {
  title: string;
  pozaUrl: string;
}

export const TopPage = (props: TopPageProps) => {
  return (
    <>
      <div
        className={`flex justify-center items-center w-full h-40  bg-center bg-no-repeat bg-fixed bg-cover`}
        style={{ backgroundImage: `url(${props.pozaUrl})` }}
      >
        <h1 className="text-5xl">{props.title}</h1>
      </div>
    </>
  );
};
