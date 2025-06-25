
import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Globe, Search, Filter, BarChart3, Clock } from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useAuth } from "@/contexts/AuthContext";
import CreateOrderModal from "@/components/orders/CreateOrderModal";
import { supabase } from "@/integrations/supabase/client";

const Browse = () => {
  const { user } = useAuth();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedWebsite, setSelectedWebsite] = useState<any>(null);
  const [createOrderOpen, setCreateOrderOpen] = useState(false);
  const [publisherRequirements, setPublisherRequirements] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPublisherRequirements();
  }, []);

  const fetchPublisherRequirements = async () => {
    try {
      const { data, error } = await supabase
        .from('publisher_requirements')
        .select(`
          *,
          profiles:publisher_id (
            full_name,
            email
          )
        `)
        .eq('is_active', true)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setPublisherRequirements(data || []);
    } catch (error) {
      console.error('Error fetching publisher requirements:', error);
    } finally {
      setLoading(false);
    }
  };

  const filteredWebsites = publisherRequirements.filter(req => {
    const matchesSearch = req.website_url.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         (req.categories && req.categories.some((cat: string) => 
                           cat.toLowerCase().includes(searchTerm.toLowerCase())));
    
    const matchesCategory = selectedCategory === "all" || 
                           (req.categories && req.categories.includes(selectedCategory));
    
    return matchesSearch && matchesCategory;
  });

  const handleOrderClick = (website: any) => {
    if (!user) {
      // Redirect to login or show sign up prompt
      window.location.href = '/login';
      return;
    }
    setSelectedWebsite(website);
    setCreateOrderOpen(true);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">Loading websites...</div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Browse Websites</h1>
          <p className="text-gray-600">
            Find the perfect websites to publish your guest posts
          </p>
        </div>

        {/* Search and Filter */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search websites..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Categories</option>
              <option value="Technology">Technology</option>
              <option value="Business">Business</option>
              <option value="Health">Health</option>
              <option value="Travel">Travel</option>
              <option value="Finance">Finance</option>
              <option value="Lifestyle">Lifestyle</option>
            </select>
          </div>
        </div>

        {/* Websites Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredWebsites.map((website) => (
            <Card key={website.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="flex items-center space-x-2">
                      <Globe className="h-5 w-5 text-blue-600" />
                      <span className="truncate">{website.website_url}</span>
                    </CardTitle>
                    <CardDescription className="mt-2">
                      Published by {website.profiles?.full_name || 'Anonymous'}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      ${website.price_per_post}
                    </div>
                    <p className="text-xs text-gray-500">per post</p>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  {/* Website Stats */}
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    {website.domain_authority && (
                      <div>
                        <div className="flex items-center space-x-1">
                          <BarChart3 className="h-4 w-4 text-blue-500" />
                          <span>DA: {website.domain_authority}</span>
                        </div>
                      </div>
                    )}
                    {website.traffic_monthly && (
                      <div>
                        <span>Traffic: {website.traffic_monthly.toLocaleString()}/mo</span>
                      </div>
                    )}
                    {website.turnaround_time && (
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4 text-orange-500" />
                        <span>{website.turnaround_time} days</span>
                      </div>
                    )}
                  </div>

                  {/* Categories */}
                  {website.categories && website.categories.length > 0 && (
                    <div>
                      <div className="flex flex-wrap gap-1">
                        {website.categories.slice(0, 3).map((category: string) => (
                          <Badge key={category} variant="secondary" className="text-xs">
                            {category}
                          </Badge>
                        ))}
                        {website.categories.length > 3 && (
                          <Badge variant="outline" className="text-xs">
                            +{website.categories.length - 3} more
                          </Badge>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Content Guidelines Preview */}
                  {website.content_guidelines && (
                    <div className="text-xs text-gray-600 bg-gray-50 p-2 rounded">
                      <p className="font-medium">Guidelines:</p>
                      <p className="truncate">
                        {typeof website.content_guidelines === 'string' 
                          ? website.content_guidelines 
                          : JSON.stringify(website.content_guidelines).substring(0, 100)}...
                      </p>
                    </div>
                  )}

                  {/* Order Button */}
                  <Button 
                    onClick={() => handleOrderClick(website)}
                    className="w-full"
                  >
                    {user ? `Order for $${website.price_per_post}` : 'Sign In to Order'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredWebsites.length === 0 && (
          <div className="text-center py-12">
            <Globe className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No websites found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || selectedCategory !== "all" 
                ? "Try adjusting your search terms or filters" 
                : "No publisher requirements have been added yet"}
            </p>
          </div>
        )}
      </div>
      
      <Footer />
      
      <CreateOrderModal 
        open={createOrderOpen}
        onOpenChange={setCreateOrderOpen}
        publisherRequirement={selectedWebsite}
      />
    </div>
  );
};

export default Browse;
