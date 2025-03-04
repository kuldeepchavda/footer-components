"use client";
import { useState } from "react";
import ListComponent from "./ListComponent";
export default function Footer2() {
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
      <div className={`${dark?"bg-gray-200":"bg-slate-800"} h-screen w-screen `}>
        <div
          className={` py-10 md:pb-24 ${
            dark ? " bg-zinc-900" : "bg-zinc-50"
          }  flex flex-col justify-start  w-screen text-white gap-10 rounded-b-3xl  `}
        >
          <button
            onClick={toggleDark}
            className={` ${dark ? "text-white" : "text-black"} ${
              dark ? "bg-zinc-500" : "bg-zinc-200"
            } w-fit rounded-xl   px-3 py-2 absolute `}
          >
            {dark ? "White" : "Dark"}
          </button>
          <footer className=" w-11/12 xl:w-10/12 mx-auto  flex flex-col gap-10  pb-10">
            <div className="  flex flex-col md:flex-row gap-16 md:gap-10 xl:gap-28 border-b border-gray-700 pb-12 ">
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
                <p className={listHeadStyle}>Product</p>
                <ul className="flex flex-col gap-2">
                  <li className={listStyles}>
                    <ListComponent btnText="Pricing" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Templates" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Developer API" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Release Notes" />
                  </li>
                </ul>
              </div>
              <div className=" flex flex-col gap-3 md:gap-6">
                <p className={listHeadStyle}>Company</p>
                <ul className="flex flex-col gap-2">
                  <li className={listStyles}>
                    <ListComponent btnText="About Us" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Latest News" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Contact Us" />
                  </li>
                  <li className={listStyles}>
                    <ListComponent btnText="Resources" />
                  </li>
                </ul>
              </div>
              <div className=" flex flex-col gap-3 md:gap-6">
                <p className={listHeadStyle}>Follow Us</p>
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
            </div>
            <div
              className={`flex  flex-col gap-4 w-full text-sm md:text-base md:flex-row md:justify-between ${
                dark ? "text-zinc-100" : "text-zinc-700"
              }`}
            >
              <p
                className={`text-2xl font-semibold ${
                  dark ? "text-zinc-200" : "text-zinc-900"
                }`}
              >
                Sierra
              </p>
              <p className={`font-light `}>
                © KeyDesign WordPress Theme. All Rights Reserved.
              </p>
              <ul
                className={`flex gap-3 ${
                  dark ? "text-zinc-200" : "text-zinc-950"
                }`}
              >
                <li className=" hover:-translate-y-1 cursor-pointer transition-transform hover:text-violet-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-instagram"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    ></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </li>
                <li className="hover:-translate-y-1 transition-transform hover:text-violet-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="feather feather-twitter "
                  >
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                  </svg>
                </li>
                <li className="hover:-translate-y-1 transition-transform hover:text-violet-800">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className=" feather feather-facebook"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </li>
              </ul>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
}
