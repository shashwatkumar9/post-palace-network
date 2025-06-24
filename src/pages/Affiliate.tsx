
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, DollarSign, Users, Share2, BarChart3, Gift, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";

const Affiliate = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">GuestPost Pro</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/publishers" className="text-gray-600 hover:text-blue-600 transition-colors">For Publishers</Link>
            <Link to="/buyers" className="text-gray-600 hover:text-blue-600 transition-colors">For Buyers</Link>
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
          <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-100">
            Earn 7.5% Commission on Every Sale
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Turn Your Network Into a 
            <span className="text-purple-600"> Revenue Stream</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Join our exclusive affiliate program and earn substantial commissions by promoting the world's leading 
            guest post marketplace. With a 7.5% commission rate, $50 minimum payout, and lifetime tracking, 
            you'll build a sustainable income stream while helping others succeed in content marketing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-3 bg-purple-600 hover:bg-purple-700">
                Join Affiliate Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/login">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Affiliate Login
              </Button>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            Free to join • Lifetime commissions • $50 minimum payout
          </div>
        </div>
      </section>

      {/* Commission Structure */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Lucrative Commission Structure
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Earn competitive commissions on every purchase made by your referrals
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Card className="bg-gradient-to-r from-purple-500 to-pink-500 text-white mb-8">
              <CardHeader className="text-center">
                <div className="text-6xl font-bold mb-2">7.5%</div>
                <CardTitle className="text-2xl">Commission Rate</CardTitle>
                <CardDescription className="text-purple-100">
                  On all purchases made by your referred users
                </CardDescription>
              </CardHeader>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="text-center">
                <CardHeader>
                  <DollarSign className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle>Minimum Payout</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-green-600 mb-2">$50</div>
                  <p className="text-gray-600">
                    Request payouts once you reach $50 in commissions. 
                    Fast processing within 24-48 hours.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle>Lifetime Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-blue-600 mb-2">∞</div>
                  <p className="text-gray-600">
                    Earn commissions on all future purchases made by users 
                    you refer, for their entire lifetime.
                  </p>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle>Average Order</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-3xl font-bold text-purple-600 mb-2">$185</div>
                  <p className="text-gray-600">
                    Our average order value means you earn approximately 
                    $14 per successful referral.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Earning Examples */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real Earning Examples
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              See how our top affiliates are building substantial monthly income
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Part-Time Blogger</Badge>
                <CardTitle className="text-2xl">$250/month</CardTitle>
                <CardDescription>5 active referrals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-green-600">$3,000</div>
                  <div className="text-sm text-gray-500">Annual Earnings</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Referrals:</span>
                    <span className="font-medium">2-3 new users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg. Spend per User:</span>
                    <span className="font-medium">$180/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Investment:</span>
                    <span className="font-medium">5 hours/week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-purple-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <Badge className="absolute -top-2 -right-2 bg-purple-600">Most Common</Badge>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">SEO Consultant</Badge>
                <CardTitle className="text-2xl">$850/month</CardTitle>
                <CardDescription>15 active referrals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-purple-600">$10,200</div>
                  <div className="text-sm text-gray-500">Annual Earnings</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Referrals:</span>
                    <span className="font-medium">8-10 new users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg. Spend per User:</span>
                    <span className="font-medium">$220/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Investment:</span>
                    <span className="font-medium">10 hours/week</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Digital Agency</Badge>
                <CardTitle className="text-2xl">$2,400/month</CardTitle>
                <CardDescription>40+ active referrals</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="text-center mb-4">
                  <div className="text-4xl font-bold text-blue-600">$28,800</div>
                  <div className="text-sm text-gray-500">Annual Earnings</div>
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monthly Referrals:</span>
                    <span className="font-medium">15-20 new users</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Avg. Spend per User:</span>
                    <span className="font-medium">$250/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Time Investment:</span>
                    <span className="font-medium">15 hours/week</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How Our Affiliate Program Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Simple, transparent process to start earning commissions
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Sign Up & Get Your Link</h3>
                  <p className="text-gray-600 mb-4">
                    Register for our affiliate program and receive your unique tracking link instantly. 
                    Access your personalized dashboard with all the tools and resources you need to succeed.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Pro Tip:</strong> Use our marketing materials and content templates to get started quickly. 
                      We provide banners, email templates, and social media content.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Promote GuestPost Pro</h3>
                  <p className="text-gray-600 mb-4">
                    Share your affiliate link through your website, blog, social media, email list, or direct outreach. 
                    Target SEO professionals, content marketers, and business owners who need link building services.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Best Channels:</strong> SEO blogs, marketing forums, LinkedIn, Twitter, email newsletters, 
                      and direct outreach to businesses in your network.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Earn Lifetime Commissions</h3>
                  <p className="text-gray-600 mb-4">
                    When someone registers through your link and makes a purchase, you earn 7.5% commission on that order 
                    and all future orders they make. Track your earnings and referrals in real-time.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Lifetime Value:</strong> Our customers average $2,200 in lifetime spend, 
                      meaning each referral can earn you $165+ over time.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Get Paid Fast</h3>
                  <p className="text-gray-600 mb-4">
                    Request payouts once you reach $50 in commissions. We process payments within 24-48 hours via 
                    PayPal, bank transfer, or other supported methods. No fees, no delays.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Payment Methods:</strong> PayPal, direct bank transfer, cryptocurrency, 
                      and check payments available based on your location.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Resources */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Marketing Resources & Support
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to promote GuestPost Pro effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Share2 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Marketing Materials</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Professional banners, logos, and graphics in multiple sizes. 
                  Ready-to-use content for all your marketing channels.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Real-Time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Track clicks, conversions, and earnings in real-time. 
                  Detailed reports help you optimize your promotional strategies.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Gift className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Exclusive Bonuses</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Special promotions and bonuses for top-performing affiliates. 
                  Increased commission rates for high-volume referrers.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Dedicated Support</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Personal affiliate manager for support and optimization tips. 
                  Priority support for all affiliate-related questions.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Start Earning?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join our affiliate program today and start building a sustainable income stream. 
            With our high conversion rates and generous commission structure, success is within reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Join Affiliate Program
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-purple-600">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Affiliate;
