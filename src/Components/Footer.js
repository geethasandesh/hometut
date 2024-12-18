import React from 'react';
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { FiMail, FiPhoneCall } from 'react-icons/fi';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 rounded-t-3xl rounded-b-3xl -mt-1">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 px-4">
        {/* Social Media Icons */}
        <div className="flex space-x-6">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaInstagram size={24} />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaLinkedin size={24} />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-500 transition"
          >
            <FaTwitter size={24} />
          </a>
        </div>

        {/* Contact Info */}
        <div className="flex space-x-8 text-sm">
          <div className="flex items-center space-x-2">
            <FiMail className="text-orange-500" />
            <span>innovimagine@gmail.com</span>
          </div>
          <div className="flex items-center space-x-2">
            <a href="tel:+918522997578" className="flex items-center space-x-2 hover:text-orange-500 transition">
              <FiPhoneCall className="text-orange-500" />
              <span>+91 8522997578</span>
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm">
          <p>&copy; {new Date().getFullYear()} InnovTuitions. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
