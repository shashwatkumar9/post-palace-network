import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const AddWebsite = () => {
  const isLoggedIn = false; // This will be replaced with actual auth state

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <Header />
        
        <div className="flex-1 flex items-center justify-center py-12">
          <Card className="max-w-md text-center">
            <CardHeader>
              <Plus className="h-16 w-16 text-blue-600 mx-auto mb-4" />
              <CardTitle>Add Your Website</CardTitle>
              <CardDescription>
                Sign in to submit your website and start earning from guest posts
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

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Add Website</h1>
          <p className="text-gray-600">
            Submit your website to start accepting guest posts
          </p>
        </div>
        {/* Form content would go here */}
      </div>
      
      <Footer />
    </div>
  );
};

export default AddWebsite;
