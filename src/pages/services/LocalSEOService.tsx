
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Star, Users, Smartphone, CheckCircle, ArrowRight } from "lucide-react";

const LocalSEOService = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      service: 'Local SEO',
      price: '$599/month'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  const handlePackageUpgrade = () => {
    const params = new URLSearchParams({
      plan: 'Standard',
      price: '$1299'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">Local SEO Optimization</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Dominate <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Local Search</span> Results
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Attract more local customers with targeted local SEO optimization. 
              Get found by customers in your area when they search for your services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Get Started - $599/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}>
                Free 15-Min Consultation
              </Button>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-green-200 inline-block">
              <p className="text-green-800 font-semibold flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Save $99/month with our Standard Package at $1,299/month
              </p>
              <Button variant="link" className="text-green-700 p-0 h-auto" onClick={handlePackageUpgrade}>
                Upgrade to Full Package <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Complete Local SEO Optimization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Google My Business</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Complete optimization of your Google My Business profile for maximum visibility</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Star className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Review Management</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Strategic review acquisition and management to build trust and credibility</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Local Citations</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Build consistent NAP citations across local directories and platforms</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Local Keywords</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Target location-specific keywords that drive local traffic</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Local SEO Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Local SEO Audit",
                  description: "Comprehensive analysis of your current local search presence and competitors"
                },
                {
                  step: "02", 
                  title: "Google My Business Optimization",
                  description: "Complete setup and optimization of your GMB profile for maximum visibility"
                },
                {
                  step: "03",
                  title: "Citation Building",
                  description: "Create consistent business listings across major local directories"
                },
                {
                  step: "04",
                  title: "Review Strategy",
                  description: "Implement systems to generate positive reviews and manage online reputation"
                },
                {
                  step: "05",
                  title: "Local Content & Monitoring",
                  description: "Create location-specific content and monitor local ranking performance"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-green-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What's Included in Your $599/Month Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Complete Google My Business optimization",
                  "50+ local business directory submissions",
                  "NAP consistency audit and cleanup",
                  "Local keyword research and targeting",
                  "Review generation and management strategy",
                  "Local competitor analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Local schema markup implementation",
                  "Location-specific landing pages optimization",
                  "Monthly local ranking reports",
                  "Google My Business post management",
                  "Local content creation and optimization",
                  "Mobile optimization for local searches"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Get More Value with Our Complete SEO Package
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Local SEO + Technical Optimization + Content Creation + More
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                  <p className="text-green-100">Comprehensive SEO for growing businesses</p>
                  <ul className="text-sm text-green-100 mt-4 space-y-1">
                    <li>✓ Complete Local SEO Optimization</li>
                    <li>✓ Technical SEO & Optimization</li>
                    <li>✓ Content Creation (4 posts/month)</li>
                    <li>✓ 15 Pages Optimized</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$1,299<span className="text-lg">/month</span></div>
                  <div className="text-yellow-200 font-semibold">Save $99/month</div>
                  <Button size="lg" variant="secondary" className="mt-4" onClick={handlePackageUpgrade}>
                    Upgrade Now
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "How long does it take to see local SEO results?",
                  answer: "You can typically expect to see improvements in local rankings within 4-8 weeks, with more significant results after 3-6 months of consistent optimization."
                },
                {
                  question: "Do you help with Google My Business management?",
                  answer: "Yes, we provide complete Google My Business optimization including profile setup, post management, review monitoring, and performance tracking."
                },
                {
                  question: "Can you help businesses with multiple locations?",
                  answer: "Absolutely! We specialize in multi-location SEO strategies and can optimize each location separately while maintaining brand consistency."
                },
                {
                  question: "Do you help with online review management?",
                  answer: "Yes, we implement review generation strategies, help respond to reviews professionally, and monitor your online reputation across all platforms."
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Dominate Local Search Results?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with a free consultation or get started with our local SEO service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Start Local SEO - $599/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}>
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalSEOService;
