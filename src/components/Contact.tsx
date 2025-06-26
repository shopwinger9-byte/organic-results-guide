
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Phone, MapPin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Grow Your Business?
            </h2>
            <p className="text-xl text-gray-600">
              Get a free SEO audit and discover how we can help you dominate search results.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <Card>
              <CardHeader>
                <CardTitle>Get Your Free SEO Audit</CardTitle>
                <CardDescription>
                  Tell us about your business and we'll provide a comprehensive SEO analysis.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="firstName">First Name</Label>
                    <Input id="firstName" placeholder="John" />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name</Label>
                    <Input id="lastName" placeholder="Doe" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="email">Email</Label>
                  <Input id="email" type="email" placeholder="john@example.com" />
                </div>
                
                <div>
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Your Company" />
                </div>
                
                <div>
                  <Label htmlFor="website">Website URL</Label>
                  <Input id="website" placeholder="https://yourwebsite.com" />
                </div>
                
                <div>
                  <Label htmlFor="package">Interested Package</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="basic">Basic - $999/month</SelectItem>
                      <SelectItem value="standard">Standard - $2,499/month</SelectItem>
                      <SelectItem value="premium">Premium - $4,999/month</SelectItem>
                      <SelectItem value="enterprise">Enterprise - Custom</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message">Tell us about your goals</Label>
                  <Textarea 
                    id="message" 
                    placeholder="What are your main SEO challenges and goals?"
                    rows={4}
                  />
                </div>
                
                <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700">
                  Get Free SEO Audit
                </Button>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Why Choose SEOYourCompany?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Proven Results</h4>
                      <p className="text-gray-600">Average 200% increase in organic traffic within 6 months</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Transparent Reporting</h4>
                      <p className="text-gray-600">Monthly detailed reports with actionable insights</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Expert Team</h4>
                      <p className="text-gray-600">Certified SEO professionals with years of experience</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">White-Hat Practices</h4>
                      <p className="text-gray-600">Ethical SEO strategies that comply with search engine guidelines</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">hello@seoyourcompany.com</span>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">+1 (555) 123-4567</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-5 w-5 text-blue-600 mr-3" />
                    <span className="text-gray-700">New York, NY</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-900 mb-2">Free SEO Audit Includes:</h3>
                <ul className="space-y-1 text-blue-800">
                  <li>• Technical SEO analysis</li>
                  <li>• Keyword ranking report</li>
                  <li>• Competitor comparison</li>
                  <li>• Improvement recommendations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
