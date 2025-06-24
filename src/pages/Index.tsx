
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Users, Globe, Shield, TrendingUp, Star, Award, Clock, CheckCircle, MessageSquare, BarChart3, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">GuestPost Pro</span>
          </div>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/publishers" className="text-gray-600 hover:text-blue-600 transition-colors">For Publishers</Link>
            <Link to="/buyers" className="text-gray-600 hover:text-blue-600 transition-colors">For Buyers</Link>
            <Link to="/affiliate" className="text-gray-600 hover:text-blue-600 transition-colors">Affiliate Program</Link>
            <Link to="/login" className="text-gray-600 hover:text-blue-600 transition-colors">Login</Link>
            <Link to="/register">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <Badge className="mb-4 bg-blue-100 text-blue-800 hover:bg-blue-100">
            #1 Guest Post Marketplace Worldwide
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Connect Publishers & Buyers in the Ultimate 
            <span className="text-blue-600"> Guest Post</span> Marketplace
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Discover high-quality websites for guest posting or monetize your site by offering guest post opportunities. 
            Built for scale, security, and success with over 75,000 verified websites across all niches and industries. 
            Our platform connects content creators with premium publishers worldwide, ensuring authentic, high-quality 
            backlinks that drive real results for your SEO and content marketing campaigns.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Start as Publisher
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Browse Websites
              </Button>
            </Link>
            <Link to="/buy-pr">
              <Button variant="secondary" size="lg" className="text-lg px-8 py-3">
                Buy PR
              </Button>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            Join 25,000+ publishers and buyers who trust GuestPost Pro
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Trusted by Thousands Worldwide
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our platform has facilitated millions of dollars in guest post transactions, 
              connecting content creators with premium publishers across the globe.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="p-6 rounded-lg bg-blue-50">
              <div className="text-4xl font-bold text-blue-600 mb-2">25,000+</div>
              <div className="text-gray-600 font-medium">Active Publishers</div>
              <div className="text-sm text-gray-500 mt-1">Verified websites</div>
            </div>
            <div className="p-6 rounded-lg bg-green-50">
              <div className="text-4xl font-bold text-green-600 mb-2">75,000+</div>
              <div className="text-gray-600 font-medium">Websites Listed</div>
              <div className="text-sm text-gray-500 mt-1">Across all niches</div>
            </div>
            <div className="p-6 rounded-lg bg-purple-50">
              <div className="text-4xl font-bold text-purple-600 mb-2">250,000+</div>
              <div className="text-gray-600 font-medium">Posts Published</div>
              <div className="text-sm text-gray-500 mt-1">High-quality content</div>
            </div>
            <div className="p-6 rounded-lg bg-orange-50">
              <div className="text-4xl font-bold text-orange-600 mb-2">99.2%</div>
              <div className="text-gray-600 font-medium">Success Rate</div>
              <div className="text-sm text-gray-500 mt-1">Customer satisfaction</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose GuestPost Pro?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to succeed in guest posting, whether you're buying or selling. 
              Our comprehensive platform offers advanced tools, global reach, and unmatched security 
              to ensure your content marketing campaigns deliver exceptional results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Global Reach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access websites from 120+ countries with advanced filtering by traffic, language, and niche. 
                  Our global network ensures you can reach any audience, anywhere in the world.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>100% Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  3-month free guarantee on all posts with optional extended protection up to 12 months. 
                  Full refund if your content is removed or significantly altered.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <TrendingUp className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Smart Pricing</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Transparent marketplace pricing with competitive rates. Multi-currency support 
                  and flexible payment options make transactions seamless for global users.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Premium Quality</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  All websites are manually reviewed and verified. We ensure high domain authority, 
                  genuine traffic, and compliance with quality standards for maximum SEO impact.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Expert Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  24/7 customer support with dedicated account managers for high-volume clients. 
                  Get expert guidance on content strategy and campaign optimization.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Fast Turnaround</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Average publication time of 3-5 business days. Real-time order tracking and 
                  automated notifications keep you informed throughout the entire process.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Analytics & Reporting</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Comprehensive analytics dashboard with detailed performance metrics, 
                  ROI tracking, and exportable reports for all your campaigns.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Advanced Tools</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bulk upload capabilities, automated outreach tools, content calendar integration, 
                  and API access for seamless workflow management.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How GuestPost Pro Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our streamlined process makes guest posting simple and effective for both publishers and buyers
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {/* For Publishers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Publishers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Register & Verify</h4>
                    <p className="text-gray-600">Create your account and verify your identity through our secure process.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Add Websites</h4>
                    <p className="text-gray-600">Submit your websites with detailed metrics, categories, and pricing information.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Approved</h4>
                    <p className="text-gray-600">Our team reviews and approves quality websites that meet our standards.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 text-blue-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Receive Orders</h4>
                    <p className="text-gray-600">Start receiving guest post orders and earning money from your traffic.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* For Buyers */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">For Buyers</h3>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Browse & Filter</h4>
                    <p className="text-gray-600">Search through thousands of verified websites using our advanced filters.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Create Campaign</h4>
                    <p className="text-gray-600">Set up your project, upload content, and select target websites.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Place Orders</h4>
                    <p className="text-gray-600">Add websites to cart, review details, and complete secure payment.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 text-green-600 rounded-full w-8 h-8 flex items-center justify-center font-bold">4</div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Track Results</h4>
                    <p className="text-gray-600">Monitor publication status and track the performance of your campaigns.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about our guest posting marketplace
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-left">How does the pricing work?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Publishers set their own prices for guest posts. The prices you see include all fees and represent 
                  the final amount you'll pay. We ensure transparent pricing with no hidden costs or surprise charges.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">What is the publication guarantee?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We offer a 3-month free guarantee on all published posts. If your content is removed or significantly 
                  altered within this period, we'll either restore it or provide a full refund. Extended protection 
                  is available for up to 12 months.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">How are websites verified?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Every website undergoes manual review by our quality assurance team. We verify traffic statistics, 
                  domain authority, content quality, and compliance with our guidelines before approval.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">Can I become both a publisher and buyer?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! You can easily switch between buyer and publisher roles within the same account. Many users 
                  monetize their own websites while also purchasing guest posts for their campaigns.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">What payment methods do you accept?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We accept all major credit cards, PayPal, bank transfers, and cryptocurrency payments. 
                  Multi-currency support is available for international transactions.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-left">How long does publication take?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Average publication time is 3-5 business days after order confirmation. Complex orders or 
                  high-authority websites may take longer. You'll receive real-time updates throughout the process.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Your Guest Posting Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of publishers and buyers who trust GuestPost Pro for their content marketing needs. 
            Whether you're looking to monetize your website traffic or build high-quality backlinks for SEO, 
            our platform provides everything you need to succeed in the competitive world of digital marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Create Free Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
                Explore Websites
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Globe className="h-6 w-6" />
                <span className="text-xl font-bold">GuestPost Pro</span>
              </div>
              <p className="text-gray-400 mb-4">
                The premier marketplace for guest posting opportunities, connecting publishers and buyers worldwide.
              </p>
              <div className="flex space-x-4">
                <Badge variant="secondary">Trusted by 25,000+ users</Badge>
              </div>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Publishers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/add-website" className="hover:text-white transition-colors">Add Website</Link></li>
                <li><Link to="/dashboard" className="hover:text-white transition-colors">Dashboard</Link></li>
                <li><Link to="/payouts" className="hover:text-white transition-colors">Payouts</Link></li>
                <li><Link to="/bulk-add-websites" className="hover:text-white transition-colors">Bulk Add Websites</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Buyers</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/browse" className="hover:text-white transition-colors">Browse Sites</Link></li>
                <li><Link to="/projects" className="hover:text-white transition-colors">My Projects</Link></li>
                <li><Link to="/orders" className="hover:text-white transition-colors">Order History</Link></li>
                <li><Link to="/buy-pr" className="hover:text-white transition-colors">Buy PR</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/help" className="hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
                <li><Link to="/affiliate" className="hover:text-white transition-colors">Affiliate Program</Link></li>
                <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 mb-4 md:mb-0">
                &copy; 2024 GuestPost Pro. All rights reserved.
              </p>
              <div className="flex space-x-6 text-gray-400">
                <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                <Link to="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
