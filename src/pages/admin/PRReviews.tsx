
import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Navigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type GuestPostOrder = Database['public']['Tables']['guest_post_orders']['Row'];
type PRReview = Database['public']['Tables']['pr_reviews']['Row'];

interface OrderWithReview extends GuestPostOrder {
  pr_reviews?: PRReview;
}

const PRReviews = () => {
  const { isAdmin, loading } = useAdmin();
  const [orders, setOrders] = useState<OrderWithReview[]>([]);
  const [loadingOrders, setLoadingOrders] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isAdmin) {
      fetchOrders();
    }
  }, [isAdmin]);

  const fetchOrders = async () => {
    try {
      const { data, error } = await supabase
        .from('guest_post_orders')
        .select(`
          *,
          pr_reviews (*)
        `)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setOrders(data || []);
    } catch (error) {
      console.error('Error fetching orders:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch PR orders',
        variant: 'destructive',
      });
    } finally {
      setLoadingOrders(false);
    }
  };

  const handleReview = async (orderId: string, status: 'approved' | 'rejected', feedback: string) => {
    try {
      const { error } = await supabase
        .from('pr_reviews')
        .upsert({
          order_id: orderId,
          status,
          feedback,
          reviewed_at: new Date().toISOString(),
        });

      if (error) throw error;

      toast({
        title: 'Success',
        description: `PR ${status} successfully`,
      });

      fetchOrders();
    } catch (error) {
      console.error('Error updating review:', error);
      toast({
        title: 'Error',
        description: 'Failed to update review',
        variant: 'destructive',
      });
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-3xl font-bold">PR Reviews</h1>
          <p className="text-gray-600">Review and approve guest post articles</p>
        </div>

        {loadingOrders ? (
          <div>Loading orders...</div>
        ) : (
          <div className="grid gap-6">
            {orders.map((order) => (
              <PROrderCard
                key={order.id}
                order={order}
                onReview={handleReview}
              />
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

const PROrderCard: React.FC<{
  order: OrderWithReview;
  onReview: (id: string, status: 'approved' | 'rejected', feedback: string) => void;
}> = ({ order, onReview }) => {
  const [feedback, setFeedback] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleAction = async (status: 'approved' | 'rejected') => {
    setProcessing(true);
    await onReview(order.id, status, feedback);
    setProcessing(false);
    setFeedback('');
  };

  const reviewStatus = order.pr_reviews?.status || 'pending';

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{order.title}</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge variant={
                reviewStatus === 'approved' ? 'default' :
                reviewStatus === 'rejected' ? 'destructive' : 'secondary'
              }>
                {reviewStatus}
              </Badge>
              <Badge variant="outline">${order.amount}</Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Target URL</p>
            <p className="text-blue-600 hover:underline">
              <a href={order.target_url} target="_blank" rel="noopener noreferrer">
                {order.target_url}
              </a>
            </p>
          </div>
          <div>
            <p className="text-sm font-medium">Anchor Text</p>
            <p>{order.anchor_text}</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium mb-2">Article Content</p>
          <div className="bg-gray-50 p-4 rounded max-h-96 overflow-y-auto">
            {order.content && typeof order.content === 'object' ? (
              <div dangerouslySetInnerHTML={{ __html: (order.content as any).html || 'No content available' }} />
            ) : (
              <p>No content available</p>
            )}
          </div>
        </div>

        {order.notes && (
          <div>
            <p className="text-sm font-medium">Buyer Notes</p>
            <p className="text-gray-700">{order.notes}</p>
          </div>
        )}

        {reviewStatus === 'pending' && (
          <div className="space-y-4 border-t pt-4">
            <div>
              <label className="text-sm font-medium">Review Feedback</label>
              <Textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Add feedback for this review..."
                className="mt-1"
              />
            </div>
            <div className="flex gap-2">
              <Button
                onClick={() => handleAction('approved')}
                disabled={processing}
                className="bg-green-600 hover:bg-green-700"
              >
                Approve
              </Button>
              <Button
                onClick={() => handleAction('rejected')}
                disabled={processing}
                variant="destructive"
              >
                Reject
              </Button>
            </div>
          </div>
        )}

        {order.pr_reviews?.feedback && (
          <div className="border-t pt-4">
            <p className="text-sm font-medium">Review Feedback</p>
            <p className="text-gray-700">{order.pr_reviews.feedback}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default PRReviews;
