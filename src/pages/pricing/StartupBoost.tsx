import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Rocket, Clock, Target, TrendingUp } from "lucide-react";

const StartupBoost = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "Startup Boost",
      price: "$399/month"
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Rocket className="h-16 w-16 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Startup Boost Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Quick wins and essential optimizations for new businesses getting started online
            </p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-green-600">$399</span>
              <span className="text-xl text-gray-600 ml-2">/month</span>
            </div>
            <Button 
              size="lg" 
              className="bg-green-600 hover:bg-green-700 text-lg px-8 py-3"
              onClick={handleGetStarted}
            >
              Start Your SEO Journey
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What's Included in Startup Boost
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card>
                <CardHeader>
                  <Target className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle>Initial Keyword Research</CardTitle>
                  <CardDescription>
                    Identify the best opportunities for your business niche
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      20 target keywords identified
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Local search opportunities
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Competition analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <TrendingUp className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Basic Website Audit</CardTitle>
                  <CardDescription>
                    Comprehensive review of your current SEO status
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Technical SEO check
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Content optimization review
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Site speed analysis
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <Clock className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle>One-Time Consultation</CardTitle>
                  <CardDescription>
                    60-minute strategy session with SEO expert
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Personalized action plan
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Priority recommendations
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Q&A session
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-green-50 border-2 border-green-200">
              <CardHeader>
                <CardTitle className="text-2xl">Complete Startup Boost Package</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3">Research & Analysis</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Initial keyword research
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Basic website audit
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Competitor overview
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3">Setup & Support</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Google My Business setup
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        3 pages optimized
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        One-time consultation
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Perfect For */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Perfect for Startups Who Need:
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-green-900">Quick Wins</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Immediate SEO foundation setup</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Fast implementation timeline</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Budget-friendly entry point</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Clear action plan for growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-white">
                <CardHeader>
                  <CardTitle className="text-blue-900">Essential Setup</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Local business visibility</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Basic optimization knowledge</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Professional guidance</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Foundation for future growth</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline & Results */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What to Expect - 30-Day Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">1</span>
                  </div>
                  <CardTitle className="text-lg">Week 1</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Initial audit and keyword research completed. 
                    Google My Business setup initiated.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">2</span>
                  </div>
                  <CardTitle className="text-lg">Week 2</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    First 3 pages optimized. 
                    Basic technical fixes implemented.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">3</span>
                  </div>
                  <CardTitle className="text-lg">Week 3</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Strategy consultation scheduled. 
                    Local SEO setup completed.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-yellow-600 font-bold">4</span>
                  </div>
                  <CardTitle className="text-lg">Week 4</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Consultation completed with action plan. 
                    Ready to scale with ongoing SEO.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Launch Your SEO Success?
            </h2>
            <p className="text-xl text-green-100 mb-8">
              Get your startup's SEO foundation built right from day one with our proven system.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-green-600 hover:bg-green-50"
                onClick={handleGetStarted}
              >
                Start Startup Boost Plan
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-green-600 hover:bg-green-50"
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

export default StartupBoost;