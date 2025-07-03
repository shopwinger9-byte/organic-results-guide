
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Target, TrendingUp, Users, CheckCircle, ArrowRight, Star } from "lucide-react";

const KeywordResearchStrategy = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      service: 'Keyword Research & Strategy',
      price: '$399/month'
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
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">Keyword Research & Strategy</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Discover High-Value <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Keywords</span> That Drive Results
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Uncover profitable keyword opportunities with our comprehensive research and strategic analysis. 
              Target the right keywords to dominate search results and attract qualified traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Get Started - $399/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}>
                Free 15-Min Consultation
              </Button>
            </div>
            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200 inline-block">
              <p className="text-green-800 font-semibold flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Save $79/month with our Basic Package at $799/month
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
              Comprehensive Keyword Research & Strategy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Keyword Discovery</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Identify thousands of relevant keywords using advanced tools and techniques</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Target className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Difficulty Assessment</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Analyze keyword difficulty and competition to prioritize winnable terms</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Search Intent Mapping</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Understand user intent to create targeted content that converts</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Competitor Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Discover gaps in competitor strategies and capitalize on opportunities</p>
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
              Our Keyword Research Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Business Analysis",
                  description: "Deep dive into your business goals, target audience, and market positioning"
                },
                {
                  step: "02", 
                  title: "Competitor Research",
                  description: "Analyze competitor keyword strategies and identify opportunities"
                },
                {
                  step: "03",
                  title: "Keyword Discovery",
                  description: "Use advanced tools to discover thousands of relevant keyword opportunities"
                },
                {
                  step: "04",
                  title: "Intent Classification",
                  description: "Categorize keywords by search intent for targeted content creation"
                },
                {
                  step: "05",
                  title: "Strategy Development",
                  description: "Create a prioritized action plan with implementation roadmap"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
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
              What's Included in Your $399/Month Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "Monthly keyword reports with 500+ targeted keywords",
                  "Comprehensive competitor keyword analysis",
                  "Search intent mapping for content strategy",
                  "Keyword difficulty assessment and prioritization",
                  "Long-tail keyword discovery and optimization",
                  "Seasonal trend analysis and planning"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Monthly strategy consultation call",
                  "Keyword tracking and ranking reports",
                  "Opportunity identification and alerts",
                  "Content gap analysis and recommendations",
                  "Local keyword research (if applicable)",
                  "Email support and expert guidance"
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
      <section className="py-20 bg-gradient-to-r from-blue-600 to-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Get More Value with Our Complete SEO Package
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Keyword Research + On-Page SEO + Technical Optimization + More
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Basic Package</h3>
                  <p className="text-blue-100">Everything you need to get started</p>
                  <ul className="text-sm text-blue-100 mt-4 space-y-1">
                    <li>✓ Keyword Research & Strategy</li>
                    <li>✓ Basic On-Page Optimization</li>
                    <li>✓ 5 Pages Optimized</li>
                    <li>✓ Monthly Reports</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$799<span className="text-lg">/month</span></div>
                  <div className="text-green-200 font-semibold">Save $79/month</div>
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
                  question: "How many keywords will you research for my business?",
                  answer: "We typically research 500+ relevant keywords per month, including primary, secondary, and long-tail keywords tailored to your industry and business goals."
                },
                {
                  question: "Do you provide competitor keyword analysis?",
                  answer: "Yes, comprehensive competitor analysis is included. We analyze your top 5-10 competitors to identify keyword gaps and opportunities."
                },
                {
                  question: "How often do you update keyword strategies?",
                  answer: "We provide monthly keyword reports and strategy updates. We also monitor for new opportunities and trending keywords throughout the month."
                },
                {
                  question: "Can I upgrade to a full SEO package later?",
                  answer: "Absolutely! You can upgrade to our Basic, Standard, or Premium packages anytime. We'll credit your current month's payment toward the upgrade."
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
              Ready to Discover High-Value Keywords?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with a free consultation or get started with our keyword research service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Start Keyword Research - $399/month
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

export default KeywordResearchStrategy;
