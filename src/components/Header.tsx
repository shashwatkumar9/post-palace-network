
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useWallet } from '@/hooks/useWallet';
import { LogOut, Wallet, Menu } from 'lucide-react';
import { useState } from 'react';

const Header = () => {
  const { user, profile, signOut } = useAuth();
  const { wallet } = useWallet();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600 hover:text-blue-700 transition-colors">
              WholePR
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/browse" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Browse
              </Link>
              <Link to="/publishers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                For Publishers
              </Link>
              <Link to="/buyers" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                For Buyers
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600 transition-colors font-medium">
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="hidden sm:flex items-center space-x-2 text-sm bg-gray-50 px-3 py-1 rounded-full">
                  <Wallet className="h-4 w-4 text-blue-600" />
                  <span className="font-medium text-gray-900">${wallet?.balance?.toFixed(2) || '0.00'}</span>
                </div>
                <span className="hidden sm:block text-gray-700 text-sm">
                  Welcome, {profile?.full_name || 'User'}
                </span>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm" className="hidden sm:flex">
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={handleSignOut} variant="ghost" size="sm">
                  <LogOut className="h-4 w-4" />
                  <span className="hidden sm:ml-2 sm:inline">Sign Out</span>
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
                </Link>
              </>
            )}
            
            <Button 
              variant="ghost" 
              size="sm" 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t py-4">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/browse" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Browse
              </Link>
              <Link 
                to="/publishers" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Publishers
              </Link>
              <Link 
                to="/buyers" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                For Buyers
              </Link>
              <Link 
                to="/blog" 
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                onClick={() => setMobileMenuOpen(false)}
              >
                Blog
              </Link>
              {user && (
                <>
                  <div className="flex items-center space-x-2 text-sm bg-gray-50 px-3 py-2 rounded mx-2">
                    <Wallet className="h-4 w-4 text-blue-600" />
                    <span className="font-medium">${wallet?.balance?.toFixed(2) || '0.00'}</span>
                  </div>
                  <Link 
                    to="/dashboard" 
                    className="text-gray-700 hover:text-blue-600 transition-colors font-medium px-2 py-1"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Dashboard
                  </Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
