
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Search } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { Database } from '@/integrations/supabase/types';

type BlogPost = Database['public']['Tables']['blog_posts']['Row'];

const Blog = () => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .eq('status', 'published')
        .order('published_at', { ascending: false });

      if (error) throw error;
      setPosts(data || []);
    } catch (error) {
      console.error('Error fetching posts:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    post.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header />
      
      <div className="flex-1 container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Blog</h1>
            <p className="text-xl text-gray-600 mb-8">
              Insights, tips, and updates from the world of guest posting and digital marketing
            </p>
            
            <div className="relative max-w-md mx-auto">
              <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
          </div>

          {loading ? (
            <div className="text-center">Loading articles...</div>
          ) : (
            <div className="grid gap-8">
              {filteredPosts.map((post) => (
                <Card key={post.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          <Link 
                            to={`/blog/${post.slug}`}
                            className="hover:text-blue-600 transition-colors"
                          >
                            {post.title}
                          </Link>
                        </CardTitle>
                        <div className="flex items-center gap-4 text-sm text-gray-500">
                          <span>{new Date(post.published_at!).toLocaleDateString()}</span>
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex gap-2">
                              {post.tags.slice(0, 3).map((tag, index) => (
                                <Badge key={index} variant="outline">{tag}</Badge>
                              ))}
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {post.excerpt && (
                      <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    )}
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      Read more →
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {filteredPosts.length === 0 && !loading && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No articles found.</p>
            </div>
          )}
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Blog;
