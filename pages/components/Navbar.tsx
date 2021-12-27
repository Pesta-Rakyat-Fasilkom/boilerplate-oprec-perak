import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div>
      <div className="w-screen h-12 bg-yellow-200 flex justify-between items-center px-10 py-8">
        <div className="font-bold">
          <p>PESTA RAKYAT</p>
          <p>KOMPUTER</p>
        </div>
        <div className="hidden md:flex md:gap-5 font-semibold lg:gap-14">
          <a className="">
            <Link href="#">Score</Link>
          </a>
          <a className="">
            <Link href="#">Games Map</Link>
          </a>
          <a className="">
            <Link href="#">Team Profile</Link>
          </a>
          <a className="">
            <Link href="#">News</Link>
          </a>
          <a className="">
            <Link href="#">Explore Cafetaria</Link>
          </a>
          <a className="">
            <Link href="#">Merchandise</Link>
          </a>
        </div>
        <div className="md:hidden">
            <a className="font-semibold">
                <Link href="#">Pendaftaran</Link>
            </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
