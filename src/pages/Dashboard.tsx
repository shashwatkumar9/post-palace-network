
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { User, DollarSign, ShoppingCart, FileText, Plus } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import { useWallet } from "@/hooks/useWallet";
import WalletCard from "@/components/wallet/WalletCard";
import AddFundsModal from "@/components/wallet/AddFundsModal";
import WithdrawModal from "@/components/wallet/WithdrawModal";
import { supabase } from "@/integrations/supabase/client";

const Dashboard = () => {
  const { user, profile, loading: authLoading } = useAuth();
  const { wallet, transactions } = useWallet();
  const [addFundsOpen, setAddFundsOpen] = useState(false);
  const [withdrawOpen, setWithdrawOpen] = useState(false);
  const [stats, setStats] = useState({
    totalOrders: 0,
    pendingOrders: 0,
    completedOrders: 0,
    totalEarnings: 0,
  });

  useEffect(() => {
    if (user) {
      fetchStats();
    }
  }, [user]);

  const fetchStats = async () => {
    if (!user) return;

    try {
      // Fetch order stats for buyers
      const { data: buyerOrders } = await supabase
        .from('guest_post_orders')
        .select('*')
        .eq('buyer_id', user.id);

      // Fetch publisher stats
      const { data: publisherOrders } = await supabase
        .from('guest_post_orders')
        .select('*')
        .eq('publisher_id', user.id);

      const totalOrders = (buyerOrders?.length || 0) + (publisherOrders?.length || 0);
      const pendingOrders = [...(buyerOrders || []), ...(publisherOrders || [])]
        .filter(order => order.status === 'pending').length;
      const completedOrders = [...(buyerOrders || []), ...(publisherOrders || [])]
        .filter(order => order.status === 'completed').length;

      // Calculate total earnings from completed publisher orders
      const totalEarnings = (publisherOrders || [])
        .filter(order => order.status === 'completed')
        .reduce((sum, order) => sum + (order.amount || 0), 0);

      setStats({
        totalOrders,
        pendingOrders,
        completedOrders,
        totalEarnings,
      });
    } catch (error) {
      console.error('Error fetching stats:', error);
    }
  };

  if (authLoading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div>Loading...</div>
      </div>
    );
  }

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {profile?.full_name || 'User'}!
          </h1>
          <p className="text-gray-600">
            Here's what's happening with your account
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Wallet Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                ${wallet?.balance?.toFixed(2) || '0.00'}
              </div>
              <p className="text-xs text-muted-foreground">Available funds</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.totalOrders}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stats.pendingOrders}</div>
              <p className="text-xs text-muted-foreground">Awaiting completion</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">
                {profile?.user_role === 'publisher' || profile?.user_role === 'both' 
                  ? 'Total Earnings' : 'Completed Orders'}
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {profile?.user_role === 'publisher' || profile?.user_role === 'both' 
                  ? `$${stats.totalEarnings.toFixed(2)}` 
                  : stats.completedOrders}
              </div>
              <p className="text-xs text-muted-foreground">
                {profile?.user_role === 'publisher' || profile?.user_role === 'both' 
                  ? 'From completed orders' 
                  : 'Successfully completed'}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Wallet Section */}
          <div className="lg:col-span-1">
            <WalletCard 
              onAddFunds={() => setAddFundsOpen(true)}
              onWithdraw={() => setWithdrawOpen(true)}
            />
          </div>

          {/* Quick Actions */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
                <CardDescription>Get started with common tasks</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link to="/browse">
                    <Button className="w-full justify-start">
                      <Plus className="h-4 w-4 mr-2" />
                      Buy Guest Posts
                    </Button>
                  </Link>
                  
                  {(profile?.user_role === 'publisher' || profile?.user_role === 'both') && (
                    <Link to="/add-website">
                      <Button variant="outline" className="w-full justify-start">
                        <Plus className="h-4 w-4 mr-2" />
                        List Your Website
                      </Button>
                    </Link>
                  )}
                  
                  <Link to="/orders">
                    <Button variant="outline" className="w-full justify-start">
                      <FileText className="h-4 w-4 mr-2" />
                      View Orders
                    </Button>
                  </Link>
                  
                  <Link to="/projects">
                    <Button variant="outline" className="w-full justify-start">
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      Manage Projects
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>

            {/* Recent Transactions */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Recent Transactions</CardTitle>
                <CardDescription>Your latest wallet activity</CardDescription>
              </CardHeader>
              <CardContent>
                {transactions.length > 0 ? (
                  <div className="space-y-2">
                    {transactions.slice(0, 5).map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center py-2 border-b last:border-b-0">
                        <div>
                          <p className="font-medium">{transaction.description}</p>
                          <p className="text-xs text-gray-500">
                            {new Date(transaction.created_at).toLocaleDateString()}
                          </p>
                        </div>
                        <div className={`font-semibold ${
                          transaction.transaction_type === 'deposit' || transaction.transaction_type === 'earning' 
                            ? 'text-green-600' 
                            : 'text-red-600'
                        }`}>
                          {transaction.transaction_type === 'deposit' || transaction.transaction_type === 'earning' ? '+' : '-'}
                          ${transaction.amount.toFixed(2)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-center py-4">No transactions yet</p>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
      
      <Footer />
      
      <AddFundsModal open={addFundsOpen} onOpenChange={setAddFundsOpen} />
      <WithdrawModal open={withdrawOpen} onOpenChange={setWithdrawOpen} />
    </div>
  );
};

export default Dashboard;
