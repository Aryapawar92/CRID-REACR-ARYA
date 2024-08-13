import { Palette } from "lucide-react";
import React from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="sticky top-0  bg-custom-dark-blue z-40">
      {/* Radial Gradient Background */}

      <div className="relative flex max-w-screen-xl flex-col overflow-hidden px-4 py-6 md:mx-auto md:flex-row md:items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="flex items-center whitespace-nowrap text-2xl font-black"
        >
          <img
            src="/images/newcrid.png"
            alt="Logo"
            className="mr-2 h-10 w-auto"
          />
          <span className="text-white font-redHat text-2xl">CRID</span>
        </Link>

        {/* Mobile Menu Toggle */}
        <input type="checkbox" className="peer hidden" id="navbar-open" />
        <label
          className="absolute top-5 right-7 cursor-pointer md:hidden"
          htmlFor="navbar-open"
        >
          <span className="sr-only">Toggle Navigation</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>

        {/* Navigation */}
        <nav
          aria-label="Header Navigation"
          className="peer-checked:mt-8 peer-checked:max-h-56 flex max-h-0 w-full flex-col items-center justify-between overflow-hidden transition-all md:ml-24 md:max-h-full md:flex-row md:items-center px-8 md:px-0"
        >
          <ul className="flex flex-col items-center space-y-2 md:flex-row md:space-y-0 md:justify-center md:flex-grow pr-8">
            <li className="text-white md:mr-12 hover:text-indigo-700 font-redHat text-lg font-semibold tracking-widest group-hover:scale-x-100 ">
              <NavLink
                to="/"
                exact
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-white"
                }
              >
                Home
              </NavLink>
            </li>
            <li className="text-white md:mr-12 hover:text-indigo-600 font-redHat text-lg font-semibold  ">
              <NavLink
                to="/event"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-white"
                }
              >
                Event
              </NavLink>
            </li>
            <li className="text-white md:mr-12 hover:text-blue-600 text-lg font-semibold tracking-widest  font-redHat">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "text-blue-600" : "text-white"
                }
              >
                About
              </NavLink>
            </li>
          </ul>

          <div className="flex items-center mt-2 md:mt-0">
            <button className="text-[#E6E6E6] focus:outline-none hover:bg-gray-700 px-2 py-2 rounded transition-colors">
              <Palette />
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
