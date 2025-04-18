import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { navbarData } from "./data";
import { ICONS } from "../../static/icons";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const Navbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      localStorage.removeItem("accessToken");
      navigate("/", { replace: true });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const accessToken = localStorage.getItem("accessToken");
  return (
    <React.Fragment>
      <>
        <nav className="bg-white text-gray-900 p-4 sticky top-0 z-50 shadow-md w-full">
          <div className="md:w-[90%] w-[98%] mx-auto flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-pink-500 italic font-mw font-bold text-2xl md:px-3 md:py-1">
                EnterpriseEdge
              </div>
            </Link>

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-9 text-lg font-mw font-semibold newsreader">
              {navbarData.map((item) => (
                <li key={item.id}>
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? "text-blue-500 border-b-[2px]"
                        : "text-black"
                    } text-lg font-semibold transition hover:text-[#FF6300]`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
              {accessToken && (
                <li>
                  <button
                    onClick={handleLogout}
                    className="text-lg font-semibold transition text-white rounded-md cursor-pointer p-1 bg-[#FF6300]"
                  >
                    Logout
                  </button>
                </li>
              )}
            </ul>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                className="focus:outline-none text-xl text-pink-600"
                onClick={() => setIsMenuOpen(true)}
              >
                <ICONS.menu size={30} />
              </button>
            </div>
          </div>
        </nav>

        {/* Slide-in Mobile Menu */}
        <div
          className={`fixed top-0 right-0 w-full h-full bg-white z-[999] transform transition-transform duration-700 ease-in-out ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="p-3 flex justify-between items-center border-b border-gray-200">
            <Link to="/" className="flex items-center space-x-2">
              <div className="text-gray-500 newsreader font-bold text-2xl">
                <div className="text-gray-500 font-mw font-bold text-2xl md:px-3 md:py-1">
                  EnterpriseEdge
                </div>
              </div>
            </Link>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-gray-800 hover:text-red-600"
            >
              <ICONS.close size={28} color="#000" />
            </button>
          </div>

          <ul className="flex flex-col items-start space-y-6 p-6 text-xl font-semibold">
            {navbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`${
                    location.pathname === item.path
                      ? "text-pink-500"
                      : "text-black"
                  } hover:text-[#FF6300] transition`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            {accessToken && (
              <li>
                <button
                  onClick={handleLogout}
                  className="text-lg font-semibold transition hover:text-[#FF6300]"
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </>
    </React.Fragment>
  );
};

export default Navbar;
