
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
import { generateDummyWebsites, categories, countries, languages, linkTypes } from "@/data/dummyWebsites";

const Browse = () => {
  const [filters, setFilters] = useState({
    category: "",
    country: "",
    language: "",
    minTraffic: [0],
    maxPrice: [1000],
    domainRating: [0],
    linkType: ""
  });

  const [searchTerm, setSearchTerm] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context

  const websites = generateDummyWebsites(isLoggedIn);

  // Filter websites based on current filters
  const filteredWebsites = websites.filter(website => {
    if (filters.category && website.category.toLowerCase() !== filters.category) return false;
    if (filters.country && website.country.toLowerCase() !== filters.country) return false;
    if (filters.language && website.language.toLowerCase() !== filters.language) return false;
    if (filters.linkType && website.linkType.toLowerCase() !== filters.linkType) return false;
    if (website.price > filters.maxPrice[0]) return false;
    if (website.domainRating < filters.domainRating[0]) return false;
    if (searchTerm && !website.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
        !website.description.toLowerCase().includes(searchTerm.toLowerCase())) return false;
    return true;
  });

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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Browse Premium Websites for Guest Posting
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Discover high-quality websites across all industries and niches for your guest posting campaigns. 
            Our marketplace features thousands of verified publishers with transparent pricing, detailed metrics, 
            and comprehensive filtering options to help you find the perfect match for your content marketing strategy.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-1/4">
            <Card className="sticky top-4">
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Filter className="h-5 w-5 mr-2" />
                  Advanced Filters
                </CardTitle>
                <CardDescription>
                  Refine your search to find the perfect websites for your guest posting needs
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Search */}
                <div className="space-y-2">
                  <Label>Search Websites</Label>
                  <div className="relative">
                    <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                    <Input
                      placeholder="Search by domain, niche, or keyword..."
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
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category.toLowerCase()}>
                          {category}
                        </SelectItem>
                      ))}
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
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country.toLowerCase()}>
                          {country}
                        </SelectItem>
                      ))}
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
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {languages.map((language) => (
                        <SelectItem key={language} value={language.toLowerCase()}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Link Type */}
                <div className="space-y-2">
                  <Label>Link Type</Label>
                  <Select value={filters.linkType} onValueChange={(value) => setFilters({...filters, linkType: value})}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select link type" />
                    </SelectTrigger>
                    <SelectContent>
                      {linkTypes.map((linkType) => (
                        <SelectItem key={linkType} value={linkType.toLowerCase()}>
                          {linkType}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Price Range */}
                <div className="space-y-2">
                  <Label>Maximum Price</Label>
                  <div className="px-2">
                    <Slider
                      value={filters.maxPrice}
                      onValueChange={(value) => setFilters({...filters, maxPrice: value})}
                      max={1000}
                      step={25}
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
                <Button variant="outline" className="w-full" onClick={() => setFilters({
                  category: "",
                  country: "",
                  language: "",
                  minTraffic: [0],
                  maxPrice: [1000],
                  domainRating: [0],
                  linkType: ""
                })}>Reset Filters</Button>
              </CardContent>
            </Card>
          </div>

          {/* Website Listings */}
          <div className="lg:w-3/4">
            <div className="mb-6 flex items-center justify-between">
              <div className="text-sm text-gray-600">
                Showing {filteredWebsites.length} verified websites out of {websites.length} available
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
              {filteredWebsites.slice(0, 20).map((website) => (
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
                        <CardDescription className="text-base mb-3">
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
                          Final Price
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

            {!isLoggedIn && (
              <div className="mt-8 p-6 bg-blue-50 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">
                  Unlock Full Website Details
                </h3>
                <p className="text-blue-700 mb-4">
                  Register now to see complete domain names, detailed metrics, and access our full database of 300+ verified websites.
                </p>
                <div className="flex justify-center space-x-4">
                  <Link to="/register">
                    <Button>Create Free Account</Button>
                  </Link>
                  <Link to="/login">
                    <Button variant="outline">Sign In</Button>
                  </Link>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Browse;
