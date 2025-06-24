
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Globe, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const TermsOfService = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Last updated: December 24, 2024
          </p>
        </div>

        <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle>1. Acceptance of Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                By accessing and using GuestPost Pro (the "Platform"), you agree to be bound by these Terms of Service 
                and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited 
                from using or accessing this site. These terms apply to all users of the Platform, including publishers, 
                buyers, and affiliates.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>2. Platform Description</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                GuestPost Pro is a marketplace that connects website publishers with content buyers for guest posting 
                opportunities. Publishers can list their websites and offer guest post services, while buyers can 
                browse and purchase guest post placements to build high-quality backlinks.
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For Publishers</h4>
                <p className="text-gray-600">
                  Publishers can add their websites to our marketplace, set pricing, and receive orders from buyers. 
                  All websites are subject to review and approval based on our quality standards.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">For Buyers</h4>
                <p className="text-gray-600">
                  Buyers can search our database of verified websites, place orders for guest posts, and manage 
                  their campaigns through our platform interface.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>3. User Accounts and Registration</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Account Creation</h4>
                <p className="text-gray-600">
                  To use our services, you must create an account with accurate and complete information. You are 
                  responsible for maintaining the confidentiality of your account credentials and for all activities 
                  that occur under your account.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Eligibility</h4>
                <p className="text-gray-600">
                  You must be at least 18 years old to use our services. By creating an account, you represent and 
                  warrant that you meet this age requirement and have the legal capacity to enter into these terms.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Account Security</h4>
                <p className="text-gray-600">
                  You must notify us immediately of any unauthorized use of your account or any other breach of 
                  security. We will not be liable for any loss or damage arising from your failure to comply with 
                  this security obligation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>4. Publisher Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Website Submission</h4>
                <p className="text-gray-600">
                  Publishers must provide accurate information about their websites, including traffic statistics, 
                  content categories, and pricing. False or misleading information may result in account suspension 
                  or termination.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Content Standards</h4>
                <p className="text-gray-600">
                  Publishers must maintain editorial control over their websites and ensure all published content 
                  meets quality standards. Content that violates our guidelines may be rejected or removed.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Fulfillment</h4>
                <p className="text-gray-600">
                  Publishers must fulfill orders within the agreed timeframe and maintain published content for 
                  the guaranteed period. Failure to fulfill orders may result in penalties or account suspension.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>5. Buyer Terms</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Order Placement</h4>
                <p className="text-gray-600">
                  Buyers must provide accurate content and requirements when placing orders. All orders are subject 
                  to publisher approval and our content guidelines.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Terms</h4>
                <p className="text-gray-600">
                  Payment is required at the time of order placement. Funds are held in escrow until content is 
                  published and approved. Refunds are processed according to our refund policy.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Content Responsibility</h4>
                <p className="text-gray-600">
                  Buyers are responsible for ensuring their content complies with all applicable laws and regulations. 
                  Prohibited content includes illegal, defamatory, or harmful material.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>6. Prohibited Content and Activities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Prohibited Content</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Illegal, harmful, or offensive content</li>
                  <li>Defamatory or misleading information</li>
                  <li>Adult content or explicit material</li>
                  <li>Content promoting violence or extremism</li>
                  <li>Pharmaceutical or medical misinformation</li>
                  <li>Gambling or casino promotion (restricted)</li>
                  <li>Cryptocurrency or financial scams</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Prohibited Activities</h4>
                <ul className="list-disc list-inside space-y-1 text-gray-600">
                  <li>Creating fake accounts or providing false information</li>
                  <li>Attempting to circumvent our fee structure</li>
                  <li>Harassing or threatening other users</li>
                  <li>Attempting to hack or compromise platform security</li>
                  <li>Using automated tools without permission</li>
                </ul>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>7. Payment and Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platform Fees</h4>
                <p className="text-gray-600">
                  GuestPost Pro charges a service fee on all transactions. The current fee structure is displayed 
                  during the order process. Fees are subject to change with advance notice.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Payment Processing</h4>
                <p className="text-gray-600">
                  All payments are processed through secure, third-party payment processors. We do not store your 
                  payment information on our servers. Payment processing fees may apply.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Refunds and Disputes</h4>
                <p className="text-gray-600">
                  Refunds are processed according to our refund policy. Disputes are handled through our internal 
                  resolution process. Users may escalate unresolved disputes to third-party mediation.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>8. Intellectual Property Rights</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Platform Content</h4>
                <p className="text-gray-600">
                  All content on the GuestPost Pro platform, including text, graphics, logos, and software, is 
                  owned by or licensed to us and is protected by copyright and other intellectual property laws.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">User Content</h4>
                <p className="text-gray-600">
                  Users retain ownership of content they submit but grant us a license to use, display, and 
                  distribute such content as necessary to provide our services.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Copyright Infringement</h4>
                <p className="text-gray-600">
                  We respect intellectual property rights and will respond to valid copyright infringement notices 
                  in accordance with applicable laws, including the Digital Millennium Copyright Act (DMCA).
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>9. Limitation of Liability</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To the maximum extent permitted by law, GuestPost Pro shall not be liable for any indirect, 
                incidental, special, consequential, or punitive damages, including without limitation, loss of 
                profits, data, use, goodwill, or other intangible losses, resulting from your use of our services. 
                Our total liability shall not exceed the amount you paid for the specific service giving rise to 
                the claim.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>10. Termination</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-gray-600">
                We may terminate or suspend your account and access to our services immediately, without prior 
                notice or liability, for any reason, including breach of these terms. Upon termination, your 
                right to use our services ceases immediately.
              </p>
              
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Effect of Termination</h4>
                <p className="text-gray-600">
                  Upon termination, all provisions of these terms that by their nature should survive termination 
                  shall survive, including ownership provisions, warranty disclaimers, and limitations of liability.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>11. Changes to Terms</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We reserve the right to modify or replace these terms at any time. If a revision is material, 
                we will provide at least 30 days notice prior to any new terms taking effect. Your continued 
                use of our services after such changes constitutes acceptance of the new terms.
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>12. Contact Information</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-4">
                If you have any questions about these Terms of Service, please contact us:
              </p>
              <div className="space-y-2 text-gray-600">
                <p><strong>Email:</strong> legal@guestpostpro.com</p>
                <p><strong>Address:</strong> GuestPost Pro Legal Team, [Address], [City, State, ZIP]</p>
                <p><strong>Phone:</strong> +1 (555) 123-4567</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default TermsOfService;
