"use client"
import Link from "next/link";
import { useState } from "react";
export default function Home() {
  const [dark,setDark] = useState(true)
  function toggleMode(){
    setDark(!dark)
  }
  return (
    <>
      <div
        className={` h-screen   mx-auto flex flex-col   justify-start items-center ${
          dark ? "bg-gray-900" : "bg-blue-100"
        }`}
      >
        <p
          className={` ${
            dark ? "text-zinc-200 " : "hover:text-zinc-950"
          } text-3xl`}
        >
          Web Builders.
        </p>
        <nav className=" flex flex-col  md:flex-row gap-10 justify-center items-start mt-20">
          <button
            onClick={toggleMode}
            className="px-6 py-3 bg-yellow-400 rounded-xl"
          >
            toggle Mode
          </button>
          <ul
            className={`flex flex-col md:flex-row gap-10 ${
              dark ? "text-zinc-200 " : "hover:text-zinc-950"
            }  `}
          >
            <li className="  ">
              <Link href="components/footer1">Footer 1</Link>
            </li>
            <li className="  ">
              <Link href="components/footer2">Footer 2</Link>
            </li>
            <li className="  ">
              <Link href="components/footer3">Footer 3</Link>
            </li>
            <li className="  ">
              <Link href="components/footer4">Footer 4</Link>
            </li>
            <li className="  ">
              <Link href="components/footer5">Footer 5</Link>
            </li>
            <li className="  ">
              <Link href="components/footer6">Footer 6</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
