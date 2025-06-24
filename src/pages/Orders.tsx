
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Globe, Search, Calendar, FileText, Eye, MessageCircle, Settings } from "lucide-react";
import { Link } from "react-router-dom";

const Orders = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="max-w-md">
          <CardHeader className="text-center">
            <CardTitle>Access Restricted</CardTitle>
            <CardDescription>Please log in to view your orders</CardDescription>
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

  const orders = [
    {
      id: "ORD-001",
      website: "TechCrunch.com",
      title: "AI in E-commerce: Transforming Online Shopping",
      status: "Published",
      date: "2024-01-20",
      price: 180,
      category: "Technology",
      publishDate: "2024-01-22"
    },
    {
      id: "ORD-002",
      website: "BusinessInsider.com",
      title: "The Future of Remote Work: Trends for 2024",
      status: "In Review",
      date: "2024-01-18",
      price: 220,
      category: "Business",
      publishDate: null
    },
    {
      id: "ORD-003",
      website: "HealthLine.com",
      title: "Mental Health Benefits of Regular Exercise",
      status: "Writing",
      date: "2024-01-15",
      price: 150,
      category: "Health",
      publishDate: null
    },
    {
      id: "ORD-004",
      website: "TravelWeekly.com",
      title: "Sustainable Tourism: A Guide for Eco-Travelers",
      status: "Approved",
      date: "2024-01-12",
      price: 125,
      category: "Travel",
      publishDate: "2024-01-25"
    },
    {
      id: "ORD-005",
      website: "Forbes.com",
      title: "Cryptocurrency Investment Strategies",
      status: "Rejected",
      date: "2024-01-10",
      price: 350,
      category: "Finance",
      publishDate: null
    }
  ];

  const filteredOrders = orders.filter(order =>
    order.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    order.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published": return "default";
      case "Approved": return "secondary";
      case "In Review": return "outline";
      case "Writing": return "outline";
      case "Rejected": return "destructive";
      default: return "outline";
    }
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
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-600">
            Track your guest post orders and their publication status
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <FileText className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <Eye className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-green-600">
                {orders.filter(o => o.status === "Published").length}
              </div>
              <p className="text-xs text-muted-foreground">Live posts</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-blue-600">
                {orders.filter(o => ["In Review", "Writing", "Approved"].includes(o.status)).length}
              </div>
              <p className="text-xs text-muted-foreground">Being processed</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <Calendar className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                ${orders.reduce((sum, order) => sum + order.price, 0)}
              </div>
              <p className="text-xs text-muted-foreground">Across all orders</p>
            </CardContent>
          </Card>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-center mb-6">
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search orders..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>

        {/* Orders List */}
        <Tabs defaultValue="all" className="space-y-4">
          <TabsList>
            <TabsTrigger value="all">All Orders</TabsTrigger>
            <TabsTrigger value="published">Published</TabsTrigger>
            <TabsTrigger value="progress">In Progress</TabsTrigger>
            <TabsTrigger value="rejected">Rejected</TabsTrigger>
          </TabsList>
          
          <TabsContent value="all" className="space-y-4">
            <div className="space-y-4">
              {filteredOrders.map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center space-x-3 mb-2">
                          <h3 className="text-lg font-semibold text-gray-900">
                            {order.title}
                          </h3>
                          <Badge variant={getStatusColor(order.status)}>
                            {order.status}
                          </Badge>
                        </div>
                        
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 mb-4">
                          <div>
                            <span className="font-medium">Website:</span> {order.website}
                          </div>
                          <div>
                            <span className="font-medium">Category:</span> {order.category}
                          </div>
                          <div>
                            <span className="font-medium">Order Date:</span> {order.date}
                          </div>
                        </div>

                        {order.publishDate && (
                          <div className="text-sm text-green-600 mb-4">
                            <span className="font-medium">Published:</span> {order.publishDate}
                          </div>
                        )}
                      </div>
                      
                      <div className="text-right ml-4">
                        <div className="text-2xl font-bold text-blue-600">
                          ${order.price}
                        </div>
                        <div className="text-sm text-gray-500">
                          Order #{order.id}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex justify-between items-center pt-4 border-t">
                      <div className="flex space-x-2">
                        <Button variant="outline" size="sm">
                          <Eye className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                        {order.status === "Published" && (
                          <Button variant="outline" size="sm">
                            View Post
                          </Button>
                        )}
                        {["In Review", "Writing"].includes(order.status) && (
                          <Button variant="outline" size="sm">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Contact Publisher
                          </Button>
                        )}
                      </div>
                      
                      {order.status === "Rejected" && (
                        <Button size="sm">
                          Reorder
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="published">
            <div className="space-y-4">
              {filteredOrders.filter(o => o.status === "Published").map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  {/* Same card content structure */}
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="progress">
            <div className="space-y-4">
              {filteredOrders.filter(o => ["In Review", "Writing", "Approved"].includes(o.status)).map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  {/* Same card content structure */}
                </Card>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="rejected">
            <div className="space-y-4">
              {filteredOrders.filter(o => o.status === "Rejected").map((order) => (
                <Card key={order.id} className="hover:shadow-md transition-shadow">
                  {/* Same card content structure */}
                </Card>
              ))}
            </div>
          </TabsContent>
        </Tabs>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm ? "Try adjusting your search terms" : "Start by browsing websites and placing your first order"}
            </p>
            <Link to="/browse">
              <Button>
                Browse Websites
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Orders;
