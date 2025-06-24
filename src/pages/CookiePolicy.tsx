
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowLeft, Cookie } from "lucide-react";
import { Link } from "react-router-dom";

const CookiePolicy = () => {
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
          <Cookie className="h-16 w-16 text-blue-600 mx-auto mb-4" />
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 24, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                Cookies are small text files that are stored on your device when you visit websites. They help websites 
                remember information about your visit, such as your preferred language and other settings. This makes 
                your next visit easier and the site more useful to you. GuestPost Pro uses cookies to enhance your 
                browsing experience and provide personalized services.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Essential Functionality</h4>
                <p className="text-gray-600">
                  We use cookies to provide essential functionality for our guest posting marketplace, including 
                  user authentication, maintaining shopping cart contents, remembering your preferences, and 
                  ensuring secure transactions between publishers and buyers.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Performance and Analytics</h4>
                <p className="text-gray-600">
                  We collect anonymized data about how users interact with our platform to improve performance 
                  and user experience. This includes page load times, popular features, search patterns, and 
                  navigation behavior to optimize our marketplace functionality.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personalization</h4>
                <p className="text-gray-600">
                  Cookies help us personalize your experience by remembering your search filters, preferred 
                  website categories, saved favorites, and displaying relevant content based on your interests 
                  and previous interactions with our platform.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Types of Cookies We Use</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Strictly Necessary Cookies</h4>
                <p className="text-gray-600 mb-2">
                  These cookies are essential for the operation of our website and cannot be disabled. 
                  They include:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Authentication and login session management</li>
                  <li>Shopping cart and order processing</li>
                  <li>Security and fraud prevention</li>
                  <li>Load balancing and performance optimization</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Functional Cookies</h4>
                <p className="text-gray-600 mb-2">
                  These cookies enhance functionality and personalization:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Language and region preferences</li>
                  <li>Saved search filters and sorting preferences</li>
                  <li>Dashboard layout and customization settings</li>
                  <li>Notification and communication preferences</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Analytics Cookies</h4>
                <p className="text-gray-600 mb-2">
                  These cookies help us understand how our website is used:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Google Analytics for traffic analysis</li>
                  <li>Conversion tracking and funnel analysis</li>
                  <li>A/B testing and feature optimization</li>
                  <li>Performance monitoring and error tracking</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Marketing Cookies</h4>
                <p className="text-gray-600 mb-2">
                  These cookies support our marketing and advertising efforts:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Targeted advertising and retargeting</li>
                  <li>Social media integration and sharing</li>
                  <li>Email marketing campaign tracking</li>
                  <li>Affiliate program tracking and attribution</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Third-Party Cookies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We work with trusted third-party service providers who may place cookies on your device. 
                These partnerships help us provide better services and functionality.
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li><strong>Google Analytics:</strong> Website traffic and user behavior analysis</li>
                  <li><strong>Stripe/PayPal:</strong> Secure payment processing and fraud prevention</li>
                  <li><strong>Intercom:</strong> Customer support chat and help desk functionality</li>
                  <li><strong>Facebook Pixel:</strong> Social media advertising and conversion tracking</li>
                  <li><strong>Hotjar:</strong> User experience analysis and heatmap generation</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Managing Your Cookie Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Browser Settings</h4>
                <p className="text-gray-600">
                  Most web browsers allow you to control cookies through their settings. You can choose to 
                  accept or decline cookies, delete existing cookies, or set up notifications when cookies 
                  are being used. However, please note that disabling certain cookies may affect website functionality.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Cookie Consent Management</h4>
                <p className="text-gray-600">
                  When you first visit our website, we'll ask for your consent to use non-essential cookies. 
                  You can update your preferences at any time by clicking the "Cookie Settings" link in our footer 
                  or by contacting our support team.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Opt-Out Options</h4>
                <p className="text-gray-600 mb-2">
                  You can opt out of specific tracking and advertising cookies:
                </p>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
                  <li>Facebook Pixel: Adjust your Facebook ad preferences</li>
                  <li>Network Advertising Initiative: <a href="http://optout.networkadvertising.org/" className="text-blue-600 hover:underline">NAI Opt-out</a></li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Cookie Retention and Expiration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Session Cookies</h4>
                <p className="text-gray-600">
                  These temporary cookies are deleted when you close your browser. They're used for essential 
                  functionality like maintaining your login session and shopping cart contents during your visit.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Persistent Cookies</h4>
                <p className="text-gray-600">
                  These cookies remain on your device for a set period or until you delete them. They're used 
                  to remember your preferences and provide a personalized experience across multiple visits. 
                  Most of our persistent cookies expire within 1-2 years.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Updates to This Cookie Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We may update this Cookie Policy from time to time to reflect changes in our practices, 
                technology, or legal requirements. We will notify you of any significant changes by 
                posting a notice on our website or sending you a notification. Your continued use of 
                our services after such changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Contact Us</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@guestpostpro.com</p>
                <p><strong>Address:</strong> GuestPost Pro Privacy Team, [Address], [City, State, ZIP]</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>

          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <h3 className="text-lg font-semibold text-blue-900 mb-2">
              Need Help Managing Your Cookies?
            </h3>
            <p className="text-blue-700 mb-4">
              Our support team is here to help you understand and manage your cookie preferences.
            </p>
            <Link to="/contact">
              <Button className="bg-blue-600 hover:bg-blue-700">
                Contact Support
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePolicy;
