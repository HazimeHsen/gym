"use client";
import React, { useState } from "react";
import Icon from "../../Buttons/Icon";
import Button from "../../Buttons/Button";
import Link from "next/link";

const Navbar = () => {
  // Mobile Menu State
  const [mobileMenu, setMobileMenu] = useState(false);
  // Menus List
  const menus = ["Home", "About", "Services", "Schedule", "Gallery", "Contact"];

  return (
    <div className="bg-[#00000080] py-4 fixed top-0 z-50 w-full">
      {/* Mobile Menu */}
      <div className="flex items-center justify-between mx-2 sm:mx-6 md:mx-10  lg:hidden ">
        <Link href="/">
          <img src="/assets/logo/logo.png" alt="Fitness one Logo" />
        </Link>
        <div className="mx-4">
          {mobileMenu ? (
            <button onClick={() => setMobileMenu(false)}>
              <Icon IconName="fa-solid fa-xmark" color="white" size="xl"></Icon>
            </button>
          ) : (
            <button onClick={() => setMobileMenu(true)}>
              <Icon IconName="fa-solid fa-bars" color="white" size="xl"></Icon>
            </button>
          )}
        </div>
        {mobileMenu && (
          <ul className="absolute bg-white w-[90%] top-20 -left-[20px] px-2 mx-10 pb-4">
            {menus.map((menu, index) => {
              return (
                <Link
                  href={menu === "Home" ? "/" : menu.toLowerCase()}
                  key={index}
                  className="font-roboto font-medium block px-4 py-2 mt-2 text-sm text-black hover:text-main text-xl font-light transition duration-300">
                  <li>{menu}</li>
                </Link>
              );
            })}
          </ul>
        )}
      </div>
      {/* Mobile Menu */}
      {/* Desktop Menu */}
      <div className="hidden lg:block ">
        <div className="flex items-center justify-between lg:mx-10 xl:mx-20  ">
          <div>
            <Link href="/">
              <img src="/assets/logo/logo.png" alt="Fitness one Logo" />
            </Link>
          </div>
          <div className="flex items-center ">
            {/* Menus */}

            <ul className="flex  ">
              {menus.map((menu, index) => {
                return (
                  <Link
                    href={menu === "Home" ? "/" : menu.toLowerCase()}
                    key={index}
                    className="font-roboto font-medium block px-4 py-2 mt-2 text-white hover:text-main text-xl font-light transition duration-300">
                    <li>{menu}</li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
      {/* Desktop Menu */}
    </div>
  );
};

export default Navbar;
