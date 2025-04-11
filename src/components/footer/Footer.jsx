import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhone,
} from "react-icons/fa";
import { navbarData } from "../navbar/data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold mb-4 text-pink-500">
            EnterpriseEdge
          </h2>
          <p className="text-sm text-gray-400">
            Bringing your favorite events and promotions to life. Join us in the
            experience!
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="flex flex-col text-gray-400 space-y-2 text-sm font-mw font-medium">
            {navbarData.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? "text-blue-500 border-b-[2px]"
                      : "text-gray-400"
                  } transition hover:text-[#FF6300]`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
            <Link to="/login">Admin Login</Link>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Stay Updated</h3>
          <p className="text-sm text-gray-400 mb-3">
            Subscribe to our newsletter
          </p>
          <form className="flex flex-col sm:flex-row items-center">
            <input
              type="email"
              placeholder="Your email"
              className="px-3 py-2 rounded-l-md bg-gray-500 text-white w-full sm:w-auto"
            />
            <button className="mt-2 sm:mt-0 sm:ml-2 bg-pink-500 hover:bg-pink-600 px-4 py-2 rounded-md text-sm">
              Subscribe
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="md:ml-10">
          <h3 className="text-lg font-semibold mb-3">Get in Touch</h3>
          <div className="text-sm text-gray-400 space-y-2">
            <p className="flex items-center gap-2">
              <FaPhone /> +1 234 567 890
            </p>
            <p className="flex items-center gap-2">
              <FaEnvelope /> support@EnterpriseEdge.com
            </p>
            <div className="flex gap-4 mt-3">
              <a href="#">
                <FaFacebook className="hover:text-pink-500" />
              </a>
              <a href="#">
                <FaTwitter className="hover:text-pink-500" />
              </a>
              <a href="#">
                <FaInstagram className="hover:text-pink-500" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} EnterpriseEdge. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
