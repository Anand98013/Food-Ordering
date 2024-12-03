import React from "react";
import { Facebook, Twitter, YouTube, Instagram } from "@mui/icons-material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import MailIcon from "@mui/icons-material/Mail";
import CallIcon from "@mui/icons-material/Call";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";

function Footer() {
  return (
    <footer className="relative bg-gray-900 text-white pt-12 pb-8">
      <div
        className="absolute top-0 left-0 w-32 h-32 rounded-br-full"
        style={{ backgroundColor: "#d48328" }}
      ></div>

      <div
        className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-full"
        style={{ backgroundColor: "#d48328" }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col md:flex-row md:justify-between">
          <div className="md:mb-0 md:w-1/3">
            <div className="flex items-center mb-4">
              <span className="text-3xl font-bold text-yellow-500 mr-2">
                🧡
              </span>
              <h2 className="text-2xl font-semibold">Meal Mingle</h2>
            </div>
            <p className="text-gray-400">
              A dynamic food ordering platform offering real-time menu updates,
              secure payment processing, and customizable meal options.
              Experience seamless ordering and order tracking with a
              user-friendly interface.
            </p>
          </div>

          {/* Get In Touch Section */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <ul className="text-gray-400 space-y-2">
              <li>
                <LocationOnIcon /> 918 Rohtas Sasaram, Bihar
              </li>
              <li>
                <MailIcon /> mealmingle@mail.com
              </li>
              <li>
                <CallIcon /> +1 234 567 890
              </li>
              <li>
                <AccessTimeFilledIcon /> 07.00 AM - 12.00 AM
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className="mb-8 md:mb-0 md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Quicklinks</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Home</li>
              <li>About</li>
              <li>FAQs</li>
              <li>Blog</li>
              <li>Contact</li>
            </ul>
          </div>

          <div className="md:w-1/4">
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com"
                className="text-gray-400 hover:text-yellow-500"
              >
                <Facebook fontSize="large" />
              </a>
              <a
                href="https://x.com"
                className="text-gray-400 hover:text-yellow-500"
              >
                <Twitter fontSize="large" />
              </a>
              <a
                href="https://Youtube.com"
                className="text-gray-400 hover:text-yellow-500"
              >
                <YouTube fontSize="large" />
              </a>
              <a
                href="https://www.instagram.com/"
                className="text-gray-400 hover:text-yellow-500"
              >
                <Instagram fontSize="large" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-8 flex flex-col md:flex-row md:justify-between items-center">
          <p className="text-gray-500 text-sm">&copy; 2024 MealMingeFood</p>
          <div className="flex space-x-4 text-gray-400 text-sm">
            <a
              href="https://www.instagram.com/"
              className="hover:text-yellow-500"
            >
              Privacy Policy
            </a>
            <a
              href="https://www.instagram.com/"
              className="hover:text-yellow-500"
            >
              Terms & Services
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
