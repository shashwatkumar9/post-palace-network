
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Globe, ArrowLeft, Plus, Save } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, countries, languages } from "@/data/dummyWebsites";

const AddWebsite = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // This would come from auth context
  const [formData, setFormData] = useState({
    websiteUrl: "",
    websiteName: "",
    description: "",
    category: "",
    country: "",
    language: "",
    monthlyTraffic: "",
    domainRating: "",
    price: "",
    linkType: "",
    maxLinks: "",
    homepageDisplay: false,
    isAdvertisement: false,
    topCountries: ["", "", "", "", ""],
    specialPricing: {
      gambling: "",
      betting: "",
      crypto: "",
      forex: "",
      adult: ""
    }
  });

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleTopCountryChange = (index: number, value: string) => {
    const newTopCountries = [...formData.topCountries];
    newTopCountries[index] = value;
    setFormData(prev => ({
      ...prev,
      topCountries: newTopCountries
    }));
  };

  const handleSpecialPricingChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      specialPricing: {
        ...prev.specialPricing,
        [field]: value
      }
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      // Store form data and redirect to registration
      localStorage.setItem('pendingWebsiteData', JSON.stringify(formData));
      // Redirect to register page
      window.location.href = '/register';
      return;
    }

    // Handle form submission for logged-in users
    console.log('Website data:', formData);
    // Add API call here
  };

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
                <Button variant="outline" className="flex items-center">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Back to Dashboard
                </Button>
              </Link>
              {!isLoggedIn && (
                <Link to="/login">
                  <Button>Sign In</Button>
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Add Your Website</h1>
          <p className="text-xl text-gray-600">
            List your website on our marketplace and start earning from guest post opportunities. 
            Provide accurate information to attract quality buyers and maximize your earnings.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Globe className="h-5 w-5 mr-2" />
                Basic Website Information
              </CardTitle>
              <CardDescription>
                Provide essential details about your website
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="websiteUrl">Website URL *</Label>
                  <Input
                    id="websiteUrl"
                    type="url"
                    placeholder="https://example.com"
                    value={formData.websiteUrl}
                    onChange={(e) => handleInputChange('websiteUrl', e.target.value)}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="websiteName">Website Name *</Label>
                  <Input
                    id="websiteName"
                    placeholder="Example Blog"
                    value={formData.websiteName}
                    onChange={(e) => handleInputChange('websiteName', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">Website Description *</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your website's content, audience, and niche..."
                  rows={4}
                  value={formData.description}
                  onChange={(e) => handleInputChange('description', e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label>Primary Category *</Label>
                  <Select value={formData.category} onValueChange={(value) => handleInputChange('category', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select category" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {categories.map((category) => (
                        <SelectItem key={category} value={category}>
                          {category}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Primary Country *</Label>
                  <Select value={formData.country} onValueChange={(value) => handleInputChange('country', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {countries.map((country) => (
                        <SelectItem key={country} value={country}>
                          {country}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Primary Language *</Label>
                  <Select value={formData.language} onValueChange={(value) => handleInputChange('language', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select language" />
                    </SelectTrigger>
                    <SelectContent className="max-h-60 overflow-y-auto">
                      {languages.map((language) => (
                        <SelectItem key={language} value={language}>
                          {language}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Traffic & SEO Metrics */}
          <Card>
            <CardHeader>
              <CardTitle>Traffic & SEO Metrics</CardTitle>
              <CardDescription>
                Provide accurate traffic and SEO data to attract quality buyers
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="monthlyTraffic">Monthly Traffic *</Label>
                  <Input
                    id="monthlyTraffic"
                    placeholder="e.g., 50000"
                    value={formData.monthlyTraffic}
                    onChange={(e) => handleInputChange('monthlyTraffic', e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-500">Enter monthly unique visitors</p>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="domainRating">Domain Rating (Ahrefs) *</Label>
                  <Input
                    id="domainRating"
                    type="number"
                    min="0"
                    max="100"
                    placeholder="e.g., 45"
                    value={formData.domainRating}
                    onChange={(e) => handleInputChange('domainRating', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Top 5 Traffic Countries *</Label>
                <p className="text-sm text-gray-500 mb-3">List your top 5 countries by traffic volume</p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  {formData.topCountries.map((country, index) => (
                    <div key={index} className="space-y-2">
                      <Label>#{index + 1}</Label>
                      <Select 
                        value={country} 
                        onValueChange={(value) => handleTopCountryChange(index, value)}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select country" />
                        </SelectTrigger>
                        <SelectContent className="max-h-60 overflow-y-auto">
                          {countries.map((countryOption) => (
                            <SelectItem key={countryOption} value={countryOption}>
                              {countryOption}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Pricing & Link Policies */}
          <Card>
            <CardHeader>
              <CardTitle>Pricing & Link Policies</CardTitle>
              <CardDescription>
                Set your pricing and define your link policies
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="price">Standard Price (USD) *</Label>
                  <Input
                    id="price"
                    type="number"
                    min="25"
                    placeholder="e.g., 150"
                    value={formData.price}
                    onChange={(e) => handleInputChange('price', e.target.value)}
                    required
                  />
                  <p className="text-sm text-gray-500">Minimum $25</p>
                </div>

                <div className="space-y-2">
                  <Label>Link Type *</Label>
                  <Select value={formData.linkType} onValueChange={(value) => handleInputChange('linkType', value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select link type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dofollow">Dofollow Only</SelectItem>
                      <SelectItem value="Nofollow">Nofollow Only</SelectItem>
                      <SelectItem value="Any">Any Link Type</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="maxLinks">Maximum Links per Post *</Label>
                  <Input
                    id="maxLinks"
                    type="number"
                    min="1"
                    max="10"
                    placeholder="e.g., 3"
                    value={formData.maxLinks}
                    onChange={(e) => handleInputChange('maxLinks', e.target.value)}
                    required
                  />
                </div>
              </div>

              <div>
                <Label className="text-base font-medium">Special Topic Pricing (Optional)</Label>
                <p className="text-sm text-gray-500 mb-3">Set different prices for restricted categories</p>
                <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="gambling">Gambling</Label>
                    <Input
                      id="gambling"
                      type="number"
                      placeholder="USD"
                      value={formData.specialPricing.gambling}
                      onChange={(e) => handleSpecialPricingChange('gambling', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="betting">Betting</Label>
                    <Input
                      id="betting"
                      type="number"
                      placeholder="USD"
                      value={formData.specialPricing.betting}
                      onChange={(e) => handleSpecialPricingChange('betting', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="crypto">Cryptocurrency</Label>
                    <Input
                      id="crypto"
                      type="number"
                      placeholder="USD"
                      value={formData.specialPricing.crypto}
                      onChange={(e) => handleSpecialPricingChange('crypto', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="forex">Forex</Label>
                    <Input
                      id="forex"
                      type="number"
                      placeholder="USD"
                      value={formData.specialPricing.forex}
                      onChange={(e) => handleSpecialPricingChange('forex', e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="adult">Adult Content</Label>
                    <Input
                      id="adult"
                      type="number"
                      placeholder="USD"
                      value={formData.specialPricing.adult}
                      onChange={(e) => handleSpecialPricingChange('adult', e.target.value)}
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="homepageDisplay"
                    checked={formData.homepageDisplay}
                    onCheckedChange={(checked) => handleInputChange('homepageDisplay', checked)}
                  />
                  <Label htmlFor="homepageDisplay">
                    Posts can be displayed on homepage
                  </Label>
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="isAdvertisement"
                    checked={formData.isAdvertisement}
                    onCheckedChange={(checked) => handleInputChange('isAdvertisement', checked)}
                  />
                  <Label htmlFor="isAdvertisement">
                    Posts will be marked as "Sponsored" or "Advertisement"
                  </Label>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end space-x-4">
            <Button type="button" variant="outline">
              Save as Draft
            </Button>
            <Button type="submit" className="flex items-center">
              <Save className="h-4 w-4 mr-2" />
              {isLoggedIn ? 'Submit for Review' : 'Continue to Registration'}
            </Button>
          </div>

          {!isLoggedIn && (
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-blue-900 mb-2">
                Complete Registration to Submit
              </h3>
              <p className="text-blue-700 mb-4">
                Your website information will be saved and you'll be redirected to create your account.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default AddWebsite;
