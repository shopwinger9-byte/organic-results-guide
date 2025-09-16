import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ArrowRight, Star, BarChart3, Search, FileText } from "lucide-react";

const BasicPlan = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "Basic",
      price: "$799/month"
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Basic SEO Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Perfect for small businesses starting their SEO journey with proven fundamentals
            </p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-blue-600">$799</span>
              <span className="text-xl text-gray-600 ml-2">/month</span>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={handleGetStarted}
            >
              Get Started with Basic Plan
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What's Included in Basic Plan
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Search className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Keyword Research & Strategy</CardTitle>
                  <CardDescription>
                    Comprehensive keyword analysis to identify high-value opportunities
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Competitor keyword analysis
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Search intent mapping
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Long-tail keyword discovery
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <FileText className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle>On-Page Optimization</CardTitle>
                  <CardDescription>
                    Optimize 5 key pages for maximum search visibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Meta tags optimization
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Content structure improvement
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Internal linking strategy
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle>Performance Tracking</CardTitle>
                  <CardDescription>
                    Monthly reports and Google Analytics setup
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Google Analytics setup
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Monthly performance reports
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Ranking tracking
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-50">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Feature List</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-3">Core Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Keyword research & strategy
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Basic on-page optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Monthly performance reports
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Google Analytics setup
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        5 pages optimized
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Additional Benefits</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Email support
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Competitor analysis (basic)
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Meta tags optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        XML sitemap creation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Basic */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Choose the Basic Plan?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <Star className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Perfect Starting Point</h3>
                  <p className="text-gray-600">
                    Ideal for small businesses taking their first steps into SEO with essential optimizations.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <BarChart3 className="h-12 w-12 text-blue-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Proven Results</h3>
                  <p className="text-gray-600">
                    Our basic plan typically delivers 50-100% increase in organic traffic within 6 months.
                  </p>
                </div>
              </div>
              <div>
                <div className="bg-white p-6 rounded-lg shadow-sm">
                  <ArrowRight className="h-12 w-12 text-green-500 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-3">Easy to Upgrade</h3>
                  <p className="text-gray-600">
                    Start with basics and seamlessly upgrade to Standard or Premium as you grow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your SEO Journey?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get started with our Basic plan and see measurable results in just 60 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                onClick={handleGetStarted}
              >
                Get Started Now
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BasicPlan;