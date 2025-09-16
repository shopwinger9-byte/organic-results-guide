import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Diamond, Rocket, Globe, TrendingUp, Users, Star } from "lucide-react";

const PremiumPlan = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "Premium",
      price: "$1,999/month"
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-50 via-blue-50 to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Diamond className="h-16 w-16 text-purple-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Premium SEO Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Advanced SEO solution for established businesses ready to dominate their industry
            </p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-purple-600">$1,999</span>
              <span className="text-xl text-gray-600 ml-2">/month</span>
            </div>
            <Button 
              size="lg" 
              className="bg-purple-600 hover:bg-purple-700 text-lg px-8 py-3"
              onClick={handleGetStarted}
            >
              Get Started with Premium Plan
            </Button>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Everything in Standard Plan, Plus Premium Features:
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Rocket className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle>Advanced Link Building</CardTitle>
                  <CardDescription>
                    High-authority link acquisition and strategic outreach campaigns
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      High-DR domain targeting
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Industry publication outreach
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Broken link building
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <Globe className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>International SEO</CardTitle>
                  <CardDescription>
                    Multi-language and geo-targeted optimization strategies
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Hreflang implementation
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Multi-language content
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Geo-targeted campaigns
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <Users className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle>Dedicated Account Manager</CardTitle>
                  <CardDescription>
                    Personal SEO specialist exclusively managing your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Weekly strategy calls
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Direct communication line
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Custom reporting
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-purple-50 to-blue-50 border-2 border-purple-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Diamond className="h-8 w-8 text-purple-600 mr-3" />
                  Complete Premium Plan Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-900">Advanced SEO</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Advanced link building strategy
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Content creation (8 posts/month)
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        25 pages optimized
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Advanced technical SEO
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">E-commerce & International</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        E-commerce SEO optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        International SEO (multi-language)
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Advanced tracking & analytics
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Video SEO optimization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-900">Premium Support</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Dedicated account manager
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Conversion rate optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Social media integration
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Priority support
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Premium Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Premium Plan Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center border-purple-200 border-2">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-purple-600 mb-2">300-500%</div>
                  <CardTitle>Traffic Growth</CardTitle>
                  <CardDescription>
                    Average organic traffic increase within 12 months
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center border-blue-200 border-2">
                <CardHeader>
                  <Star className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
                  <CardTitle>First Page Rankings</CardTitle>
                  <CardDescription>
                    New keywords ranking on Google's first page
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center border-green-200 border-2">
                <CardHeader>
                  <Globe className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <CardTitle>Domain Authority Boost</CardTitle>
                  <CardDescription>
                    Average increase in domain authority score
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center border-yellow-200 border-2">
                <CardHeader>
                  <Rocket className="h-12 w-12 text-yellow-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-yellow-600 mb-2">6-9</div>
                  <CardTitle>Months to Dominance</CardTitle>
                  <CardDescription>
                    Timeline to achieve industry leadership position
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs Premium */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Is Premium Plan Right for Your Business?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Perfect for Premium if you have:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Established business with significant online presence</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>E-commerce website with extensive product catalog</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>International market expansion goals</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>High competition in your industry</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Need for dedicated SEO support</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Industries that benefit most:</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>E-commerce and retail</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Professional services</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Healthcare and medical</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Technology and SaaS</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-blue-500 mr-3 mt-1" />
                      <span>Financial services</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Dominate Your Industry?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Take your business to the next level with our Premium SEO plan and comprehensive growth strategy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-purple-600 hover:bg-purple-50"
                onClick={handleGetStarted}
              >
                Start Premium Plan Today
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-purple-600 hover:bg-purple-50"
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

export default PremiumPlan;