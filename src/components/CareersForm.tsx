import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { useToast } from "@/hooks/use-toast";
import { FileText, Send } from "lucide-react";

const CareersForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    position: '',
    experienceYears: '',
    coverLetter: '',
    resumeUrl: '',
    linkedinUrl: '',
    portfolioUrl: '',
    salaryExpectation: '',
    availabilityDate: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const { error } = await supabase
        .from('careers_applications')
        .insert({
          first_name: formData.firstName,
          last_name: formData.lastName,
          email: formData.email,
          phone: formData.phone,
          position: formData.position,
          experience_years: formData.experienceYears ? parseInt(formData.experienceYears) : null,
          cover_letter: formData.coverLetter,
          resume_url: formData.resumeUrl,
          linkedin_url: formData.linkedinUrl,
          portfolio_url: formData.portfolioUrl,
          salary_expectation: formData.salaryExpectation,
          availability_date: formData.availabilityDate || null
        });

      if (error) {
        throw error;
      }

      toast({
        title: "Application Submitted!",
        description: "Your job application has been received. We'll review it and get back to you soon.",
      });

      // Reset form
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        position: '',
        experienceYears: '',
        coverLetter: '',
        resumeUrl: '',
        linkedinUrl: '',
        portfolioUrl: '',
        salaryExpectation: '',
        availabilityDate: ''
      });

    } catch (error) {
      console.error('Error submitting application:', error);
      toast({
        title: "Error",
        description: "There was a problem submitting your application. Please try again.",
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
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Apply for a Position
            </h2>
            <p className="text-xl text-gray-600">
              Ready to join our team? Submit your application below and let's build something amazing together.
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <FileText className="h-5 w-5" />
                Job Application Form
              </CardTitle>
              <CardDescription>
                Please fill out all required fields. We'll review your application and contact you within 5 business days.
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
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
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
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="position">Position Applying For *</Label>
                    <Select value={formData.position} onValueChange={(value) => handleInputChange('position', value)} required>
                      <SelectTrigger>
                        <SelectValue placeholder="Select a position" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="senior-seo-specialist">Senior SEO Specialist</SelectItem>
                        <SelectItem value="content-marketing-manager">Content Marketing Manager</SelectItem>
                        <SelectItem value="technical-seo-analyst">Technical SEO Analyst</SelectItem>
                        <SelectItem value="link-building-specialist">Link Building Specialist</SelectItem>
                        <SelectItem value="ppc-marketing-specialist">PPC Marketing Specialist</SelectItem>
                        <SelectItem value="account-manager">Account Manager</SelectItem>
                        <SelectItem value="web-developer">Web Developer</SelectItem>
                        <SelectItem value="data-analyst">Data Analyst</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <Label htmlFor="experienceYears">Years of Experience</Label>
                    <Input 
                      id="experienceYears" 
                      type="number" 
                      placeholder="3"
                      min="0"
                      max="50"
                      value={formData.experienceYears}
                      onChange={(e) => handleInputChange('experienceYears', e.target.value)}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="resumeUrl">Resume/CV URL *</Label>
                  <Input 
                    id="resumeUrl" 
                    type="url" 
                    placeholder="https://drive.google.com/your-resume-link" 
                    required
                    value={formData.resumeUrl}
                    onChange={(e) => handleInputChange('resumeUrl', e.target.value)}
                  />
                  <p className="text-sm text-gray-500 mt-1">
                    Please upload your resume to Google Drive, Dropbox, or similar and paste the public link here.
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="linkedinUrl">LinkedIn Profile</Label>
                    <Input 
                      id="linkedinUrl" 
                      type="url" 
                      placeholder="https://linkedin.com/in/yourprofile"
                      value={formData.linkedinUrl}
                      onChange={(e) => handleInputChange('linkedinUrl', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="portfolioUrl">Portfolio Website</Label>
                    <Input 
                      id="portfolioUrl" 
                      type="url" 
                      placeholder="https://yourportfolio.com"
                      value={formData.portfolioUrl}
                      onChange={(e) => handleInputChange('portfolioUrl', e.target.value)}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="salaryExpectation">Salary Expectation</Label>
                    <Input 
                      id="salaryExpectation" 
                      placeholder="$60,000 - $80,000 annually"
                      value={formData.salaryExpectation}
                      onChange={(e) => handleInputChange('salaryExpectation', e.target.value)}
                    />
                  </div>
                  <div>
                    <Label htmlFor="availabilityDate">Available Start Date</Label>
                    <Input 
                      id="availabilityDate" 
                      type="date"
                      value={formData.availabilityDate}
                      onChange={(e) => handleInputChange('availabilityDate', e.target.value)}
                    />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="coverLetter">Cover Letter / Why do you want to work with us? *</Label>
                  <Textarea 
                    id="coverLetter" 
                    placeholder="Tell us about yourself, your experience, and why you're interested in this position..."
                    rows={6}
                    required
                    value={formData.coverLetter}
                    onChange={(e) => handleInputChange('coverLetter', e.target.value)}
                  />
                </div>
                
                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  type="submit"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    'Submitting Application...'
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2" />
                      Submit Application
                    </>
                  )}
                </Button>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-sm text-blue-800">
                    <strong>Next Steps:</strong> After submitting your application, our HR team will review it within 5 business days. 
                    If your profile matches our requirements, we'll contact you to schedule an initial interview.
                  </p>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default CareersForm;