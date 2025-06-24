
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Globe, Search, Heart, Filter, Star, TrendingUp, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Browse = () => {
  const [filters, setFilters] = useState({
    category: "",
    country: "",
    language: "",
    minTraffic: [0],
    maxPrice: [200],
    domainRating: [0]
  });

  const [searchTerm, setSearchTerm] = useState("");

  const websites = [
    {
      id: 1,
      name: "TechCrunch.com",
      description: "Leading technology news and analysis",
      category: "Technology",
      country: "United States",
      language: "English",
      traffic: "2.5M",
      domainRating: 92,
      price: 150,
      publisherPrice: 115,
      linkType: "Dofollow",
      maxLinks: 3,
      homepageDisplay: true,
      isAdvertisement: false
    },
    {
      id: 2,
      name: "BusinessInsider.com",
      description: "Business news, analysis and insights",
      category: "Business",
      country: "United States", 
      language: "English",
      traffic: "1.8M",
      domainRating: 88,
      price: 120,
      publisherPrice: 92,
      linkType: "Dofollow",
      maxLinks: 2,
      homepageDisplay: true,
      isAdvertisement: true
    },
    {
      id: 3,
      name: "HealthLine.com",
      description: "Trusted health and wellness information",
      category: "Health",
      country: "United States",
      language: "English", 
      traffic: "900k",
      domainRating: 85,
      price: 95,
      publisherPrice: 73,
      linkType: "Any",
      maxLinks: 4,
      homepageDisplay: false,
      isAdvertisement: true
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">GuestPost Pro</span>
            </Link>
            
            <div className="flex items-center space-x-4">
              <Link to="/dashboard">
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Browse Websites
          </h1>
          <p className="text-gray-600">
            Discover high-quality websites for your guest posting campaigns
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Filters
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <Label>Search</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search websites..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10"
                    />
                  </div>
                </div>

                {/* Category */}
                <div className="space-y-2">
                  <Label>Category</Label>
                  <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="technology">Technology</SelectItem>
                      <SelectItem value="business">Business</SelectItem>
                      <SelectItem value="health">Health</SelectItem>
                      <SelectItem value="lifestyle">Lifestyle</SelectItem>
                      <SelectItem value="finance">Finance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Country */}
                <div className="space-y-2">
                  <Label>Country</Label>
                  <Select value={filters.country} onValueChange={(value) => setFilters({...filters, country: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="us">United States</SelectItem>
                      <SelectItem value="uk">United Kingdom</SelectItem>
                      <SelectItem value="ca">Canada</SelectItem>
                      <SelectItem value="au">Australia</SelectItem>
                      <SelectItem value="de">Germany</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Language */}
                <div className="space-y-2">
                  <Label>Language</Label>
                  <Select value={filters.language} onValueChange={(value) => setFilters({...filters, language: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="english">English</SelectItem>
                      <SelectItem value="spanish">Spanish</SelectItem>
                      <SelectItem value="french">French</SelectItem>
                      <SelectItem value="german">German</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                {/* Traffic Range */}
                <div className="space-y-2">
                  <Label>Minimum Monthly Traffic</Label>
                  <div className="px-2">
                    <Slider
                      value={filters.minTraffic}
                      onValueChange={(value) => setFilters({...filters, minTraffic: value})}
                      max={1000000}
                      step={10000}
                      className="w-full"
                    />
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    {filters.minTraffic[0].toLocaleString()}+ visitors/month
                  </div>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <Label>Maximum Price</Label>
                  <div className="px-2">
                    <Slider
                      value={filters.maxPrice}
                      onValueChange={(value) => setFilters({...filters, maxPrice: value})}
                      max={500}
                      step={5}
                      className="w-full"
                    />
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    Up to ${filters.maxPrice[0]}
                  </div>
                </div>

                {/* Domain Rating */}
                <div className="space-y-2">
                  <Label>Minimum Domain Rating</Label>
                  <div className="px-2">
                    <Slider
                      value={filters.domainRating}
                      onValueChange={(value) => setFilters({...filters, domainRating: value})}
                      max={100}
                      step={1}
                      className="w-full"
                    />
                  </div>
                  <div className="text-sm text-gray-600 text-center">
                    DR {filters.domainRating[0]}+
                  </div>
                </div>

                <Button className="w-full">Apply Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Website Listings */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {websites.length} websites
              </div>
              <Select defaultValue="price-low">
                <SelectTrigger className="w-48">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="rating-high">Domain Rating: High to Low</SelectItem>
                  <SelectItem value="traffic-high">Traffic: High to Low</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-6">
              {websites.map((website) => (
                <Card key={website.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <CardTitle className="text-xl">{website.name}</CardTitle>
                          <Button variant="ghost" size="icon" className="text-gray-400 hover:text-red-500">
                            <Heart className="h-4 w-4" />
                          </Button>
                        </div>
                        <CardDescription className="text-base">
                          {website.description}
                        </CardDescription>
                        <div className="flex flex-wrap gap-2 mt-3">
                          <Badge variant="secondary">{website.category}</Badge>
                          <Badge variant="outline">{website.country}</Badge>
                          <Badge variant="outline">{website.language}</Badge>
                          {website.isAdvertisement && (
                            <Badge variant="destructive">Marked as Ad</Badge>
                          )}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-3xl font-bold text-blue-600">
                          ${website.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          Publisher gets ${website.publisherPrice}
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium">{website.traffic}</div>
                          <div className="text-xs text-gray-500">Monthly Traffic</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium">DR {website.domainRating}</div>
                          <div className="text-xs text-gray-500">Domain Rating</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium">{website.linkType}</div>
                          <div className="text-xs text-gray-500">Link Type</div>
                        </div>
                      </div>
                      
                      <div className="flex items-center space-x-2">
                        <Globe className="h-4 w-4 text-gray-400" />
                        <div>
                          <div className="text-sm font-medium">{website.maxLinks} links</div>
                          <div className="text-xs text-gray-500">Max Links</div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center">
                      <div className="flex space-x-2">
                        {website.homepageDisplay && (
                          <Badge variant="outline" className="text-green-600 border-green-600">
                            Homepage Display
                          </Badge>
                        )}
                      </div>
                      
                      <div className="flex space-x-2">
                        <Button variant="outline">View Details</Button>
                        <Button>Add to Cart</Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
