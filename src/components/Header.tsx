
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/contexts/AuthContext';
import { useWallet } from '@/hooks/useWallet';
import { LogOut, Wallet } from 'lucide-react';

const Header = () => {
  const { user, profile, signOut } = useAuth();
  const { wallet } = useWallet();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-2xl font-bold text-blue-600">
              PR Platform
            </Link>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/browse" className="text-gray-700 hover:text-blue-600">
                Browse
              </Link>
              <Link to="/publishers" className="text-gray-700 hover:text-blue-600">
                For Publishers
              </Link>
              <Link to="/buyers" className="text-gray-700 hover:text-blue-600">
                For Buyers
              </Link>
              <Link to="/blog" className="text-gray-700 hover:text-blue-600">
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-4">
            {user ? (
              <>
                <div className="flex items-center space-x-2 text-sm">
                  <Wallet className="h-4 w-4" />
                  <span className="font-medium">${wallet?.balance?.toFixed(2) || '0.00'}</span>
                </div>
                <span className="text-gray-700">
                  Welcome, {profile?.full_name || 'User'}
                </span>
                <Link to="/dashboard">
                  <Button variant="outline" size="sm">
                    Dashboard
                  </Button>
                </Link>
                <Button onClick={handleSignOut} variant="ghost" size="sm">
                  <LogOut className="h-4 w-4" />
                </Button>
              </>
            ) : (
              <>
                <Link to="/login">
                  <Button variant="outline">Sign In</Button>
                </Link>
                <Link to="/register">
                  <Button>Get Started</Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
