
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, DollarSign, TrendingUp, Calendar, Download, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Payouts = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true); // This would come from auth context

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Access Restricted</CardTitle>
            <CardDescription>Please log in to view your payouts</CardDescription>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <Link to="/login">
              <Button>Sign In</Button>
            </Link>
            <Link to="/register">
              <Button variant="outline">Create Account</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    );
  }

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
                <Button variant="outline">Dashboard</Button>
              </Link>
              <Button variant="ghost" size="icon">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Payouts</h1>
          <p className="text-gray-600">
            Manage your earnings and payout preferences
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Balance</CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">$1,450.00</div>
              <p className="text-xs text-muted-foreground">Ready for payout</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Earnings</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-yellow-600">$280.00</div>
              <p className="text-xs text-muted-foreground">Processing</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Earned</CardTitle>
              <TrendingUp className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$8,450.00</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">This Month</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$1,730.00</div>
              <p className="text-xs text-muted-foreground">+15% from last month</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="payouts" className="space-y-4">
          <TabsList>
            <TabsTrigger value="payouts">Payout History</TabsTrigger>
            <TabsTrigger value="earnings">Earnings Details</TabsTrigger>
            <TabsTrigger value="settings">Payout Settings</TabsTrigger>
          </TabsList>
          
          <TabsContent value="payouts" className="space-y-4">
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-bold">Payout History</h2>
              <Button>
                <DollarSign className="h-4 w-4 mr-2" />
                Request Payout
              </Button>
            </div>
            
            <Card>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[
                    { date: "2024-01-15", amount: "$1,200.00", status: "Completed", method: "PayPal" },
                    { date: "2024-01-01", amount: "$950.00", status: "Completed", method: "Bank Transfer" },
                    { date: "2023-12-15", amount: "$1,150.00", status: "Completed", method: "PayPal" },
                    { date: "2023-12-01", amount: "$800.00", status: "Processing", method: "Bank Transfer" }
                  ].map((payout, index) => (
                    <div key={index} className="flex items-center justify-between p-6">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{payout.amount}</p>
                          <p className="text-sm text-gray-600">{payout.date}</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <Badge variant={payout.status === "Completed" ? "default" : "secondary"}>
                          {payout.status}
                        </Badge>
                        <p className="text-sm text-gray-600 mt-1">{payout.method}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="earnings">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Breakdown</CardTitle>
                <CardDescription>Detailed view of your earnings by website</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { website: "TechBlog.com", posts: 12, earnings: "$720.00" },
                    { website: "BusinessInsider.com", posts: 8, earnings: "$640.00" },
                    { website: "HealthNews.com", posts: 15, earnings: "$450.00" },
                    { website: "TravelGuide.com", posts: 6, earnings: "$420.00" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <h3 className="font-medium">{item.website}</h3>
                        <p className="text-sm text-gray-600">{item.posts} posts published</p>
                      </div>
                      <div className="text-right">
                        <p className="font-medium text-green-600">{item.earnings}</p>
                        <Button size="sm" variant="outline" className="mt-2">
                          <Download className="h-3 w-3 mr-1" />
                          Report
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          
          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Payout Settings</CardTitle>
                <CardDescription>Configure your payment preferences</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payment Methods</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">PayPal</p>
                        <p className="text-sm text-gray-600">john@example.com</p>
                      </div>
                      <Badge>Primary</Badge>
                    </div>
                    <div className="flex items-center justify-between p-4 border rounded-lg">
                      <div>
                        <p className="font-medium">Bank Transfer</p>
                        <p className="text-sm text-gray-600">****1234</p>
                      </div>
                      <Button variant="outline" size="sm">Edit</Button>
                    </div>
                  </div>
                  <Button variant="outline" className="mt-4">
                    Add Payment Method
                  </Button>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold mb-4">Payout Schedule</h3>
                  <div className="space-y-3">
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="schedule" defaultChecked />
                      <span>Weekly (Mondays)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="schedule" />
                      <span>Bi-weekly (1st & 15th)</span>
                    </label>
                    <label className="flex items-center space-x-2">
                      <input type="radio" name="schedule" />
                      <span>Monthly (1st of month)</span>
                    </label>
                  </div>
                </div>
                
                <Button>Save Settings</Button>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Payouts;
