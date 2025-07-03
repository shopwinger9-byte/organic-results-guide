import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BarChart3, TrendingUp, Target, Eye, CheckCircle, ArrowRight, Star } from "lucide-react";

const AnalyticsReportingService = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      service: 'Analytics & Reporting',
      price: '$299/month'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  const handlePackageUpgrade = () => {
    const params = new URLSearchParams({
      plan: 'Basic',
      price: '$799'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-purple-100 text-purple-800">Analytics & Reporting</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Measure & Track <span className="bg-gradient-to-r from-purple-600 to-green-600 bg-clip-text text-transparent">SEO Performance</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get comprehensive SEO analytics and detailed reporting to track your progress, 
              measure ROI, and make data-driven decisions for your digital marketing strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Get Started - $299/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}>
                Free 15-Min Consultation
              </Button>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-purple-50 p-6 rounded-lg border border-purple-200 inline-block">
              <p className="text-purple-800 font-semibold flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Save $39/month with our Basic Package at $799/month
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
              Comprehensive SEO Analytics & Reporting
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <BarChart3 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Performance Tracking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Monitor keyword rankings, organic traffic, and conversion metrics</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">ROI Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Calculate return on investment and track revenue attribution</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Competitor Monitoring</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Track competitor performance and identify opportunities</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Eye className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Custom Dashboards</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Easy-to-understand reports and real-time dashboards</p>
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
              Our Analytics & Reporting Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Setup & Configuration",
                  description: "Configure Google Analytics, Search Console, and other tracking tools for comprehensive data collection"
                },
                {
                  step: "02", 
                  title: "Baseline Establishment",
                  description: "Document current performance metrics to measure future improvements against"
                },
                {
                  step: "03",
                  title: "Custom Dashboard Creation",
                  description: "Build personalized dashboards showing the metrics that matter most to your business"
                },
                {
                  step: "04",
                  title: "Monthly Analysis",
                  description: "Comprehensive monthly analysis of all SEO performance metrics and trends"
                },
                {
                  step: "05",
                  title: "Strategy Recommendations",
                  description: "Data-driven recommendations for improving performance based on analytics insights"
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
              What's Included in Your $299/Month Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Complete Google Analytics setup and configuration",
                  "Monthly performance reports with insights",
                  "Keyword ranking tracking and analysis",
                  "Organic traffic growth monitoring",
                  "Conversion tracking and ROI analysis",
                  "Competitor performance monitoring"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Custom dashboard development",
                  "Goal and event tracking setup",
                  "Search Console optimization",
                  "Performance trend analysis",
                  "Monthly strategy recommendations",
                  "Email support and consultation"
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
      <section className="py-20 bg-gradient-to-r from-purple-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Get More Value with Our Complete SEO Package
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Analytics & Reporting + SEO Optimization + Content Creation + More
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
                  <p className="text-purple-100">Everything you need to get started</p>
                  <ul className="text-sm text-purple-100 mt-4 space-y-1">
                    <li>✓ Complete Analytics & Reporting</li>
                    <li>✓ Keyword Research & Strategy</li>
                    <li>✓ On-Page SEO Optimization</li>
                    <li>✓ 5 Pages Optimized</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$799<span className="text-lg">/month</span></div>
                  <div className="text-yellow-200 font-semibold">Save $39/month</div>
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
                  question: "What analytics tools do you use for reporting?",
                  answer: "We use Google Analytics, Google Search Console, SEMrush, Ahrefs, and other industry-leading tools to provide comprehensive reporting."
                },
                {
                  question: "How often do you provide reports?",
                  answer: "You'll receive detailed monthly reports, plus access to real-time dashboards where you can check your performance anytime."
                },
                {
                  question: "Can you track ROI from SEO efforts?",
                  answer: "Yes, we set up conversion tracking and attribution modeling to help you understand the ROI of your SEO investment."
                },
                {
                  question: "Do you provide competitor analysis in reports?",
                  answer: "Absolutely! Each report includes competitor performance analysis and insights into opportunities to outrank them."
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
              Ready to Track Your SEO Success?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with a free consultation or get started with our analytics service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Start Analytics - $299/month
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

export default AnalyticsReportingService;
