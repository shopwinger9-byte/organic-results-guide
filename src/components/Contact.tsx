import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Mail, Calendar, Award } from "lucide-react";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    website: '',
    phone: '',
    interestedPackage: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  useEffect(() => {
    // Get URL parameters to pre-fill form
    const urlParams = new URLSearchParams(window.location.search);
    const plan = urlParams.get('plan');
    const addon = urlParams.get('addon');
    
    if (plan) {
      let packageName = plan;
      if (addon === 'true') {
        packageName += ' + GEO Add-on';
      }
      setFormData(prev => ({ ...prev, interestedPackage: packageName }));
    }
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData
      });

      if (error) {
        throw error;
      }

      toast({
        title: "Success!",
        description: "Your message has been sent. We'll get back to you within 24 hours.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        company: '',
        website: '',
        phone: '',
        interestedPackage: '',
        message: ''
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Error",
        description: "There was a problem sending your message. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

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
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input 
                        id="firstName" 
                        placeholder="John" 
                        required
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                      />
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input 
                        id="lastName" 
                        placeholder="Doe" 
                        required
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input 
                      id="email" 
                      type="email" 
                      placeholder="john@example.com" 
                      required
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                    />
                  </div>

                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      id="phone" 
                      type="tel" 
                      placeholder="+1 (555) 123-4567"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input 
                      id="company" 
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="website">Website URL</Label>
                    <Input 
                      id="website" 
                      placeholder="https://yourwebsite.com"
                      value={formData.website}
                      onChange={(e) => handleInputChange('website', e.target.value)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="package">Interested Package</Label>
                    <Select value={formData.interestedPackage} onValueChange={(value) => handleInputChange('interestedPackage', value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a package" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="basic">Basic - $799/month</SelectItem>
                        <SelectItem value="standard">Standard - $1,299/month</SelectItem>
                        <SelectItem value="premium">Premium - $1,999/month</SelectItem>
                        <SelectItem value="enterprise">Enterprise - Custom</SelectItem>
                        <SelectItem value="basic-geo">Basic + GEO - $1,198/month</SelectItem>
                        <SelectItem value="standard-geo">Standard + GEO - $1,698/month</SelectItem>
                        <SelectItem value="premium-geo">Premium + GEO - $2,398/month</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Tell us about your goals</Label>
                    <Textarea 
                      id="message" 
                      placeholder="What are your main SEO challenges and goals?"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                    />
                  </div>
                  
                  <Button 
                    size="lg" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    type="submit"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Get Free SEO Audit'}
                  </Button>

                  <div className="text-center">
                    <p className="text-sm text-gray-600 mb-2">Or schedule a consultation directly:</p>
                    <Button 
                      variant="outline" 
                      type="button"
                      onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
                    >
                      <Calendar className="h-4 w-4 mr-2" />
                      Book 15-Min Free Consultation
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>

            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                  <Award className="h-6 w-6 mr-2 text-blue-600" />
                  Why Choose SEOYourCompany?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-4"></div>
                    <div>
                      <h4 className="font-semibold text-gray-900">17+ Years of Experience</h4>
                      <p className="text-gray-600">Proven track record with over 500+ successful campaigns</p>
                    </div>
                  </div>
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
                    <span className="text-gray-700">consult@seoyourcompany.com</span>
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
                  <li>• Performance optimization insights</li>
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
