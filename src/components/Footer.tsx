
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">WholePR</h3>
            <p className="text-gray-300 mb-4 leading-relaxed">
              The leading marketplace for guest posting and PR opportunities. 
              Connect publishers and content creators worldwide.
            </p>
            <div className="flex space-x-4">
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Follow us on Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Follow us on Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                className="text-gray-400 hover:text-white transition-colors p-2 hover:bg-gray-800 rounded-full"
                aria-label="Connect with us on LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/browse" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Browse Publishers
                </Link>
              </li>
              <li>
                <Link 
                  to="/publishers" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  For Publishers
                </Link>
              </li>
              <li>
                <Link 
                  to="/buyers" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  For Buyers
                </Link>
              </li>
              <li>
                <Link 
                  to="/blog" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  to="/affiliate" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Affiliate Program
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/help" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Help Center
                </Link>
              </li>
              <li>
                <Link 
                  to="/faq" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link 
                  to="/contact" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link 
                  to="/privacy" 
                  className="text-gray-300 hover:text-white transition-colors hover:underline"
                >
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-white">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                <a 
                  href="mailto:support@wholepr.com" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  support@wholepr.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                <a 
                  href="tel:+15551234567" 
                  className="text-gray-300 hover:text-white transition-colors text-sm"
                >
                  +1 (555) 123-4567
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-3 text-gray-400 flex-shrink-0" />
                <span className="text-gray-300 text-sm">San Francisco, CA</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 WholePR. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center md:justify-end space-x-6">
              <Link 
                to="/cookies" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Cookie Policy
              </Link>
              <Link 
                to="/terms" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Terms
              </Link>
              <Link 
                to="/privacy" 
                className="text-gray-400 hover:text-white text-sm transition-colors hover:underline"
              >
                Privacy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
