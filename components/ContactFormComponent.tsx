"use client";

import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export const ContactFormComponent = () => {
  const [nameValue, setNameValue] = useState("");
  const [mail, setMailValue] = useState("");
  const [mesajValue, setMesajValue] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNameValue(e.target.value);
    console.log(nameValue);
  };

  return (
    <>
      <div className=" bg-rose-100 text-black px-20 md:px-0">
        <form action="" className="w-full">
          {/*  */}
          <div className="flex flex-col items-center md:items-start gap-10">
            <div className="flex flex-col md:flex-row md:justify-between gap-10 md:gap-20 h-full w-full">
              <div className="flex flex-col gap-10">
                <div className="flex flex-col  gap-4">
                  <label htmlFor="name" className="font-semibold">
                    Nume
                  </label>
                  <input
                    className="bg-white pl-10 pr-12 py-2 rounded-md"
                    type="text"
                    id="name"
                    placeholder="ex.Ion Popescu"
                    value={nameValue}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex flex-col gap-4 ">
                  <label htmlFor="mail" className="font-semibold">
                    Email
                  </label>
                  <input
                    type="mail"
                    className="bg-white py-2 pl-10 rounded-md"
                    id="mail"
                    placeholder="ex.ion.popescu@gmail.com"
                  />
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <label htmlFor="mesaj" className="font-semibold">
                  Mesaj
                </label>
                <textarea
                  name="mesaj"
                  id="mesaj"
                  className="bg-white h-full rounded-md px-10 resize-none"
                ></textarea>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="bg-red-700 text-white font-semibold rounded-lg px-16 py-2 text-center"
              >
                Sumbit
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};
