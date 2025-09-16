import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Crown, Zap, Users, Target } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const StandardPlan = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "Standard",
      price: "$1,299/month"
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
            <div className="flex justify-center mb-4">
              <Badge className="bg-blue-600 text-white px-4 py-2 text-sm font-medium flex items-center">
                <Star className="h-4 w-4 mr-1" />
                Most Popular
              </Badge>
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Standard SEO Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Comprehensive SEO solution for growing businesses ready to dominate their market
            </p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-blue-600">$1,299</span>
              <span className="text-xl text-gray-600 ml-2">/month</span>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={handleGetStarted}
            >
              Get Started with Standard Plan
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Everything in Basic Plan, Plus:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <Zap className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Technical SEO Audit</CardTitle>
                  <CardDescription>
                    Complete technical optimization for better crawling and indexing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Site speed optimization
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Mobile optimization
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Schema markup implementation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <Target className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle>Content Creation</CardTitle>
                  <CardDescription>
                    4 high-quality, SEO-optimized blog posts every month
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Keyword-optimized articles
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Topic research & planning
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Content calendar management
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Users className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle>Link Building Campaign</CardTitle>
                  <CardDescription>
                    Strategic link acquisition to boost domain authority
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Guest posting campaigns
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Digital PR outreach
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Quality link monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-green-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Crown className="h-8 w-8 text-yellow-500 mr-3" />
                  Complete Standard Plan Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Everything in Basic +</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Technical SEO audit & fixes
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Content creation (4 posts/month)
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Link building campaign
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        15 pages optimized
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Advanced competitor analysis
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Priority support
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-900">Advanced Features</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Local SEO optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Google My Business setup
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Schema markup implementation
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Site speed optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Monthly strategy calls
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Expected Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What Results Can You Expect?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-blue-600 mb-2">150-300%</div>
                  <CardTitle>Organic Traffic Increase</CardTitle>
                  <CardDescription>
                    Average growth in organic traffic within 6 months
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <CardTitle>Keyword Rankings</CardTitle>
                  <CardDescription>
                    New first-page rankings typically achieved
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="text-4xl font-bold text-purple-600 mb-2">3-6</div>
                  <CardTitle>Months to Results</CardTitle>
                  <CardDescription>
                    Timeline to see significant ranking improvements
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Standard is Popular */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Why Standard Plan is Our Most Popular Choice
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Complete SEO Solution</h3>
                <p className="text-gray-600">
                  Combines all essential SEO elements - technical optimization, content creation, 
                  and link building - in one comprehensive package.
                </p>
              </div>
              
              <div className="bg-green-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Best Value for Money</h3>
                <p className="text-gray-600">
                  Offers the perfect balance of features and price point for businesses 
                  serious about SEO but not ready for enterprise-level investment.
                </p>
              </div>
              
              <div className="bg-purple-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Proven Track Record</h3>
                <p className="text-gray-600">
                  Over 200 businesses have achieved significant growth with our Standard plan, 
                  making it our most successful offering.
                </p>
              </div>
              
              <div className="bg-yellow-50 p-8 rounded-lg">
                <h3 className="text-xl font-semibold mb-4">Scalable Foundation</h3>
                <p className="text-gray-600">
                  Builds a solid SEO foundation that can be easily expanded as your 
                  business grows and your needs evolve.
                </p>
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
              Ready to Accelerate Your Growth?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join hundreds of successful businesses who chose our Standard plan to dominate their market.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                onClick={handleGetStarted}
              >
                Start Standard Plan Today
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default StandardPlan;