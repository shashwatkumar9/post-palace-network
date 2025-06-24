
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, DollarSign, Users, Star, Shield, Clock, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const ForPublishers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">GuestPost Pro</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
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
          <Badge className="mb-4 bg-green-100 text-green-800 hover:bg-green-100">
            Monetize Your Website Traffic
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Your Website Into a 
            <span className="text-blue-600"> Revenue Stream</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join thousands of successful publishers who earn consistent income by offering guest post opportunities 
            on their websites. Our platform connects you with quality buyers, handles payments securely, and provides 
            all the tools you need to maximize your website's earning potential while maintaining editorial control.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Earning Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/add-website">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Add Your Website
              </Button>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            Free to join • No setup fees • Instant approval process
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Publishers Choose GuestPost Pro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to monetize your website traffic effectively and securely
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>High Earning Potential</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Set your own prices and earn up to $500+ per guest post. Our publishers average 
                  $2,500 monthly revenue from their websites with consistent order flow.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Full Editorial Control</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Review and approve all content before publication. Maintain your website's quality 
                  standards while earning from guest post opportunities.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Clock className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Quick Payouts</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Receive payments within 24 hours of content publication. Multiple payout methods 
                  available including PayPal, bank transfer, and cryptocurrency.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Quality Buyers</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access to verified buyers and established brands. All orders are pre-paid and 
                  guaranteed, eliminating payment disputes and collection issues.
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
              How Publishers Earn Money
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, straightforward process to start earning from your website traffic
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Register & Add Your Website</h3>
                  <p className="text-gray-600 mb-4">
                    Create your publisher account and submit your website for review. Provide details about your traffic, 
                    audience demographics, and content categories. Set your preferred pricing for guest posts.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Tip:</strong> Websites with higher traffic and domain authority can command premium prices. 
                      Our average publisher earns $150-$300 per guest post.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Approved & Go Live</h3>
                  <p className="text-gray-600 mb-4">
                    Our quality assurance team reviews your website within 24-48 hours. Once approved, your website 
                    becomes visible to thousands of potential buyers searching for guest post opportunities.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Approval Criteria:</strong> We look for original content, regular updates, organic traffic, 
                      and compliance with our quality guidelines.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Receive & Review Orders</h3>
                  <p className="text-gray-600 mb-4">
                    Buyers will place orders for guest posts on your website. Review the submitted content, request 
                    revisions if needed, and approve posts that meet your editorial standards.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Quality Control:</strong> You maintain full editorial control. Reject any content that 
                      doesn't align with your website's standards or audience.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Publish Content & Get Paid</h3>
                  <p className="text-gray-600 mb-4">
                    Once you publish the approved content, payment is automatically released to your account. 
                    Track your earnings, download reports, and request payouts through your publisher dashboard.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Payment Security:</strong> All payments are held in escrow until content is published. 
                      No risk of non-payment or chargebacks.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Examples Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Earning Potential Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See what publishers with different website metrics typically earn
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Growing Website</Badge>
                <CardTitle className="text-2xl">$75-$125</CardTitle>
                <CardDescription>Per Guest Post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Traffic:</span>
                  <span className="font-medium">10k-50k visitors</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domain Rating:</span>
                  <span className="font-medium">20-40</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts/Month:</span>
                  <span className="font-medium">2-4</span>
                </div>
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Monthly Potential:</span>
                    <span className="text-green-600">$300-$500</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-blue-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <Badge className="absolute -top-2 -right-2 bg-blue-600">Most Popular</Badge>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Established Website</Badge>
                <CardTitle className="text-2xl">$150-$250</CardTitle>
                <CardDescription>Per Guest Post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Traffic:</span>
                  <span className="font-medium">50k-200k visitors</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domain Rating:</span>
                  <span className="font-medium">40-65</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts/Month:</span>
                  <span className="font-medium">4-8</span>
                </div>
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Monthly Potential:</span>
                    <span className="text-green-600">$1,200-$2,000</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Authority Website</Badge>
                <CardTitle className="text-2xl">$300-$500+</CardTitle>
                <CardDescription>Per Guest Post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Monthly Traffic:</span>
                  <span className="font-medium">200k+ visitors</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Domain Rating:</span>
                  <span className="font-medium">65+</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Posts/Month:</span>
                  <span className="font-medium">6-12</span>
                </div>
                <div className="border-t pt-3 mt-4">
                  <div className="flex justify-between font-semibold">
                    <span>Monthly Potential:</span>
                    <span className="text-green-600">$3,000-$6,000+</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Monetizing Your Website?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of successful publishers who trust GuestPost Pro to monetize their website traffic. 
            Start earning today with our simple, secure, and profitable guest posting marketplace.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Create Publisher Account
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/add-website">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
                Add Your Website
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForPublishers;
