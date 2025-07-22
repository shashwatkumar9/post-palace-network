
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Globe, ArrowLeft, Search, Book, MessageCircle, Mail, Phone, FileText, Users, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const HelpCenter = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">WholePR</span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Help Center</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Find answers, get support, and learn how to make the most of WholePR. 
            Our comprehensive help center provides everything you need to succeed with guest posting.
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <Input
              placeholder="Search for help articles, guides, and tutorials..."
              className="pl-12 py-4 text-lg"
            />
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Link to="/contact">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <MessageCircle className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Contact Support</CardTitle>
                <CardDescription>
                  Get personalized help from our expert support team
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Link to="/faq">
            <Card className="hover:shadow-lg transition-shadow cursor-pointer">
              <CardHeader className="text-center">
                <Book className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>FAQ</CardTitle>
                <CardDescription>
                  Browse frequently asked questions and common solutions
                </CardDescription>
              </CardHeader>
            </Card>
          </Link>

          <Card className="hover:shadow-lg transition-shadow cursor-pointer">
            <CardHeader className="text-center">
              <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>Video Tutorials</CardTitle>
              <CardDescription>
                Watch step-by-step guides and platform walkthroughs
              </CardDescription>
            </CardHeader>
          </Card>
        </div>

        {/* Help Categories */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse Help Topics</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <Users className="h-8 w-8 text-blue-600 mb-2" />
                <CardTitle>Getting Started</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">Account Setup & Registration</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Platform Overview</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">First Steps as Publisher</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">First Steps as Buyer</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Profile Verification</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Globe className="h-8 w-8 text-green-600 mb-2" />
                <CardTitle>For Publishers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">Adding Your Website</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Setting Pricing & Guidelines</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Managing Orders</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Content Review Process</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Payout Management</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Search className="h-8 w-8 text-purple-600 mb-2" />
                <CardTitle>For Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">Finding the Right Websites</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Placing Orders</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Content Guidelines</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Order Tracking</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Quality Assurance</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Mail className="h-8 w-8 text-orange-600 mb-2" />
                <CardTitle>Payment & Billing</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">Payment Methods</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Billing Cycles</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Refund Policy</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Payout Schedule</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Tax Information</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <FileText className="h-8 w-8 text-red-600 mb-2" />
                <CardTitle>Policies & Guidelines</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">Content Guidelines</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Quality Standards</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Prohibited Content</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Community Rules</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Dispute Resolution</a></li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Phone className="h-8 w-8 text-indigo-600 mb-2" />
                <CardTitle>Technical Support</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li><a href="#" className="text-blue-600 hover:underline">Platform Issues</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Browser Compatibility</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Upload Problems</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Account Access Issues</a></li>
                  <li><a href="#" className="text-blue-600 hover:underline">Feature Requests</a></li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Articles */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Popular Help Articles</h2>
          
          <div className="space-y-4">
            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      How to verify my website for publishing
                    </h3>
                    <p className="text-gray-600">
                      Step-by-step guide to get your website approved and start earning from guest posts
                    </p>
                  </div>
                  <Badge variant="secondary">Popular</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Understanding pricing and commission structure
                    </h3>
                    <p className="text-gray-600">
                      Learn about our transparent pricing model and how commissions work
                    </p>
                  </div>
                  <Badge variant="secondary">Popular</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Best practices for guest post content
                    </h3>
                    <p className="text-gray-600">
                      Guidelines for creating high-quality content that gets approved quickly
                    </p>
                  </div>
                  <Badge variant="secondary">Popular</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Contact Section */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Still Need Help?
          </h3>
          <p className="text-blue-700 mb-6 text-lg">
            Our support team is available 24/7 to assist you with any questions or issues you may have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Schedule a Call
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HelpCenter;
