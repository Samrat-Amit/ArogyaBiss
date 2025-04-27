
import React from "react";
import { Link } from "react-router-dom";
import Logo from "@/components/ui/logo";
import { Facebook, Twitter, Instagram, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo className="mb-4" />
            <p className="text-gray-600 mb-6">
              Arogya Bliss is dedicated to your mental wellness, offering therapy sessions, retreats, 
              and resources to help you on your journey to mental peace.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-arogya-teal hover:text-arogya-teal-dark transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-arogya-teal hover:text-arogya-teal-dark transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-arogya-teal hover:text-arogya-teal-dark transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-arogya-teal hover:text-arogya-teal-dark transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-600 hover:text-arogya-teal transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-600 hover:text-arogya-teal transition-colors">Services</Link>
              </li>
              <li>
                <Link to="/retreats" className="text-gray-600 hover:text-arogya-teal transition-colors">Retreats</Link>
              </li>
              <li>
                <Link to="/articles" className="text-gray-600 hover:text-arogya-teal transition-colors">Articles</Link>
              </li>
              <li>
                <Link to="/meditation" className="text-gray-600 hover:text-arogya-teal transition-colors">Meditation</Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-arogya-teal mr-2 mt-1"><i className="fas fa-map-marker-alt"></i></span>
                <span className="text-gray-600">Bokaro Steel City, Jharkhand</span>
              </li>
              <li className="flex items-center">
                <span className="text-arogya-teal mr-2"><i className="fas fa-phone"></i></span>
                <a href="tel:+917050525808" className="text-gray-600 hover:text-arogya-teal transition-colors">+91 70505 25808</a>
              </li>
              <li className="flex items-center">
                <span className="text-arogya-teal mr-2"><Mail size={16} /></span>
                <a href="mailto:contact@arogyabliss.com" className="text-gray-600 hover:text-arogya-teal transition-colors">contact@arogyabliss.com</a>
              </li>
            </ul>
          </div>
          
          {/* Newsletter */}
          <div className="col-span-1">
            <h3 className="text-lg font-bold mb-4 text-gray-800">Newsletter</h3>
            <p className="text-gray-600 mb-4">Subscribe to get updates on our sessions, retreats, and wellness tips.</p>
            <form className="flex flex-col space-y-3">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-arogya-teal"
              />
              <button 
                type="submit" 
                className="btn-primary"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-200 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Arogya Bliss. All rights reserved.
          </p>
          <div className="flex items-center">
            <span className="text-gray-600 text-sm flex items-center">
              Made with <Heart size={16} className="text-red-500 mx-1" /> in India
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
