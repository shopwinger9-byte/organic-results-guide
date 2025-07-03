import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Settings, Zap, Smartphone, Code, CheckCircle, ArrowRight, Star } from "lucide-react";

const TechnicalSEOService = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      service: 'Technical SEO',
      price: '$699/month'
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Technical SEO Optimization</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Fix Technical Issues <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">Under the Hood</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Eliminate technical barriers that prevent search engines from properly crawling, indexing, and ranking your website. 
              Our technical SEO experts ensure your site meets all search engine requirements.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Get Started - $699/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}>
                Free 15-Min Consultation
              </Button>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-purple-200 inline-block">
              <p className="text-purple-800 font-semibold flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Save $99/month with our Standard Package at $1,299/month
              </p>
              <Button variant="link" className="text-purple-700 p-0 h-auto" onClick={handlePackageUpgrade}>
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
              Complete Technical SEO Optimization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Zap className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Site Speed Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Optimize loading speeds to improve user experience and search rankings</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Smartphone className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Mobile Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Ensure perfect mobile responsiveness and Core Web Vitals compliance</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Settings className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Crawlability Fixes</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Fix robots.txt, XML sitemaps, and crawl errors for better indexing</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Code className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Schema Markup</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Implement structured data for enhanced search result displays</p>
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
              Our Technical SEO Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Technical SEO Audit",
                  description: "Comprehensive technical analysis using advanced tools to identify all issues and opportunities"
                },
                {
                  step: "02", 
                  title: "Issue Prioritization",
                  description: "Rank technical issues by impact and urgency for maximum ROI on fixes"
                },
                {
                  step: "03",
                  title: "Implementation",
                  description: "Fix critical technical issues including site speed, mobile optimization, and crawlability"
                },
                {
                  step: "04",
                  title: "Monitoring & Testing",
                  description: "Continuous monitoring of technical performance and Core Web Vitals"
                },
                {
                  step: "05",
                  title: "Ongoing Maintenance",
                  description: "Regular technical health checks and proactive issue resolution"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-purple-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
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
              What's Included in Your $699/Month Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Comprehensive technical SEO audit",
                  "Site speed optimization and Core Web Vitals improvement",
                  "Mobile responsiveness optimization",
                  "XML sitemap creation and optimization",
                  "Robots.txt optimization",
                  "Schema markup implementation"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Crawl error identification and fixes",
                  "Duplicate content resolution",
                  "URL structure optimization",
                  "HTTPS and security optimization",
                  "Monthly technical performance reports",
                  "Priority technical support"
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Get More Value with Our Complete SEO Package
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Technical SEO + Content Creation + Link Building + More
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                  <p className="text-purple-100">Comprehensive SEO for growing businesses</p>
                  <ul className="text-sm text-purple-100 mt-4 space-y-1">
                    <li>✓ Complete Technical SEO</li>
                    <li>✓ Content Creation (4 posts/month)</li>
                    <li>✓ Link Building Campaign</li>
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
                  question: "How do you improve Core Web Vitals scores?",
                  answer: "We optimize page loading speed, interactivity, and visual stability through image compression, code optimization, server response improvements, and layout optimization."
                },
                {
                  question: "Will you work directly with my developer?",
                  answer: "Yes, we can coordinate with your development team to implement technical fixes, or we can make changes directly if you provide access."
                },
                {
                  question: "How long does technical SEO implementation take?",
                  answer: "Most technical fixes are implemented within the first month, with ongoing monitoring and optimization continuing throughout the service period."
                },
                {
                  question: "Do you fix website security issues too?",
                  answer: "We focus on SEO-related security aspects like HTTPS implementation and basic security headers. For comprehensive security audits, we can recommend specialized security services."
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
              Ready to Fix Your Technical SEO Issues?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with a free consultation or get started with our technical SEO service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Start Technical SEO - $699/month
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

export default TechnicalSEOService;
