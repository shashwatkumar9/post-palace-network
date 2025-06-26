
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Globe, 
  FileText, 
  MessageSquare, 
  LogOut, 
  Settings,
  Users,
  Shield
} from 'lucide-react';
import Footer from '@/components/Footer';

interface AdminLayoutProps {
  children: React.ReactNode;
}

const AdminLayout: React.FC<AdminLayoutProps> = ({ children }) => {
  const { signOut, adminUser } = useAdmin();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Website Approvals', href: '/admin/websites', icon: Globe },
    { name: 'PR Reviews', href: '/admin/pr-reviews', icon: FileText },
    { name: 'Blog Management', href: '/admin/blog', icon: MessageSquare },
    { name: 'User Management', href: '/admin/users', icon: Users },
    { name: 'Settings', href: '/admin/settings', icon: Settings },
  ];

  const handleSignOut = async () => {
    await signOut();
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'super_admin':
        return 'text-red-600';
      case 'content_moderator':
        return 'text-blue-600';
      case 'finance_admin':
        return 'text-green-600';
      case 'support_admin':
        return 'text-yellow-600';
      default:
        return 'text-gray-600';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-64 bg-white shadow-sm border-r">
          <div className="p-6 border-b">
            <div className="flex items-center space-x-3">
              <div className="h-10 w-10 bg-blue-100 rounded-full flex items-center justify-center">
                <Shield className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Admin Panel</h2>
                <p className={`text-sm font-medium ${getRoleColor(adminUser?.admin_role || '')}`}>
                  {adminUser?.admin_role?.replace('_', ' ').toUpperCase()}
                </p>
              </div>
            </div>
          </div>
          
          <nav className="mt-6">
            {navigation.map((item) => {
              const Icon = item.icon;
              const isActive = location.pathname === item.href;
              
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`flex items-center px-6 py-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  <Icon className="mr-3 h-5 w-5" />
                  {item.name}
                </Link>
              );
            })}
          </nav>
          
          <div className="absolute bottom-20 left-0 right-0 px-6">
            <Button
              onClick={handleSignOut}
              variant="outline"
              className="w-full justify-start hover:bg-red-50 hover:text-red-600 hover:border-red-200"
            >
              <LogOut className="mr-3 h-5 w-5" />
              Sign Out
            </Button>
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 flex flex-col">
          <main className="flex-1 p-8">
            {children}
          </main>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AdminLayout;
