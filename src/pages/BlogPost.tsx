
import React, { useState, useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Badge } from '@/components/ui/badge';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

const BlogPost = () => {
  const { slug } = useParams();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (slug) {
      fetchPost();
    }
  }, [slug]);

  const fetchPost = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('slug', slug)
        .eq('status', 'published')
        .single();

      if (error) {
        if (error.code === 'PGRST116') {
          setNotFound(true);
        } else {
          throw error;
        }
      } else {
        setPost(data);
      }
    } catch (error) {
      console.error('Error fetching post:', error);
      setNotFound(true);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        <div className="flex-1 flex items-center justify-center">
          <div>Loading...</div>
        </div>
        <Footer />
      </div>
    );
  }

  if (notFound || !post) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <article className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <header className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            
            <div className="flex items-center justify-between text-sm text-gray-500 mb-6">
              <span>Published on {new Date(post.published_at!).toLocaleDateString()}</span>
              {post.tags && post.tags.length > 0 && (
                <div className="flex gap-2">
                  {post.tags.map((tag, index) => (
                    <Badge key={index} variant="outline">{tag}</Badge>
                  ))}
                </div>
              )}
            </div>

            {post.excerpt && (
              <p className="text-xl text-gray-600 leading-relaxed">{post.excerpt}</p>
            )}
          </header>

          <div className="prose prose-lg max-w-none">
            {post.content && typeof post.content === 'object' ? (
              <div dangerouslySetInnerHTML={{ __html: (post.content as any).html || '' }} />
            ) : (
              <div>No content available</div>
            )}
          </div>
        </div>
      </article>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
