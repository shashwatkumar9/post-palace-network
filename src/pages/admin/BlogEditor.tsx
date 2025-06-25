
import React, { useState, useEffect } from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import { Navigate, useParams, useNavigate } from 'react-router-dom';
import AdminLayout from '@/components/admin/AdminLayout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import RichTextEditor from '@/components/orders/RichTextEditor';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

const BlogEditor = () => {
  const { isAdmin, loading, adminUser } = useAdmin();
  const { postId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();

  const [post, setPost] = useState<Partial<BlogPost>>({
    title: '',
    slug: '',
    excerpt: '',
    content: { html: '', text: '' },
    status: 'draft',
    meta_title: '',
    meta_description: '',
    tags: [],
  });
  const [saving, setSaving] = useState(false);
  const [loadingPost, setLoadingPost] = useState(!!postId);

  useEffect(() => {
    if (postId && isAdmin) {
      fetchPost();
    }
  }, [postId, isAdmin]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('id', postId)
        .single();

      if (error) throw error;
      setPost(data);
    } catch (error) {
      console.error('Error fetching post:', error);
      toast({
        title: 'Error',
        description: 'Failed to fetch blog post',
        variant: 'destructive',
      });
    } finally {
      setLoadingPost(false);
    }
  };

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, '-')
      .replace(/(^-|-$)/g, '');
  };

  const handleTitleChange = (title: string) => {
    setPost(prev => ({
      ...prev,
      title,
      slug: prev.slug || generateSlug(title),
    }));
  };

  const handleSave = async (status: 'draft' | 'published') => {
    if (!post.title || !post.slug || !post.content) {
      toast({
        title: 'Error',
        description: 'Please fill in all required fields',
        variant: 'destructive',
      });
      return;
    }

    if (!adminUser?.id) {
      toast({
        title: 'Error',
        description: 'Admin user not found',
        variant: 'destructive',
      });
      return;
    }

    setSaving(true);
    try {
      const postData = {
        title: post.title,
        slug: post.slug,
        excerpt: post.excerpt || null,
        content: post.content,
        status,
        author_id: adminUser.id,
        meta_title: post.meta_title || null,
        meta_description: post.meta_description || null,
        tags: post.tags || [],
        published_at: status === 'published' ? new Date().toISOString() : null,
        updated_at: new Date().toISOString(),
      };

      if (postId) {
        const { error } = await supabase
          .from('blog_posts')
          .update(postData)
          .eq('id', postId);

        if (error) throw error;
      } else {
        const { error } = await supabase
          .from('blog_posts')
          .insert(postData);

        if (error) throw error;
      }

      toast({
        title: 'Success',
        description: `Blog post ${status === 'published' ? 'published' : 'saved'} successfully`,
      });

      navigate('/admin/blog');
    } catch (error) {
      console.error('Error saving post:', error);
      toast({
        title: 'Error',
        description: 'Failed to save blog post',
        variant: 'destructive',
      });
    } finally {
      setSaving(false);
    }
  };

  if (loading || loadingPost) {
    return <div>Loading...</div>;
  }

  if (!isAdmin) {
    return <Navigate to="/admin/login" replace />;
  }

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            {postId ? 'Edit Post' : 'New Post'}
          </h1>
          <div className="flex gap-2">
            <Button
              onClick={() => handleSave('draft')}
              variant="outline"
              disabled={saving}
            >
              Save Draft
            </Button>
            <Button
              onClick={() => handleSave('published')}
              disabled={saving}
            >
              {saving ? 'Publishing...' : 'Publish'}
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Label htmlFor="title">Title *</Label>
              <Input
                id="title"
                value={post.title || ''}
                onChange={(e) => handleTitleChange(e.target.value)}
                placeholder="Enter post title..."
              />
            </div>

            <div>
              <Label htmlFor="slug">Slug *</Label>
              <Input
                id="slug"
                value={post.slug || ''}
                onChange={(e) => setPost(prev => ({ ...prev, slug: e.target.value }))}
                placeholder="url-friendly-slug"
              />
            </div>

            <div>
              <Label htmlFor="excerpt">Excerpt</Label>
              <Textarea
                id="excerpt"
                value={post.excerpt || ''}
                onChange={(e) => setPost(prev => ({ ...prev, excerpt: e.target.value }))}
                placeholder="Brief description of the post..."
                rows={3}
              />
            </div>

            <div>
              <Label>Content *</Label>
              <RichTextEditor
                value={post.content as any}
                onChange={(content) => setPost(prev => ({ ...prev, content }))}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Label htmlFor="status">Status</Label>
              <Select
                value={post.status || 'draft'}
                onValueChange={(status) => setPost(prev => ({ ...prev, status: status as any }))}
              >
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Published</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="meta_title">Meta Title</Label>
              <Input
                id="meta_title"
                value={post.meta_title || ''}
                onChange={(e) => setPost(prev => ({ ...prev, meta_title: e.target.value }))}
                placeholder="SEO title..."
              />
            </div>

            <div>
              <Label htmlFor="meta_description">Meta Description</Label>
              <Textarea
                id="meta_description"
                value={post.meta_description || ''}
                onChange={(e) => setPost(prev => ({ ...prev, meta_description: e.target.value }))}
                placeholder="SEO description..."
                rows={3}
              />
            </div>

            <div>
              <Label htmlFor="tags">Tags (comma-separated)</Label>
              <Input
                id="tags"
                value={post.tags?.join(', ') || ''}
                onChange={(e) => setPost(prev => ({ 
                  ...prev, 
                  tags: e.target.value.split(',').map(tag => tag.trim()).filter(Boolean)
                }))}
                placeholder="tech, ai, startup"
              />
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};

export default BlogEditor;
