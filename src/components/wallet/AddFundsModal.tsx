
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreditCard } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { useToast } from '@/hooks/use-toast';

interface AddFundsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const AddFundsModal: React.FC<AddFundsModalProps> = ({ open, onOpenChange }) => {
  const [amount, setAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'stripe'>('stripe');
  const [loading, setLoading] = useState(false);
  const { addFunds } = useWallet();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const amountNum = parseFloat(amount);
    
    if (amountNum < 1) {
      toast({
        title: 'Error',
        description: 'Minimum amount is $1.00',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      await addFunds(amountNum, paymentMethod);
      toast({
        title: 'Success',
        description: `$${amountNum.toFixed(2)} added to your wallet`,
      });
      onOpenChange(false);
      setAmount('');
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to add funds. Please try again.',
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
            <CreditCard className="h-5 w-5" />
            <span>Add Funds</span>
          </DialogTitle>
          <DialogDescription>
            Add money to your wallet to purchase guest posts
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="amount">Amount (USD)</Label>
            <Input
              id="amount"
              type="number"
              min="1"
              step="0.01"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="payment-method">Payment Method</Label>
            <Select value={paymentMethod} onValueChange={(value: 'stripe') => setPaymentMethod(value)}>
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="stripe">Credit/Debit Card (Stripe)</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div className="flex space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={loading} className="flex-1">
              {loading ? 'Processing...' : 'Add Funds'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default AddFundsModal;
