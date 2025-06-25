
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { FileText, DollarSign } from 'lucide-react';
import { useWallet } from '@/hooks/useWallet';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import RichTextEditor from './RichTextEditor';

interface CreateOrderModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  publisherRequirement?: any;
}

const CreateOrderModal: React.FC<CreateOrderModalProps> = ({ 
  open, 
  onOpenChange, 
  publisherRequirement 
}) => {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    targetUrl: '',
    anchorText: '',
    notes: '',
  });
  const [loading, setLoading] = useState(false);
  const { wallet } = useWallet();
  const { user } = useAuth();
  const { toast } = useToast();

  const orderAmount = publisherRequirement?.price_per_post || 0;
  const canAfford = wallet && wallet.balance >= orderAmount;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!user || !publisherRequirement) return;
    
    if (!canAfford) {
      toast({
        title: 'Insufficient Funds',
        description: 'Please add funds to your wallet before placing an order.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);

    try {
      // Create the order
      const { error: orderError } = await supabase
        .from('guest_post_orders')
        .insert({
          buyer_id: user.id,
          publisher_id: publisherRequirement.publisher_id,
          title: formData.title,
          content: { markdown: formData.content }, // Store as JSON
          target_url: formData.targetUrl,
          anchor_text: formData.anchorText,
          amount: orderAmount,
          currency: 'USD',
          requirements: publisherRequirement.content_guidelines,
          notes: formData.notes,
          status: 'pending',
        });

      if (orderError) throw orderError;

      // Create a purchase transaction
      const { error: transactionError } = await supabase
        .from('transactions')
        .insert({
          user_id: user.id,
          wallet_id: wallet!.id,
          transaction_type: 'purchase',
          amount: orderAmount,
          currency: 'USD',
          status: 'completed',
          description: `Guest post order: ${formData.title}`,
        });

      if (transactionError) throw transactionError;

      toast({
        title: 'Order Placed Successfully',
        description: `Your order for "${formData.title}" has been submitted to the publisher.`,
      });

      onOpenChange(false);
      setFormData({
        title: '',
        content: '',
        targetUrl: '',
        anchorText: '',
        notes: '',
      });
    } catch (error: any) {
      toast({
        title: 'Error',
        description: error.message || 'Failed to create order. Please try again.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5" />
            <span>Create Guest Post Order</span>
          </DialogTitle>
          <DialogDescription>
            Submit your article for publication on {publisherRequirement?.website_url}
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="title">Article Title *</Label>
              <Input
                id="title"
                value={formData.title}
                onChange={(e) => setFormData(prev => ({ ...prev, title: e.target.value }))}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="targetUrl">Target URL *</Label>
              <Input
                id="targetUrl"
                type="url"
                value={formData.targetUrl}
                onChange={(e) => setFormData(prev => ({ ...prev, targetUrl: e.target.value }))}
                placeholder="https://your-website.com"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="anchorText">Anchor Text *</Label>
            <Input
              id="anchorText"
              value={formData.anchorText}
              onChange={(e) => setFormData(prev => ({ ...prev, anchorText: e.target.value }))}
              placeholder="The text that will link to your URL"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="content">Article Content *</Label>
            <RichTextEditor
              value={formData.content}
              onChange={(content) => setFormData(prev => ({ ...prev, content }))}
              placeholder="Write your high-quality article content here. Follow the publisher's guidelines for best results."
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="notes">Additional Notes</Label>
            <Textarea
              id="notes"
              value={formData.notes}
              onChange={(e) => setFormData(prev => ({ ...prev, notes: e.target.value }))}
              placeholder="Any special instructions for the publisher..."
              rows={3}
            />
          </div>

          {publisherRequirement?.content_guidelines && (
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">Publisher Guidelines</h4>
              <div className="text-sm text-blue-800">
                {JSON.stringify(publisherRequirement.content_guidelines)}
              </div>
            </div>
          )}

          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div>
              <p className="font-semibold">Order Total: ${orderAmount.toFixed(2)}</p>
              <p className="text-sm text-gray-600">
                Wallet Balance: ${wallet?.balance?.toFixed(2) || '0.00'}
              </p>
            </div>
            <div className="flex items-center space-x-2">
              <DollarSign className={`h-5 w-5 ${canAfford ? 'text-green-600' : 'text-red-600'}`} />
              <span className={`text-sm ${canAfford ? 'text-green-600' : 'text-red-600'}`}>
                {canAfford ? 'Sufficient funds' : 'Insufficient funds'}
              </span>
            </div>
          </div>

          <div className="flex space-x-2">
            <Button type="button" variant="outline" onClick={() => onOpenChange(false)} className="flex-1">
              Cancel
            </Button>
            <Button type="submit" disabled={loading || !canAfford} className="flex-1">
              {loading ? 'Creating Order...' : `Place Order - $${orderAmount.toFixed(2)}`}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateOrderModal;
