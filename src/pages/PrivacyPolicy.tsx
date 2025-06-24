
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 24, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Information We Collect</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Personal Information</h4>
                <p className="text-gray-600">
                  When you create an account with GuestPost Pro, we collect personal information including your name, 
                  email address, billing address, and payment information. This information is necessary to provide 
                  our services and process transactions securely.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Website Information</h4>
                <p className="text-gray-600">
                  Publishers provide detailed information about their websites including domain names, traffic statistics, 
                  content categories, and pricing preferences. This data helps buyers find suitable websites for their 
                  guest posting campaigns and ensures quality marketplace listings.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Usage Data</h4>
                <p className="text-gray-600">
                  We automatically collect information about how you use our platform, including pages visited, 
                  features used, search queries, and interaction patterns. This data helps us improve our services 
                  and provide personalized recommendations.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. How We Use Your Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Provision</h4>
                <p className="text-gray-600">
                  We use your information to provide, maintain, and improve our guest posting marketplace services. 
                  This includes facilitating transactions between publishers and buyers, processing payments, 
                  and providing customer support.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Communication</h4>
                <p className="text-gray-600">
                  We may send you important service updates, transaction confirmations, security alerts, and 
                  promotional communications. You can opt out of marketing communications at any time through 
                  your account settings or unsubscribe links.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platform Improvement</h4>
                <p className="text-gray-600">
                  We analyze usage patterns and feedback to enhance our platform functionality, develop new features, 
                  and optimize user experience. This analysis helps us provide better matching between publishers 
                  and buyers.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. Information Sharing and Disclosure</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Between Users</h4>
                <p className="text-gray-600">
                  When buyers purchase guest posts, we share necessary information with publishers to facilitate 
                  content creation and publication. This includes contact details, content requirements, and 
                  publication guidelines as needed for order fulfillment.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Service Providers</h4>
                <p className="text-gray-600">
                  We work with trusted third-party service providers for payment processing, email delivery, 
                  analytics, and customer support. These providers are bound by strict confidentiality agreements 
                  and may only use your information as necessary to provide their services.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Legal Requirements</h4>
                <p className="text-gray-600">
                  We may disclose your information when required by law, court order, or government regulation. 
                  We also reserve the right to share information to protect our rights, property, or safety, 
                  or that of our users or the public.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Data Security and Protection</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Security Measures</h4>
                <p className="text-gray-600">
                  We implement industry-standard security measures to protect your personal information, including 
                  SSL encryption, secure data storage, regular security audits, and access controls. Payment 
                  information is processed through PCI-compliant payment processors.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Retention</h4>
                <p className="text-gray-600">
                  We retain your personal information for as long as necessary to provide our services and comply 
                  with legal obligations. Account information is typically retained for the duration of your 
                  account plus additional time as required by applicable laws.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Account Security</h4>
                <p className="text-gray-600">
                  You are responsible for maintaining the security of your account credentials. We recommend using 
                  strong, unique passwords and enabling two-factor authentication when available. Please notify us 
                  immediately of any unauthorized account access.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Your Rights and Choices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Access and Correction</h4>
                <p className="text-gray-600">
                  You have the right to access, update, or correct your personal information at any time through 
                  your account settings. If you need assistance accessing or updating your information, please 
                  contact our support team.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Data Portability</h4>
                <p className="text-gray-600">
                  Upon request, we can provide you with a copy of your personal information in a structured, 
                  machine-readable format. This includes your account information, transaction history, and 
                  website listings where applicable.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Account Deletion</h4>
                <p className="text-gray-600">
                  You may request deletion of your account and associated personal information at any time. 
                  Note that some information may be retained for legal compliance purposes or to resolve disputes, 
                  even after account deletion.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Cookies and Tracking Technologies</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We use cookies and similar tracking technologies to enhance your experience on our platform. 
                These technologies help us remember your preferences, analyze site usage, and provide personalized 
                content. You can control cookie settings through your browser preferences.
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Types of Cookies</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Essential cookies for platform functionality</li>
                  <li>Analytics cookies for performance monitoring</li>
                  <li>Preference cookies for personalization</li>
                  <li>Marketing cookies for relevant advertising</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. International Data Transfers</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                GuestPost Pro operates globally, and your information may be transferred to and processed in 
                countries other than your country of residence. We ensure appropriate safeguards are in place 
                to protect your information in accordance with applicable data protection laws and regulations.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Changes to This Privacy Policy</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We may update this Privacy Policy from time to time to reflect changes in our practices or 
                applicable laws. We will notify you of significant changes via email or through our platform. 
                Your continued use of our services after such changes constitutes acceptance of the updated policy.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about this Privacy Policy or our data practices, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> privacy@guestpostpro.com</p>
                <p><strong>Address:</strong> GuestPost Pro Privacy Team, [Address], [City, State, ZIP]</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
