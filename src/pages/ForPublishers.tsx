import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DollarSign, Globe, Users, BarChart3, Shield, Zap } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ForPublishers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Monetize Your Website with Guest Posts</h1>
          <p className="text-xl mb-12">
            Unlock new revenue streams by partnering with top brands and content creators
          </p>
          <div className="flex justify-center space-x-4">
            <Link to="/add-website">
              <Button className="bg-white text-green-600 hover:bg-green-50">
                List Your Website
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-green-600">
                Browse Opportunities
              </Button>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Earning Potential */}
          <Card className="bg-green-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <DollarSign className="h-5 w-5 text-green-600" />
                <span>Maximize Your Earnings</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Set your own prices and earn up to $500+ per guest post.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Reach New Audiences */}
          <Card className="bg-blue-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <span>Expand Your Reach</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Connect with a global network of advertisers and content creators.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Control Your Content */}
          <Card className="bg-yellow-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-yellow-600" />
                <span>Maintain Full Control</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Approve or reject content submissions based on your guidelines.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Streamlined Workflow */}
          <Card className="bg-purple-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Zap className="h-5 w-5 text-purple-600" />
                <span>Automated Process</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Enjoy a seamless experience with automated content delivery and payments.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Detailed Analytics */}
          <Card className="bg-red-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-red-600" />
                <span>Track Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Monitor your earnings and website statistics with detailed analytics.
              </CardDescription>
            </CardContent>
          </Card>

          {/* Dedicated Support */}
          <Card className="bg-indigo-50 hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-indigo-600" />
                <span>Dedicated Support</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get personalized assistance from our expert support team.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="text-center mt-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Get Started?</h2>
          <p className="text-gray-600 mb-8">
            Join our network of successful publishers and unlock new revenue opportunities.
          </p>
          <Link to="/add-website">
            <Button className="bg-green-600 hover:bg-green-700 text-white">
              List Your Website Today
            </Button>
          </Link>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default ForPublishers;
