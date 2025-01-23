import React from "react";
import { Link } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { IoSearchOutline } from "react-icons/io5";
import { CiUser } from "react-icons/ci";
import { IoIosHeartEmpty } from "react-icons/io";
import { CiShoppingCart } from "react-icons/ci";
import avatarImg from "../assets/avatar.png";
import { useState } from "react";

const navigation = [
  { name: "Dashboard", href: "/dashboard" },
  { name: "Orders", href: "/orders" },
  { name: "Cart", href: "/cart" },
  { name: "Check Out", href: "/checkout" },
];

function Navbar() {
  const currentUser = false;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  return (
    <header className="max-w-screen-2xl mx-auto px-4 py-6">
      <nav className="flex justify-between  items-center">
        {/* Navbar left side */}
        <div className="flex items-center space-x-4 md:gap-16 gap-4">
          <Link to="/">
            <FaBarsStaggered className="size-6" />
          </Link>
          {/*Search input */}
          <div className="relative sm:w-72 w-40 space-x-2">
            <IoSearchOutline className="absolute left-3 top-1/2 transform -translate-y-1/2" />
            <input
              type="text"
              placeholder=" search "
              className="bg-[#EAEAEA] w-full py-1 md:px-6 rounded-md focus:outline-none pl-10 "
            />
          </div>
        </div>
        {/* Navbar right side */}
        <div className=" relative flex items-center md:space-x-3 space-x-2">
          {" "}
          {currentUser ? (
            <>
              <button
                className=""
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              >
                <img
                  src={avatarImg}
                  alt="image"
                  className={`size-7 rounded-full ${
                    currentUser ? "ring-2 ring-blue-700" : ""
                  }`}
                />
              </button>
              {/**Dropdown */}
              {isDropdownOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-md "
                  style={{ top: "100%" }}
                >
                  <ul
                    className="py-2
                  "
                  >
                    {navigation.map((item) => (
                      <li key={item.name}>
                        <Link
                          to={item.href}
                          className="block px-4 py-2 text-sm hover:bg-gray-100 "
                        >
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <Link to="/login" className="hidden sm:block">
              <CiUser className="size-6" />
            </Link>
          )}
          <button className="hidden sm:block">
            <IoIosHeartEmpty className="size-6" />
          </button>
          <Link
            to="/cart"
            className="bg-primary p-1 sm:px-6 px-2 flex items-center rounded-sm"
          >
            <CiShoppingCart className="size-6 " />
            <span className="text-sm font-semibold sm:ml-1">0</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
