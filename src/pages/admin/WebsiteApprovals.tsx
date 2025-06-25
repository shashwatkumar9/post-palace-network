
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

type WebsiteSubmission = Database['public']['Tables']['website_submissions']['Row'];

const WebsiteApprovals = () => {
  const { isAdmin, loading } = useAdmin();
  const [submissions, setSubmissions] = useState<WebsiteSubmission[]>([]);
  const [loadingSubmissions, setLoadingSubmissions] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isAdmin) {
      fetchSubmissions();
    }
  }, [isAdmin]);

  const fetchSubmissions = async () => {
    try {
      const { data, error } = await supabase
        .from('website_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setSubmissions(data || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch website submissions',
        variant: 'destructive',
      });
    } finally {
      setLoadingSubmissions(false);
    }
  };

  const handleApproval = async (submissionId: string, status: 'approved' | 'rejected', notes: string) => {
    try {
      const { error } = await supabase
        .from('website_submissions')
        .update({
          status,
          admin_notes: notes,
          reviewed_at: new Date().toISOString(),
        })
        .eq('id', submissionId);

      if (error) throw error;

      // If approved, create publisher requirements
      if (status === 'approved') {
        const submission = submissions.find(s => s.id === submissionId);
        if (submission) {
          const { error: reqError } = await supabase
            .from('publisher_requirements')
            .insert({
              publisher_id: submission.publisher_id,
              website_url: submission.website_url,
              domain_authority: submission.domain_authority,
              traffic_monthly: submission.traffic_monthly,
              price_per_post: submission.price_per_post,
              content_guidelines: submission.content_guidelines,
              categories: submission.categories,
              sample_posts: submission.sample_posts,
            });

          if (reqError) throw reqError;
        }
      }

      toast({
        title: 'Success',
        description: `Website ${status} successfully`,
      });

      fetchSubmissions();
    } catch (error) {
      console.error('Error updating submission:', error);
      toast({
        title: 'Error',
        description: 'Failed to update submission',
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
          <h1 className="text-3xl font-bold">Website Approvals</h1>
          <p className="text-gray-600">Review and approve publisher website submissions</p>
        </div>

        {loadingSubmissions ? (
          <div>Loading submissions...</div>
        ) : (
          <div className="grid gap-6">
            {submissions.map((submission) => (
              <WebsiteSubmissionCard
                key={submission.id}
                submission={submission}
                onApproval={handleApproval}
              />
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

const WebsiteSubmissionCard: React.FC<{
  submission: WebsiteSubmission;
  onApproval: (id: string, status: 'approved' | 'rejected', notes: string) => void;
}> = ({ submission, onApproval }) => {
  const [notes, setNotes] = useState('');
  const [processing, setProcessing] = useState(false);

  const handleAction = async (status: 'approved' | 'rejected') => {
    setProcessing(true);
    await onApproval(submission.id, status, notes);
    setProcessing(false);
    setNotes('');
  };

  return (
    <Card>
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{submission.website_url}</CardTitle>
            <div className="flex gap-2 mt-2">
              <Badge variant={
                submission.status === 'approved' ? 'default' :
                submission.status === 'rejected' ? 'destructive' : 'secondary'
              }>
                {submission.status}
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-medium">Domain Authority</p>
            <p className="text-lg">{submission.domain_authority || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Monthly Traffic</p>
            <p className="text-lg">{submission.traffic_monthly?.toLocaleString() || 'N/A'}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Price per Post</p>
            <p className="text-lg">${submission.price_per_post}</p>
          </div>
          <div>
            <p className="text-sm font-medium">Contact Email</p>
            <p className="text-lg">{submission.contact_email || 'N/A'}</p>
          </div>
        </div>

        {submission.categories && submission.categories.length > 0 && (
          <div>
            <p className="text-sm font-medium mb-2">Categories</p>
            <div className="flex flex-wrap gap-2">
              {submission.categories.map((category, index) => (
                <Badge key={index} variant="outline">{category}</Badge>
              ))}
            </div>
          </div>
        )}

        {submission.additional_info && (
          <div>
            <p className="text-sm font-medium">Additional Information</p>
            <p className="text-gray-700">{submission.additional_info}</p>
          </div>
        )}

        {submission.status === 'pending' && (
          <div className="space-y-4 border-t pt-4">
            <div>
              <label className="text-sm font-medium">Admin Notes</label>
              <Textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Add notes for this review..."
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

        {submission.admin_notes && (
          <div className="border-t pt-4">
            <p className="text-sm font-medium">Admin Notes</p>
            <p className="text-gray-700">{submission.admin_notes}</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default WebsiteApprovals;
