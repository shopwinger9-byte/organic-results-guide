
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FileText, Edit3, Link2, Image, CheckCircle, ArrowRight, Star } from "lucide-react";

const OnPageSEOService = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      service: 'On-Page SEO',
      price: '$499/month'
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-green-100 text-green-800">On-Page SEO Optimization</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Optimize Every <span className="bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">Page Element</span> for Maximum Rankings
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Transform your website pages into search engine magnets with comprehensive on-page optimization. 
              From title tags to content structure, we optimize every element for better rankings and user experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Get Started - $499/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/constult-seoyourcompany/30min', '_blank')}>
                Free 15-Min Consultation
              </Button>
            </div>
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200 inline-block">
              <p className="text-blue-800 font-semibold flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Save $99/month with our Basic Package at $799/month
              </p>
              <Button variant="link" className="text-blue-700 p-0 h-auto" onClick={handlePackageUpgrade}>
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
              Complete On-Page SEO Optimization
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <FileText className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Content Optimization</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Optimize content structure, keyword density, and readability for better rankings</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Edit3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Meta Tags Enhancement</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Craft compelling title tags and meta descriptions that drive clicks</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Link2 className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Internal Linking</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Strategic internal linking to boost page authority and user navigation</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Image className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Image SEO</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Optimize images with proper alt tags, compression, and structured data</p>
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
              Our On-Page SEO Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Page Audit & Analysis",
                  description: "Comprehensive audit of current on-page elements and identification of optimization opportunities"
                },
                {
                  step: "02", 
                  title: "Keyword Mapping",
                  description: "Map targeted keywords to specific pages for focused optimization"
                },
                {
                  step: "03",
                  title: "Content Optimization",
                  description: "Optimize content structure, headers, and keyword integration for better relevance"
                },
                {
                  step: "04",
                  title: "Technical Elements",
                  description: "Optimize meta tags, URLs, internal linking, and image elements"
                },
                {
                  step: "05",
                  title: "Testing & Monitoring",
                  description: "Monitor performance and make data-driven adjustments for continuous improvement"
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
              What's Included in Your $499/Month Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Up to 10 pages fully optimized monthly",
                  "Title tag and meta description optimization",
                  "Header tag structure improvement",
                  "Content optimization and keyword integration",
                  "Internal linking strategy implementation",
                  "Image SEO and alt tag optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "URL structure optimization",
                  "Schema markup implementation",
                  "Page speed optimization recommendations",
                  "Monthly performance reports",
                  "Content gap analysis",
                  "Priority email support"
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
              On-Page SEO + Keyword Research + Technical Optimization + More
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
                  <p className="text-green-100">Everything you need to get started</p>
                  <ul className="text-sm text-green-100 mt-4 space-y-1">
                    <li>✓ Complete On-Page SEO</li>
                    <li>✓ Keyword Research & Strategy</li>
                    <li>✓ 5 Pages Optimized</li>
                    <li>✓ Monthly Reports</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$799<span className="text-lg">/month</span></div>
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
                  question: "How many pages can you optimize per month?",
                  answer: "Our individual On-Page SEO service includes optimization of up to 10 pages per month, focusing on your most important pages first."
                },
                {
                  question: "Do you rewrite content or just optimize existing content?",
                  answer: "We primarily optimize your existing content for better SEO performance. If content rewriting is needed, we'll recommend it and provide quotes for additional content creation."
                },
                {
                  question: "How long does it take to see results from on-page optimization?",
                  answer: "You can typically expect to see improvements in search rankings within 4-8 weeks, with more significant results after 3-6 months of consistent optimization."
                },
                {
                  question: "Is this service suitable for e-commerce websites?",
                  answer: "Yes! We have extensive experience optimizing product pages, category pages, and other e-commerce elements for better search visibility."
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
              Ready to Optimize Your Pages for Better Rankings?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with a free consultation or get started with our on-page SEO service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Start On-Page SEO - $499/month
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

export default OnPageSEOService;
