
import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';
import { useAuth } from '@/contexts/AuthContext';

type Wallet = Database['public']['Tables']['wallets']['Row'];
type Transaction = Database['public']['Tables']['transactions']['Row'];

export const useWallet = () => {
  const { user } = useAuth();
  const [wallet, setWallet] = useState<Wallet | null>(null);
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchWallet();
      fetchTransactions();
    }
  }, [user]);

  const fetchWallet = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('wallets')
        .select('*')
        .eq('user_id', user.id)
        .eq('currency', 'USD')
        .single();

      if (error) throw error;
      setWallet(data);
    } catch (error) {
      console.error('Error fetching wallet:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchTransactions = async () => {
    if (!user) return;
    
    try {
      const { data, error } = await supabase
        .from('transactions')
        .select('*')
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) throw error;
      setTransactions(data || []);
    } catch (error) {
      console.error('Error fetching transactions:', error);
    }
  };

  const addFunds = async (amount: number, paymentMethod: 'stripe' | 'paypal' | 'payoneer') => {
    if (!user || !wallet) return;

    try {
      const { error } = await supabase
        .from('transactions')
        .insert({
          user_id: user.id,
          wallet_id: wallet.id,
          transaction_type: 'deposit',
          amount,
          currency: 'USD',
          payment_method: paymentMethod,
          status: 'completed', // In a real app, this would be 'pending' until confirmed
          description: `Deposit via ${paymentMethod}`,
        });

      if (error) throw error;
      
      await fetchWallet();
      await fetchTransactions();
    } catch (error) {
      console.error('Error adding funds:', error);
      throw error;
    }
  };

  const withdrawFunds = async (amount: number, paymentMethod: 'paypal' | 'payoneer') => {
    if (!user || !wallet || wallet.balance < amount) return;

    try {
      const { error } = await supabase
        .from('transactions')
        .insert({
          user_id: user.id,
          wallet_id: wallet.id,
          transaction_type: 'withdrawal',
          amount,
          currency: 'USD',
          payment_method: paymentMethod,
          status: 'completed',
          description: `Withdrawal via ${paymentMethod}`,
        });

      if (error) throw error;
      
      await fetchWallet();
      await fetchTransactions();
    } catch (error) {
      console.error('Error withdrawing funds:', error);
      throw error;
    }
  };

  return {
    wallet,
    transactions,
    loading,
    addFunds,
    withdrawFunds,
    refreshWallet: fetchWallet,
    refreshTransactions: fetchTransactions,
  };
};
