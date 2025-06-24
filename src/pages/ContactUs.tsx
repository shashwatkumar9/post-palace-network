
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Globe, ArrowLeft, Mail, Phone, MapPin, Clock, MessageCircle, HeadphonesIcon } from "lucide-react";
import { Link } from "react-router-dom";

const ContactUs = () => {
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

      <div className="container mx-auto px-4 py-12 max-w-6xl">
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Contact Us</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions, need support, or want to learn more about GuestPost Pro? 
            Our team is here to help you succeed with your guest posting campaigns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Contact Information */}
          <div className="lg:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Get in Touch
                </CardTitle>
                <CardDescription>
                  We're here to help with any questions about our platform
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start space-x-3">
                  <Mail className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email Support</h3>
                    <p className="text-gray-600">support@guestpostpro.com</p>
                    <p className="text-sm text-gray-500">Response within 2 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone Support</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-sm text-gray-500">24/7 availability</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <HeadphonesIcon className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Live Chat</h3>
                    <p className="text-gray-600">Available on website</p>
                    <p className="text-sm text-gray-500">Mon-Fri, 9AM-6PM EST</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Office</h3>
                    <p className="text-gray-600">123 Business Ave<br />New York, NY 10001</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="h-5 w-5 text-blue-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9AM - 6PM EST</p>
                    <p className="text-gray-600">Saturday: 10AM - 4PM EST</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Send us a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you as soon as possible
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input id="firstName" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Doe" required />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input id="phone" type="tel" placeholder="+1 (555) 123-4567" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="company">Company/Website</Label>
                    <Input id="company" placeholder="Your company name or website URL" />
                  </div>

                  <div className="space-y-2">
                    <Label>Inquiry Type *</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select inquiry type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="general">General Question</SelectItem>
                        <SelectItem value="technical">Technical Support</SelectItem>
                        <SelectItem value="billing">Billing & Payments</SelectItem>
                        <SelectItem value="publisher">Publisher Support</SelectItem>
                        <SelectItem value="buyer">Buyer Support</SelectItem>
                        <SelectItem value="partnership">Partnership Inquiry</SelectItem>
                        <SelectItem value="media">Media & Press</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject *</Label>
                    <Input id="subject" placeholder="Brief description of your inquiry" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Please provide details about your inquiry..."
                      rows={6}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mb-12">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-gray-600">Quick answers to common questions</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">How quickly do you respond to inquiries?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  We typically respond to all inquiries within 2 hours during business hours. 
                  For urgent technical issues, our live chat provides immediate assistance.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer phone support?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes! Our phone support is available 24/7 at +1 (555) 123-4567. 
                  We also offer scheduled consultation calls for complex inquiries.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Can I get help with website verification?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Absolutely! Our team provides personalized assistance with website verification, 
                  content guidelines, and platform optimization.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Do you offer training or onboarding?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Yes, we provide comprehensive onboarding for both publishers and buyers, 
                  including video tutorials and one-on-one training sessions.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Additional Resources */}
        <div className="bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-blue-900 mb-4">
            Additional Resources
          </h3>
          <p className="text-blue-700 mb-6">
            Explore our knowledge base and community resources for self-service support
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/help">
              <Button variant="outline" size="lg">
                Help Center
              </Button>
            </Link>
            <Link to="/faq">
              <Button variant="outline" size="lg">
                FAQ
              </Button>
            </Link>
            <Button variant="outline" size="lg">
              Video Tutorials
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
