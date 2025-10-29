import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700">
      

      {/* Main Footer Links */}
      <div className="max-w-6xl mx-auto px-4 py-30 grid md:grid-cols-4 gap-8 text-sm">
        <div>
          <h3 className="font-semibold mb-3 text-lg">Discover</h3>
          <ul className="space-y-2">
            <li>About Us</li>
            <li>Contact Us</li>
            <li>FAQ</li>
            <li>Blog</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Shipping</h3>
          <ul className="space-y-2">
            <li>Shipping Policy</li>
            <li>Same Day Delivery</li>
            <li>Track Your Order</li>
            <li>Return / Exchange Policy</li>
            <li>Wholesale Inquiry</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Store Policies</h3>
          <ul className="space-y-2">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>My Account</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-lg">Get in touch</h3>
          <p className="flex items-center gap-2 mb-3">
            <img src={assets.phone} alt="phone" className="w-5 h-5" />
            077 373 0054
          </p>
          <p className="font-semibold mb-2">Follow us</p>
          <div className="flex gap-4">
            <img src={assets.facebook} alt="Facebook" className="w-6 h-6 cursor-pointer" />
            <img src={assets.instagram} alt="Instagram" className="w-6 h-6 cursor-pointer" />
            <img src={assets.tiktok} alt="TikTok" className="w-6 h-6 cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Horizontal line and copyright */}
      <hr className="border-t border-gray-300 w-full" />
      <p className="py-5 text-sm text-center">© 2025 Blush Me</p>
    </footer>
  );
};

export default Footer;
