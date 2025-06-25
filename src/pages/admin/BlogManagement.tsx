
import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Navigate, Link } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Plus, Edit, Trash2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

const BlogManagement = () => {
  const { isAdmin, loading } = useAdmin();
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    if (isAdmin) {
      fetchPosts();
    }
  }, [isAdmin]);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch blog posts',
        variant: 'destructive',
      });
    } finally {
      setLoadingPosts(false);
    }
  };

  const handleDelete = async (postId: string) => {
    if (!confirm('Are you sure you want to delete this post?')) return;

    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', postId);

      if (error) throw error;

      toast({
        title: 'Success',
        description: 'Blog post deleted successfully',
      });

      fetchPosts();
    } catch (error) {
      console.error('Error deleting post:', error);
      toast({
        title: 'Error',
        description: 'Failed to delete blog post',
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
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold">Blog Management</h1>
            <p className="text-gray-600">Manage your blog posts and content</p>
          </div>
          <Link to="/admin/blog/new">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              New Post
            </Button>
          </Link>
        </div>

        {loadingPosts ? (
          <div>Loading posts...</div>
        ) : (
          <div className="grid gap-6">
            {posts.map((post) => (
              <Card key={post.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{post.title}</CardTitle>
                      <div className="flex gap-2 mt-2">
                        <Badge variant={
                          post.status === 'published' ? 'default' :
                          post.status === 'draft' ? 'secondary' : 'outline'
                        }>
                          {post.status}
                        </Badge>
                        <Badge variant="outline">/{post.slug}</Badge>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <Link to={`/admin/blog/edit/${post.id}`}>
                        <Button variant="outline" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </Link>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleDelete(post.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  {post.excerpt && (
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  )}
                  <div className="flex justify-between text-sm text-gray-500">
                    <span>Created: {new Date(post.created_at!).toLocaleDateString()}</span>
                    {post.published_at && (
                      <span>Published: {new Date(post.published_at).toLocaleDateString()}</span>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </AdminLayout>
  );
};

export default BlogManagement;
