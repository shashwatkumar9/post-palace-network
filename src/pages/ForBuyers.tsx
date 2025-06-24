import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Search, BarChart3, Shield, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const ForBuyers = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">
            Maximize Your Reach with Guest Posting
          </h1>
          <p className="text-xl mb-8">
            Find the perfect websites to publish your content and drive targeted
            traffic to your business
          </p>
          <div className="max-w-2xl mx-auto relative">
            <Search className="absolute left-4 top-4 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search for websites by category, keyword, or domain..."
              className="w-full pl-12 py-3 rounded-full text-lg text-gray-700 focus:outline-none"
            />
          </div>
        </div>
      </div>

      {/* Key Benefits Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Targeted Traffic */}
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Target className="h-10 w-10 text-blue-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-center">
                Targeted Traffic
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Reach your ideal audience by publishing on niche-relevant websites
              </CardDescription>
            </CardContent>
          </Card>

          {/* High-Quality Backlinks */}
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <Star className="h-10 w-10 text-yellow-500 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-center">
                High-Quality Backlinks
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Boost your SEO with powerful backlinks from authoritative domains
              </CardDescription>
            </CardContent>
          </Card>

          {/* Brand Awareness */}
          <Card className="bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <BarChart3 className="h-10 w-10 text-green-600 mx-auto mb-4" />
              <CardTitle className="text-xl font-semibold text-center">
                Brand Awareness
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <CardDescription className="text-gray-600">
                Increase your brand visibility and establish thought leadership in
                your industry
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Trust and Security Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4 text-center">
          <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Safe and Secure Guest Posting
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            We verify all websites to ensure quality and protect your investment
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Quality Assurance */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Quality Assurance
              </h3>
              <p className="text-gray-600">
                Our team manually reviews each website to ensure it meets our strict
                quality standards. We check traffic, domain authority, content
                quality, and more.
              </p>
            </div>

            {/* Publication Guarantee */}
            <div className="text-left">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Publication Guarantee
              </h3>
              <p className="text-gray-600">
                We guarantee that your guest post will be published on the agreed
                website. If for any reason the publication fails, we will provide a
                full refund.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Get Started Section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Start Your Guest Posting Campaign Today
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Browse our marketplace and find the perfect websites for your content
        </p>
        <Link to="/browse">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full text-lg">
            Browse Websites
          </Button>
        </Link>
      </div>
      
      <Footer />
    </div>
  );
};

export default ForBuyers;
