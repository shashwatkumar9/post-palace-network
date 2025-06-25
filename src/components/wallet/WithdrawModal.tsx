
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Banknote } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { useToast } from '@/hooks/use-toast';

interface WithdrawModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ open, onOpenChange }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'paypal' | 'payoneer'>('paypal');
  const [loading, setLoading] = useState(false);
  const { wallet, withdrawFunds } = useWallet();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(amount);
    
    if (amountNum < 1) {
      toast({
        title: 'Error',
        description: 'Minimum withdrawal is $1.00',
        variant: 'destructive',
      });
      return;
    }

    if (wallet && amountNum > wallet.balance) {
      toast({
        title: 'Error',
        description: 'Insufficient balance',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      await withdrawFunds(amountNum, paymentMethod);
      toast({
        title: 'Success',
        description: `$${amountNum.toFixed(2)} withdrawal initiated`,
      });
      onOpenChange(false);
      setAmount('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to process withdrawal. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <Banknote className="h-5 w-5" />
            <span>Withdraw Funds</span>
          </DialogTitle>
          <DialogDescription>
            Withdraw your earnings to PayPal or Payoneer
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="bg-gray-50 p-3 rounded">
            <p className="text-sm">Available Balance: <span className="font-semibold">${wallet?.balance?.toFixed(2) || '0.00'}</span></p>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              min="1"
              max={wallet?.balance || 0}
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="payment-method">Withdrawal Method</Label>
            <Select value={paymentMethod} onValueChange={(value: 'paypal' | 'payoneer') => setPaymentMethod(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="paypal">PayPal</SelectItem>
                <SelectItem value="payoneer">Payoneer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Processing...' : 'Withdraw'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default WithdrawModal;
