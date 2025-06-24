import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Search, Calendar, Package, CheckCircle, Clock, XCircle, Filter } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Orders = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <div className="flex-1 flex items-center justify-center py-12">
          <Card className="max-w-md text-center">
            <CardHeader>
              <ShoppingCart className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle>View Your Orders</CardTitle>
              <CardDescription>
                Sign in to access your order history and track purchases
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Link to="/login">
                <Button className="w-full">Sign In</Button>
              </Link>
              <Link to="/register">
                <Button variant="outline" className="w-full">Create Account</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
        
        <Footer />
      </div>
    );
  }

  const orders = [
    {
      id: "ORD-001",
      website: "TechCrunch.com",
      title: "The Future of AI in Business Operations",
      status: "Published",
      orderDate: "2024-01-15",
      publishDate: "2024-01-18",
      price: 450,
      category: "Technology",
      linkType: "Dofollow"
    },
    {
      id: "ORD-002",
      website: "BusinessInsider.com",
      title: "E-commerce Trends for 2024",
      status: "In Review",
      orderDate: "2024-01-20",
      publishDate: null,
      price: 325,
      category: "Business",
      linkType: "Dofollow"
    },
    {
      id: "ORD-003",
      website: "Healthline.com",
      title: "Mental Health in the Digital Age",
      status: "Published",
      orderDate: "2024-01-10",
      publishDate: "2024-01-14",
      price: 285,
      category: "Health",
      linkType: "Dofollow"
    },
    {
      id: "ORD-004",
      website: "Forbes.com",
      title: "Startup Funding Strategies",
      status: "Pending",
      orderDate: "2024-01-25",
      publishDate: null,
      price: 625,
      category: "Business",
      linkType: "Dofollow"
    },
    {
      id: "ORD-005",
      website: "Entrepreneur.com",
      title: "Remote Work Best Practices",
      status: "Rejected",
      orderDate: "2024-01-12",
      publishDate: null,
      price: 195,
      category: "Business",
      linkType: "Dofollow"
    }
  ];

  const filteredOrders = orders.filter(order => {
    const matchesSearch = order.website.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         order.id.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesStatus = statusFilter === "all" || order.status.toLowerCase() === statusFilter.toLowerCase();
    
    return matchesSearch && matchesStatus;
  });

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Published":
        return <CheckCircle className="h-4 w-4 text-green-500" />;
      case "In Review":
        return <Clock className="h-4 w-4 text-yellow-500" />;
      case "Pending":
        return <Package className="h-4 w-4 text-blue-500" />;
      case "Rejected":
        return <XCircle className="h-4 w-4 text-red-500" />;
      default:
        return <Clock className="h-4 w-4 text-gray-500" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Published":
        return "bg-green-100 text-green-800";
      case "In Review":
        return "bg-yellow-100 text-yellow-800";
      case "Pending":
        return "bg-blue-100 text-blue-800";
      case "Rejected":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  const totalSpent = orders.reduce((sum, order) => sum + order.price, 0);
  const publishedCount = orders.filter(order => order.status === "Published").length;
  const pendingCount = orders.filter(order => order.status === "Pending" || order.status === "In Review").length;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Order History</h1>
          <p className="text-gray-600">
            Track your guest posting orders and their status
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
              <ShoppingCart className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{orders.length}</div>
              <p className="text-xs text-muted-foreground">All time</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <CheckCircle className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{publishedCount}</div>
              <p className="text-xs text-muted-foreground">Successfully published</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending</CardTitle>
              <Clock className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{pendingCount}</div>
              <p className="text-xs text-muted-foreground">In progress</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">${totalSpent}</div>
              <p className="text-xs text-muted-foreground">All orders</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
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
          <div className="flex items-center space-x-2">
            <Filter className="h-4 w-4 text-gray-500" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="border border-gray-300 rounded-md px-3 py-2 text-sm"
            >
              <option value="all">All Status</option>
              <option value="published">Published</option>
              <option value="in review">In Review</option>
              <option value="pending">Pending</option>
              <option value="rejected">Rejected</option>
            </select>
          </div>
        </div>

        {/* Orders List */}
        <div className="space-y-4">
          {filteredOrders.map((order) => (
            <Card key={order.id} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-3 mb-2">
                      <h3 className="text-lg font-semibold text-gray-900">
                        {order.title}
                      </h3>
                      <div className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        {getStatusIcon(order.status)}
                        <span className="ml-1">{order.status}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-3">{order.website}</p>
                    
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                      <div>
                        <span className="text-gray-500">Order ID:</span>
                        <p className="font-medium">{order.id}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Category:</span>
                        <p className="font-medium">{order.category}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Order Date:</span>
                        <p className="font-medium">{order.orderDate}</p>
                      </div>
                      <div>
                        <span className="text-gray-500">Publish Date:</span>
                        <p className="font-medium">{order.publishDate || "N/A"}</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="text-right ml-6">
                    <div className="text-2xl font-bold text-blue-600 mb-2">
                      ${order.price}
                    </div>
                    <Badge variant="outline">{order.linkType}</Badge>
                  </div>
                </div>
                
                <div className="flex justify-between items-center mt-4 pt-4 border-t">
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      View Details
                    </Button>
                    {order.status === "Published" && (
                      <Button variant="outline" size="sm">
                        View Live Post
                      </Button>
                    )}
                    {order.status === "Rejected" && (
                      <Button variant="outline" size="sm">
                        Resubmit
                      </Button>
                    )}
                  </div>
                  
                  {order.status === "Published" && (
                    <div className="flex items-center text-sm text-green-600">
                      <CheckCircle className="h-4 w-4 mr-1" />
                      Live on website
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredOrders.length === 0 && (
          <div className="text-center py-12">
            <ShoppingCart className="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              No orders found
            </h3>
            <p className="text-gray-600 mb-6">
              {searchTerm || statusFilter !== "all" 
                ? "Try adjusting your search terms or filters" 
                : "You haven't placed any orders yet"}
            </p>
            <Link to="/browse">
              <Button>
                Browse Websites
              </Button>
            </Link>
          </div>
        )}
      </div>
      
      <Footer />
    </div>
  );
};

export default Orders;
