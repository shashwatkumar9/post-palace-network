
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">GuestPost Pro</span>
            </div>
            <p className="text-gray-400">
              The premier marketplace for high-quality guest posting opportunities.
            </p>
            <div className="flex space-x-4">
              <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-800">
                Twitter
              </Button>
              <Button variant="outline" size="sm" className="text-white border-gray-600 hover:bg-gray-800">
                LinkedIn
              </Button>
            </div>
          </div>

          {/* For Publishers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Publishers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/add-website" className="hover:text-white">Add Website</Link></li>
              <li><Link to="/bulk-add-websites" className="hover:text-white">Add Bulk Website</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Dashboard</Link></li>
              <li><Link to="/payouts" className="hover:text-white">Payouts</Link></li>
            </ul>
          </div>

          {/* For Buyers */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">For Buyers</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/projects" className="hover:text-white">My Projects</Link></li>
              <li><Link to="/orders" className="hover:text-white">Order History</Link></li>
              <li><Link to="/buy-pr" className="hover:text-white">Buy PR</Link></li>
              <li><Link to="/browse" className="hover:text-white">Browse Sites</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Support</h3>
            <ul className="space-y-2 text-gray-400">
              <li><Link to="/help" className="hover:text-white">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
              <li><Link to="/affiliate" className="hover:text-white">Affiliate Program</Link></li>
              <li><Link to="/faq" className="hover:text-white">FAQ</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 GuestPost Pro. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-gray-400 hover:text-white text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-gray-400 hover:text-white text-sm">
                Terms of Service
              </Link>
              <Link to="/cookies" className="text-gray-400 hover:text-white text-sm">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
