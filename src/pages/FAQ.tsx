
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowLeft, HelpCircle } from "lucide-react";
import { Link } from "react-router-dom";

const FAQ = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <Globe className="h-8 w-8 text-blue-600" />
              <span className="text-2xl font-bold text-gray-900">WholePR</span>
            </Link>
            <Link to="/">
              <Button variant="outline" className="flex items-center">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="mb-8 text-center">
          <HelpCircle className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-xl text-gray-600">
            Get answers to the most common questions about our guest posting marketplace
          </p>
        </div>

        <div className="space-y-6">
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

          <Card>
            <CardHeader>
              <CardTitle className="text-left">What types of websites are listed on WholePR?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Our marketplace features a diverse range of websites across all industries and niches. 
                From technology and business to health, lifestyle, and travel, you'll find high-quality 
                publishers for every content marketing campaign.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-left">How do I contact support?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                You can reach our support team 24/7 via email, live chat, or phone. Visit our contact page 
                for detailed contact information and support resources.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-left">Is WholePR safe and secure?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We take security seriously and implement industry-standard measures to protect your data and 
                transactions. Our platform uses SSL encryption, secure payment processing, and regular security audits.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-left">Can I get a discount?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We offer volume discounts for large orders and recurring campaigns. Contact our sales team to 
                discuss your specific needs and explore available options.
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-blue-900 mb-2">
            Still Have Questions?
          </h3>
          <p className="text-blue-700 mb-4">
            Contact our support team for personalized assistance.
          </p>
          <Link to="/contact">
            <Button className="bg-blue-600 hover:bg-blue-700">
              Contact Support
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
