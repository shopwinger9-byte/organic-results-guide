import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, ShoppingCart, Search, Star, TrendingUp, Package } from "lucide-react";

const EcommerceSEO = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "E-commerce SEO",
      price: "$1,599/month"
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-orange-50 to-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <ShoppingCart className="h-16 w-16 text-orange-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              E-commerce SEO Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Specialized SEO strategies designed to maximize online store visibility and sales
            </p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-orange-600">$1,599</span>
              <span className="text-xl text-gray-600 ml-2">/month</span>
            </div>
            <Button 
              size="lg" 
              className="bg-orange-600 hover:bg-orange-700 text-lg px-8 py-3"
              onClick={handleGetStarted}
            >
              Boost Your Online Store
            </Button>
          </div>
        </div>
      </section>

      {/* E-commerce Specific Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              E-commerce SEO Specializations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-orange-200">
                <CardHeader>
                  <Package className="h-10 w-10 text-orange-600 mb-4" />
                  <CardTitle>Product Page Optimization</CardTitle>
                  <CardDescription>
                    Optimize every product page for maximum search visibility
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Product title optimization
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Product descriptions
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Image alt text optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <Search className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Category Page SEO</CardTitle>
                  <CardDescription>
                    Optimize category pages to rank for high-volume keywords
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Category page structure
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Faceted navigation SEO
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Internal linking strategy
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Star className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle>Review Management</CardTitle>
                  <CardDescription>
                    Optimize review systems for better rankings and trust
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Review schema markup
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Review acquisition strategy
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Rating optimization
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-orange-50 to-red-50 border-2 border-orange-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <ShoppingCart className="h-8 w-8 text-orange-600 mr-3" />
                  Complete E-commerce SEO Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-orange-900">Product Optimization</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Product page optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Category page SEO
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Shopping feed optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Product schema markup
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Technical & Analytics</h4>
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
                        Conversion tracking
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        E-commerce analytics setup
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-900">Trust & Reviews</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Review management
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Trust signals optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Rich snippets implementation
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Brand reputation management
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* E-commerce Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              E-commerce SEO Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-orange-600 mb-2">200-400%</div>
                  <CardTitle>Organic Revenue Growth</CardTitle>
                  <CardDescription>
                    Average increase in organic sales within 12 months
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-blue-600 mb-2">75+</div>
                  <CardTitle>Product Rankings</CardTitle>
                  <CardDescription>
                    Products ranking on first page for target keywords
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Package className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-green-600 mb-2">50+</div>
                  <CardTitle>Category Improvements</CardTitle>
                  <CardDescription>
                    Category pages achieving top 3 rankings
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Star className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-purple-600 mb-2">4.5+</div>
                  <CardTitle>Average Rating</CardTitle>
                  <CardDescription>
                    Improved customer review ratings across platforms
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* E-commerce Challenges */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Common E-commerce SEO Challenges We Solve
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-red-50 border-red-200">
                <CardHeader>
                  <CardTitle className="text-red-900">Challenges</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Duplicate content across product variations</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Poor product page rankings</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Complex site structure issues</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Low conversion rates from organic traffic</span>
                    </li>
                    <li className="flex items-start">
                      <div className="w-2 h-2 bg-red-500 rounded-full mr-3 mt-2"></div>
                      <span>Missing product schema markup</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Our Solutions</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Canonical tag implementation and content differentiation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Product-specific keyword optimization</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Strategic internal linking and navigation</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>CRO-focused SEO optimizations</span>
                    </li>
                    <li className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-1" />
                      <span>Comprehensive structured data implementation</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-orange-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Dominate E-commerce Search?
            </h2>
            <p className="text-xl text-orange-100 mb-8">
              Transform your online store into a search engine magnet that drives consistent, high-converting traffic.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-orange-600 hover:bg-orange-50"
                onClick={handleGetStarted}
              >
                Start E-commerce SEO
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-orange-600 hover:bg-orange-50"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule Store Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EcommerceSEO;