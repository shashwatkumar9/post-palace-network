
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Wallet, Plus, Minus, DollarSign } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { useAuth } from '@/contexts/AuthContext';

interface WalletCardProps {
  onAddFunds: () => void;
  onWithdraw: () => void;
}

const WalletCard: React.FC<WalletCardProps> = ({ onAddFunds, onWithdraw }) => {
  const { wallet, loading } = useWallet();
  const { profile } = useAuth();

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <div className="animate-pulse">Loading wallet...</div>
        </CardContent>
      </Card>
    );
  }

  const canWithdraw = profile?.user_role === 'publisher' || profile?.user_role === 'both';

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center space-x-2">
          <Wallet className="h-5 w-5" />
          <span>Your Wallet</span>
        </CardTitle>
        <CardDescription>Manage your account balance</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold text-green-600">
            ${wallet?.balance?.toFixed(2) || '0.00'}
          </div>
          <p className="text-sm text-gray-500">Available Balance</p>
        </div>
        
        <div className="flex space-x-2">
          <Button onClick={onAddFunds} className="flex-1">
            <Plus className="h-4 w-4 mr-2" />
            Add Funds
          </Button>
          {canWithdraw && (
            <Button onClick={onWithdraw} variant="outline" className="flex-1">
              <Minus className="h-4 w-4 mr-2" />
              Withdraw
            </Button>
          )}
        </div>
        
        <div className="text-xs text-gray-500 text-center">
          {canWithdraw 
            ? 'Add funds via Stripe or withdraw via PayPal/Payoneer'
            : 'Add funds via Stripe to purchase guest posts'
          }
        </div>
      </CardContent>
    </Card>
  );
};

export default WalletCard;
