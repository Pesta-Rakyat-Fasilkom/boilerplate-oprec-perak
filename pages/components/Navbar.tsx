import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="fixed">
      <div className="w-screen h-12 bg-navbar flex justify-between items-center px-10 py-8">
        <a className="font-bold cursor-pointer">
          <Link href="#">
            <div>
              <p>PESTA RAKYAT</p>
              <p>KOMPUTER</p>
            </div>
          </Link>
        </a>
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
