
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Globe, User, LogOut, Wallet } from "lucide-react";
import { Link } from "react-router-dom";
import { useAuth } from "@/contexts/AuthContext";
import { useWallet } from "@/hooks/useWallet";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  const { user, profile, signOut, loading: authLoading } = useAuth();
  const { wallet } = useWallet();

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

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
            {!authLoading && user && profile ? (
              <>
                <div className="flex items-center space-x-2 text-sm">
                  <Wallet className="h-4 w-4 text-green-600" />
                  <span className="font-semibold text-green-600">
                    ${wallet?.balance?.toFixed(2) || '0.00'}
                  </span>
                </div>
                
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{profile.full_name || 'User'}</span>
                      <Badge variant="outline" className="ml-2">
                        {profile.user_role || 'buyer'}
                      </Badge>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuLabel>
                      {profile.full_name || 'User Account'}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/dashboard">Dashboard</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/projects">Projects</Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem asChild>
                      <Link to="/orders">Orders</Link>
                    </DropdownMenuItem>
                    {(profile.user_role === 'publisher' || profile.user_role === 'both') && (
                      <DropdownMenuItem asChild>
                        <Link to="/payouts">Payouts</Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                      <LogOut className="h-4 w-4 mr-2" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
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
