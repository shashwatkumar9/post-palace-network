
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Globe, Search, Target, BarChart3, Shield, Clock, CheckCircle, Star } from "lucide-react";
import { Link } from "react-router-dom";

const ForBuyers = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-2">
            <Globe className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">GuestPost Pro</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/publishers" className="text-gray-600 hover:text-blue-600 transition-colors">For Publishers</Link>
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
            Premium Guest Posting Made Easy
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Build High-Quality 
            <span className="text-blue-600"> Backlinks</span> That Drive Results
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed">
            Access 375,000+ verified websites across all industries and niches. Our marketplace connects you with 
            premium publishers, ensuring authentic, high-quality backlinks that boost your SEO rankings and drive 
            real organic traffic to your website. Skip the outreach hassle and focus on what matters most.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link to="/register">
              <Button size="lg" className="text-lg px-8 py-3">
                Start Building Links
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3">
                Browse Websites
              </Button>
            </Link>
          </div>
          <div className="text-sm text-gray-500">
            No contracts • Pay per post • Instant access to 375,000+ websites
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Buyers Choose GuestPost Pro
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Everything you need to build a successful link building campaign
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Advanced Filtering</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Find the perfect websites using our comprehensive filters. Search by niche, traffic, 
                  domain authority, location, language, and 50+ other criteria.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="h-12 w-12 text-green-600 mx-auto mb-4" />
                <CardTitle>Quality Guarantee</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  3-month free guarantee on all published posts. If content is removed or altered, 
                  we'll restore it or provide a full refund.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <Target className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                <CardTitle>Targeted Outreach</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Skip cold outreach and negotiations. Direct access to verified publishers with 
                  transparent pricing and instant order placement.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <BarChart3 className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                <CardTitle>Campaign Tracking</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Monitor your campaigns with detailed analytics, performance reports, and ROI tracking. 
                  Export data for further analysis and reporting.
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
              How Buyers Build Successful Campaigns
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From strategy to execution - your complete guide to effective link building
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              <div className="flex items-start space-x-6">
                <div className="bg-blue-100 text-blue-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">1</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Research & Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    Use our advanced filters to identify high-quality websites in your niche. Analyze traffic patterns, 
                    domain authority, and audience demographics to build a targeted list of potential link sources.
                  </p>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <strong>Pro Tip:</strong> Focus on websites with consistent traffic growth and high engagement rates. 
                      Quality over quantity always wins in link building.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-green-100 text-green-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">2</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Create Your Campaign</h3>
                  <p className="text-gray-600 mb-4">
                    Set up project folders to organize your campaigns. Upload your content or order professional writing 
                    services. Define your target keywords, anchor texts, and link placement preferences.
                  </p>
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800">
                      <strong>Content Guidelines:</strong> High-quality, original content (300+ words) with natural link 
                      integration performs best. Avoid over-optimization.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-purple-100 text-purple-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">3</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Place Orders & Track Progress</h3>
                  <p className="text-gray-600 mb-4">
                    Add selected websites to your cart and complete secure payment. Track order status in real-time, 
                    communicate with publishers, and receive notifications when content goes live.
                  </p>
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-800">
                      <strong>Order Management:</strong> Bulk order capabilities allow you to scale campaigns efficiently. 
                      Set budgets and automate reorders for ongoing campaigns.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex items-start space-x-6">
                <div className="bg-orange-100 text-orange-600 rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg">4</div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Analyze Results & Scale</h3>
                  <p className="text-gray-600 mb-4">
                    Monitor your backlink performance with our analytics dashboard. Track rankings, traffic increases, 
                    and ROI. Use insights to refine your strategy and scale successful campaigns.
                  </p>
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800">
                      <strong>Success Metrics:</strong> Track domain rating improvements, keyword ranking changes, 
                      and organic traffic growth to measure campaign effectiveness.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Tiers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing for Every Budget
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Choose from websites across all price ranges to match your campaign budget
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-500 to-emerald-500"></div>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Starter</Badge>
                <CardTitle className="text-2xl">$25-$75</CardTitle>
                <CardDescription>Per Guest Post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">DR 20-40 websites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">10k-50k monthly traffic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Perfect for new sites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Quick approval process</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Professional</Badge>
                <CardTitle className="text-2xl">$75-$200</CardTitle>
                <CardDescription>Per Guest Post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">DR 40-65 websites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">50k-200k monthly traffic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Established websites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Higher engagement rates</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden border-2 border-blue-200">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></div>
              <Badge className="absolute -top-2 -right-2 bg-blue-600">Most Popular</Badge>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Premium</Badge>
                <CardTitle className="text-2xl">$200-$500</CardTitle>
                <CardDescription>Per Guest Post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">DR 65-85 websites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">200k-1M monthly traffic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Authority websites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Maximum SEO impact</span>
                </div>
              </CardContent>
            </Card>

            <Card className="relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
              <CardHeader className="text-center">
                <Badge variant="outline" className="mx-auto mb-2">Enterprise</Badge>
                <CardTitle className="text-2xl">$500-$1000+</CardTitle>
                <CardDescription>Per Guest Post</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">DR 85+ websites</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">1M+ monthly traffic</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Top-tier publications</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span className="text-sm">Brand association value</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Success Stories Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Success Stories from Our Buyers
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Real results from businesses that scaled with GuestPost Pro
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-blue-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">SaaS Startup</CardTitle>
                    <CardDescription>B2B Software</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Increased organic traffic by 300% in 6 months using targeted guest posts. 
                  The quality filtering helped us find perfect niche matches."
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Campaign Budget:</span>
                    <span className="text-sm font-medium">$5,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Links Built:</span>
                    <span className="text-sm font-medium">25 per month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Traffic Increase:</span>
                    <span className="text-sm font-medium text-green-600">+300%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-green-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">E-commerce Brand</CardTitle>
                    <CardDescription>Fashion Retail</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Scaled from 50k to 500k monthly visitors through strategic guest posting 
                  on lifestyle and fashion websites. ROI was incredible."
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Campaign Budget:</span>
                    <span className="text-sm font-medium">$8,000/month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Links Built:</span>
                    <span className="text-sm font-medium">40 per month</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Revenue Growth:</span>
                    <span className="text-sm font-medium text-green-600">+450%</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                    <Star className="h-6 w-6 text-purple-600" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">Digital Agency</CardTitle>
                    <CardDescription>Marketing Services</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  "Manages campaigns for 20+ clients efficiently. The bulk order system 
                  and project management tools are game-changers."
                </p>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Monthly Volume:</span>
                    <span className="text-sm font-medium">200+ posts</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Clients Served:</span>
                    <span className="text-sm font-medium">20+ businesses</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-gray-500">Time Saved:</span>
                    <span className="text-sm font-medium text-green-600">80% reduction</span>
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
            Ready to Scale Your Link Building?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Join thousands of successful buyers who trust GuestPost Pro for their link building campaigns. 
            Start building high-quality backlinks today and watch your organic traffic soar.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/register">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3">
                Start Your Campaign
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <Link to="/browse">
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 text-white border-white hover:bg-white hover:text-blue-600">
                Browse Websites
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ForBuyers;
