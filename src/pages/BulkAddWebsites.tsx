
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, ArrowLeft, Plus, Trash2, Save, Upload } from "lucide-react";
import { Link } from "react-router-dom";
import { categories, countries, languages } from "@/data/dummyWebsites";

interface WebsiteData {
  websiteUrl: string;
  category: string;
  country: string;
  language: string;
  price: string;
}

const BulkAddWebsites = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [websites, setWebsites] = useState<WebsiteData[]>([
    { websiteUrl: "", category: "", country: "", language: "", price: "" },
    { websiteUrl: "", category: "", country: "", language: "", price: "" },
    { websiteUrl: "", category: "", country: "", language: "", price: "" }
  ]);

  const addWebsite = () => {
    setWebsites([...websites, { websiteUrl: "", category: "", country: "", language: "", price: "" }]);
  };

  const removeWebsite = (index: number) => {
    if (websites.length > 1) {
      setWebsites(websites.filter((_, i) => i !== index));
    }
  };

  const updateWebsite = (index: number, field: keyof WebsiteData, value: string) => {
    const updatedWebsites = [...websites];
    updatedWebsites[index][field] = value;
    setWebsites(updatedWebsites);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isLoggedIn) {
      localStorage.setItem('pendingBulkWebsiteData', JSON.stringify(websites));
      window.location.href = '/register';
      return;
    }

    console.log('Bulk website data:', websites);
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

      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Bulk Add Websites</h1>
          <p className="text-xl text-gray-600">
            Add multiple websites at once to your publisher portfolio. Save time by uploading several websites 
            simultaneously with our streamlined bulk addition process.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                <span className="flex items-center">
                  <Upload className="h-5 w-5 mr-2" />
                  Bulk Website Information
                </span>
                <Button type="button" onClick={addWebsite} variant="outline" size="sm">
                  <Plus className="h-4 w-4 mr-2" />
                  Add Website
                </Button>
              </CardTitle>
              <CardDescription>
                Add up to 50 websites at once. Each website requires basic information for review.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-8">
              {websites.map((website, index) => (
                <div key={index} className="border rounded-lg p-6 relative">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">
                      Website #{index + 1}
                    </h3>
                    {websites.length > 1 && (
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => removeWebsite(index)}
                        className="text-red-600 hover:text-red-700"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor={`url-${index}`}>Website URL *</Label>
                      <Input
                        id={`url-${index}`}
                        type="url"
                        placeholder="https://example.com"
                        value={website.websiteUrl}
                        onChange={(e) => updateWebsite(index, 'websiteUrl', e.target.value)}
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label>Category *</Label>
                      <Select 
                        value={website.category} 
                        onValueChange={(value) => updateWebsite(index, 'category', value)}
                      >
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
                      <Label>Country *</Label>
                      <Select 
                        value={website.country} 
                        onValueChange={(value) => updateWebsite(index, 'country', value)}
                      >
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
                      <Label>Language *</Label>
                      <Select 
                        value={website.language} 
                        onValueChange={(value) => updateWebsite(index, 'language', value)}
                      >
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

                    <div className="space-y-2">
                      <Label htmlFor={`price-${index}`}>Price (USD) *</Label>
                      <Input
                        id={`price-${index}`}
                        type="number"
                        min="25"
                        placeholder="150"
                        value={website.price}
                        onChange={(e) => updateWebsite(index, 'price', e.target.value)}
                        required
                      />
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Important Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Bulk Upload Guidelines</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li>Each website will be individually reviewed by our quality assurance team</li>
                  <li>You'll receive email notifications for each website's approval status</li>
                  <li>Rejected websites can be resubmitted with corrections</li>
                  <li>Processing time: 2-5 business days per website</li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-900 mb-2">Quality Requirements</h4>
                <ul className="list-disc list-inside space-y-1 text-yellow-800">
                  <li>Minimum Domain Rating (DR) of 20 required</li>
                  <li>Websites must have organic traffic and real content</li>
                  <li>No adult content, gambling, or illegal activities</li>
                  <li>Content must be in the specified language</li>
                </ul>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-900 mb-2">After Submission</h4>
                <ul className="list-disc list-inside space-y-1 text-green-800">
                  <li>You'll receive a confirmation email with tracking information</li>
                  <li>Track progress in your publisher dashboard</li>
                  <li>Approved websites will be automatically listed</li>
                  <li>Start receiving orders immediately after approval</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          {/* Submit Buttons */}
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

export default BulkAddWebsites;
