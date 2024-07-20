"use client";
import { useState } from "react";
import ListComponent from "./ListComponent";
import Input from "./Input";
export default function Footer1() {
  const [dark, setDark] = useState(false);
  const toggleDark = () => {
    setDark(!dark);
  };
  const listHeadStyle = `${
    dark ? "text-zinc-200 " : "text-zinc-900"
  } font-bold`;
  ("text-lg font-semibold");
  const listStyles = `${
    dark ? "text-gray-300 " : "text-gray-600 "
  } text-sm  md:text-base `;
  return (
    <>
      <div
        className={`${
          dark ? "bg-gray-200" : "bg-slate-800"
        } h-screen w-screen `}
      >
        <div
          className={` py-10 md:py-12 ${
            dark ? " bg-zinc-900" : "bg-zinc-50"
          }  flex flex-col justify-start  w-screen text-white gap-10 rounded-b-3xl  `}
        >
          <button
            onClick={toggleDark}
            className={` ${dark ? "text-white" : "text-black"} ${
              dark ? "bg-zinc-500" : "bg-zinc-200"
            } w-fit rounded-xl   px-3 py-2  absolute`}
          >
            {dark ? "White" : "Dark"}
          </button>
          <footer className=" w-11/12 mx-auto  flex flex-col gap-10 pb-10">
            <div className="  flex flex-col md:flex-row gap-16 md:gap-10 xl:gap-16 border-b border-gray-700 pb-12 ">
              <div className=" flex flex-col gap-4 md:w-1/4">
                <p
                  className={`text-2xl font-semibold ${
                    dark ? "text-zinc-200" : "text-zinc-900"
                  }`}
                >
                  Sierra
                </p>
                <p className={`${listStyles} text-wrap w-full leading-6`}>
                  Our beautiful designs open the door to a realm of limitless
                  possibilities, where imagination knows no bounds.{" "}
                </p>{" "}
              </div>
              <div className=" flex flex-col gap-3 md:gap-6">
                <p className={listHeadStyle}>Features</p>
                <ul className="flex flex-col gap-2">
                  <li className={listStyles}>
                    {" "}
                    <ListComponent btnText="Page builder" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Theme Options" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText=" Theme Builder" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Theme Library" />
                  </li>
                </ul>
              </div>
              <div className=" flex flex-col gap-3 md:gap-6">
                <p className={listHeadStyle}>Resources</p>
                <ul className="flex flex-col gap-2">
                  <li className={listStyles}>
                    <ListComponent btnText="Support Center" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Documentation" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Community" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Hoting" />
                  </li>
                </ul>
              </div>
              <div className=" flex flex-col gap-3 md:gap-6">
                <p className={listHeadStyle}>Social</p>
                <ul className="flex flex-col gap-2">
                  <li className={listStyles}>
                    <ListComponent btnText="Behance" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Dribble" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Facebook" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Instagram" />
                  </li>
                </ul>
              </div>
              <Input dark={dark} />
            </div>
            <div
              className={`flex  flex-col gap-4 w-full text-sm md:text-base md:flex-row md:justify-between ${
                dark ? "text-zinc-100" : "text-zinc-700"
              }`}
            >
              <p className={`font-light `}>
                © KeyDesign WordPress Theme. All Rights Reserved.
              </p>
              <ul className="w-full flex justify-between md:w-fit gap-9">
                <li className="">Terms & Conditions </li>
                <li className=" ">Privacy Policy</li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
