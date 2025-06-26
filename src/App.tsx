
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import { AdminProvider } from "@/contexts/AdminContext";
import Index from "./pages/Index";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import Browse from "./pages/Browse";
import NotFound from "./pages/NotFound";
import ForPublishers from "./pages/ForPublishers";
import ForBuyers from "./pages/ForBuyers";
import Affiliate from "./pages/Affiliate";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import HelpCenter from "./pages/HelpCenter";
import ContactUs from "./pages/ContactUs";
import FAQ from "./pages/FAQ";
import AddWebsite from "./pages/AddWebsite";
import BulkAddWebsites from "./pages/BulkAddWebsites";
import Payouts from "./pages/Payouts";
import Projects from "./pages/Projects";
import Orders from "./pages/Orders";
import BuyPR from "./pages/BuyPR";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";

// Admin pages
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import WebsiteApprovals from "./pages/admin/WebsiteApprovals";
import PRReviews from "./pages/admin/PRReviews";
import BlogManagement from "./pages/admin/BlogManagement";
import BlogEditor from "./pages/admin/BlogEditor";
import UserManagement from "./pages/admin/UserManagement";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AdminProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/browse" element={<Browse />} />
              <Route path="/publishers" element={<ForPublishers />} />
              <Route path="/buyers" element={<ForBuyers />} />
              <Route path="/affiliate" element={<Affiliate />} />
              <Route path="/privacy" element={<PrivacyPolicy />} />
              <Route path="/terms" element={<TermsOfService />} />
              <Route path="/cookies" element={<CookiePolicy />} />
              <Route path="/help" element={<HelpCenter />} />
              <Route path="/contact" element={<ContactUs />} />
              <Route path="/faq" element={<FAQ />} />
              <Route path="/add-website" element={<AddWebsite />} />
              <Route path="/bulk-add-websites" element={<BulkAddWebsites />} />
              <Route path="/payouts" element={<Payouts />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/buy-pr" element={<BuyPR />} />
              
              {/* Blog routes */}
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              
              {/* Admin routes */}
              <Route path="/admin/login" element={<AdminLogin />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
              <Route path="/admin/websites" element={<WebsiteApprovals />} />
              <Route path="/admin/pr-reviews" element={<PRReviews />} />
              <Route path="/admin/blog" element={<BlogManagement />} />
              <Route path="/admin/blog/new" element={<BlogEditor />} />
              <Route path="/admin/blog/edit/:postId" element={<BlogEditor />} />
              <Route path="/admin/users" element={<UserManagement />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </AdminProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
