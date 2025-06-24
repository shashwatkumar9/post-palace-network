
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Globe, ArrowLeft, Zap, Target, BarChart3, Clock } from "lucide-react";
import { Link } from "react-router-dom";

const BuyPR = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">GuestPost Pro</span>
            </Link>
            <div className="flex items-center space-x-4">
              <Link to="/browse">
                <Button variant="outline">Browse Websites</Button>
              </Link>
              <Link to="/login">
                <Button>Sign In</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-green-100 text-green-800">
            Premium PR Services
          </Badge>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            Buy Premium PR Posts
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get your content published on high-authority news sites, magazines, and industry publications. 
            Build brand awareness, establish authority, and drive targeted traffic with premium PR placements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Card className="text-center">
            <CardHeader>
              <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Fast Publication</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Get published within 24-48 hours on premium news sites and industry publications.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
              <CardTitle>Targeted Reach</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Reach your specific audience through niche publications and industry-specific media.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
              <CardTitle>High Authority</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Featured on websites with DA 70+ including major news outlets and trade publications.
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Clock className="h-12 w-12 text-orange-600 mx-auto mb-4" />
              <CardTitle>Full Service</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Complete service including content writing, media outreach, and publication management.
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <div className="bg-white rounded-lg p-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Coming Soon
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Our premium PR service is currently in development. Join our waitlist to be notified when it's available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg">Join Waitlist</Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" size="lg">Contact Us</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyPR;
