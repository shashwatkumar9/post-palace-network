
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-white border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">GuestPost Pro</span>
          </Link>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/publishers" className="text-gray-600 hover:text-gray-900">
              For Publishers
            </Link>
            <Link to="/buyers" className="text-gray-600 hover:text-gray-900">
              For Buyers
            </Link>
            <Link to="/affiliate" className="text-gray-600 hover:text-gray-900">
              Affiliate Program
            </Link>
            <Link to="/browse" className="text-gray-600 hover:text-gray-900">
              Browse Sites
            </Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Link to="/login">
              <Button variant="outline">Sign In</Button>
            </Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
