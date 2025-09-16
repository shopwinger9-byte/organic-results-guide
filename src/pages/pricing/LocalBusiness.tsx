import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, MapPin, Star, Phone, Users, TrendingUp } from "lucide-react";

const LocalBusiness = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "Local Business",
      price: "$899/month"
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <MapPin className="h-16 w-16 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Local Business SEO Plan
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Dominate your local market and attract customers in your geographic area
            </p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-5xl font-bold text-blue-600">$899</span>
              <span className="text-xl text-gray-600 ml-2">/month</span>
            </div>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={handleGetStarted}
            >
              Dominate Local Search
            </Button>
          </div>
        </div>
      </section>

      {/* Local SEO Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Local SEO Specializations
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <MapPin className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Google My Business</CardTitle>
                  <CardDescription>
                    Complete optimization of your Google Business Profile
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Profile optimization
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Photo management
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Posts and updates
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Phone className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle>Local Citation Building</CardTitle>
                  <CardDescription>
                    Build consistent NAP across all major directories
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Directory submissions
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      NAP consistency
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Citation monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <Star className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle>Review Management</CardTitle>
                  <CardDescription>
                    Boost your online reputation with strategic review management
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Review acquisition
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Response management
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Reputation monitoring
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MapPin className="h-8 w-8 text-blue-600 mr-3" />
                  Complete Local Business Package
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Google Optimization</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Google My Business optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Google Posts management
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Q&A optimization
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Map pack optimization
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-900">Citations & Directories</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Local citation building
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        NAP consistency audit
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Industry-specific directories
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Citation monitoring
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-green-900">Content & Reviews</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Local content creation
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Review management
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Local keyword targeting
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Location page optimization
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Local SEO Results */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Local SEO Success Metrics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-blue-600 mb-2">Top 3</div>
                  <CardTitle>Map Pack Rankings</CardTitle>
                  <CardDescription>
                    Average position in Google's local map results
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Phone className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-purple-600 mb-2">300%+</div>
                  <CardTitle>Call Increase</CardTitle>
                  <CardDescription>
                    Average increase in phone calls from Google
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Star className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-green-600 mb-2">4.5+</div>
                  <CardTitle>Review Rating</CardTitle>
                  <CardDescription>
                    Improved average rating across all platforms
                  </CardDescription>
                </CardHeader>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-orange-600 mb-2">250%+</div>
                  <CardTitle>Foot Traffic</CardTitle>
                  <CardDescription>
                    Increase in local store visits and inquiries
                  </CardDescription>
                </CardHeader>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Business Types */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Perfect for These Local Businesses
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle className="text-blue-900">Service Businesses</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      Plumbers & HVAC
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      Electricians
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      Landscaping
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-blue-500 mr-2" />
                      Cleaning services
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-purple-50 border-purple-200">
                <CardHeader>
                  <CardTitle className="text-purple-900">Healthcare & Professional</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      Dentists & Doctors
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      Lawyers & Attorneys
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      Accountants
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-purple-500 mr-2" />
                      Insurance agents
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="bg-green-50 border-green-200">
                <CardHeader>
                  <CardTitle className="text-green-900">Retail & Hospitality</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Restaurants & Cafes
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Retail stores
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Auto dealers
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Gyms & Spas
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Local Success Timeline */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Local SEO Success Timeline
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-blue-600 font-bold">30</span>
                  </div>
                  <CardTitle className="text-lg">Days 1-30</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Google My Business optimization, citation audit, 
                    and initial local keyword research.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-purple-600 font-bold">60</span>
                  </div>
                  <CardTitle className="text-lg">Days 31-60</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Citation building, review management setup, 
                    and local content optimization.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-green-600 font-bold">90</span>
                  </div>
                  <CardTitle className="text-lg">Days 61-90</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Local rankings improve, more Google My Business 
                    activity, increased local visibility.
                  </p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-orange-600 font-bold">120+</span>
                  </div>
                  <CardTitle className="text-lg">Days 90+</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600">
                    Dominate local search results, consistent leads, 
                    and established local authority.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Own Your Local Market?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start dominating local search results and attract more customers from your area today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                onClick={handleGetStarted}
              >
                Start Local SEO Plan
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule Local Audit
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LocalBusiness;