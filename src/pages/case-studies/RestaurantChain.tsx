import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign } from "lucide-react";

const RestaurantChainCaseStudy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <Button
              variant="ghost"
              size="sm"
              className="mb-6"
              onClick={() => window.location.href = '/case-studies'}
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Case Studies
            </Button>
            <div className="max-w-4xl">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Local Restaurant Chain: 220% Traffic Growth Through Local SEO
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a regional restaurant chain dominate local search across 15 locations
              </p>
            </div>
          </div>
        </section>

        {/* Results Overview */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">220%</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">200+</div>
                  <div className="text-gray-600">Keywords Ranking</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">190%</div>
                  <div className="text-gray-600">Conversion Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">4 Months</div>
                  <div className="text-gray-600">To Achieve Results</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Main Content */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A popular regional restaurant chain with 15 locations across three states was struggling with poor local search visibility. Despite having loyal customers, they were losing significant foot traffic to competitors who dominated local search results.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Their main challenges included inconsistent NAP (Name, Address, Phone) information across directories, lack of localized content, poor Google Business Profile optimization, and minimal online reviews management.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Local SEO Audit</h3>
                    <p className="text-gray-700">
                      Conducted comprehensive local SEO audits for all 15 locations, identifying citation inconsistencies, duplicate listings, and optimization opportunities.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Google Business Profile Optimization</h3>
                    <p className="text-gray-700">
                      Optimized all 15 Google Business Profiles with complete information, high-quality photos, regular posts, and strategic category selection.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Citation Building & Management</h3>
                    <p className="text-gray-700">
                      Created and corrected citations across 50+ local directories, ensuring NAP consistency across all platforms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Review Generation Strategy</h3>
                    <p className="text-gray-700">
                      Implemented a systematic review generation process, increasing average reviews from 15 to 150+ per location with 4.6+ star ratings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Localized Content Creation</h3>
                    <p className="text-gray-700">
                      Developed unique, location-specific landing pages highlighting local menu specials, events, and community involvement.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Local Search Visibility</h3>
                    <p className="text-gray-700">
                      All 15 locations now appear in the Google Local Pack for their primary keywords, with 12 locations ranking #1 in their respective markets.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Organic Traffic Growth</h3>
                    <p className="text-gray-700">
                      Website traffic from local searches increased by 220%, with map views up 340% and direction requests up 280%.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Engagement</h3>
                    <p className="text-gray-700">
                      Phone calls from Google Business Profiles increased by 310%, and online reservations grew by 190%.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Revenue Impact</h3>
                    <p className="text-gray-700">
                      The chain reported a 165% increase in revenue attributed to new customers finding them through local search.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "The local SEO transformation has been incredible. We're now the go-to restaurant in all our markets, and we're seeing customers mention they found us on Google every single day. The increase in foot traffic and online orders has exceeded our expectations."
                </p>
                <p className="text-gray-900 font-semibold">— Marcus Johnson, Regional Marketing Director</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Dominate Your Local Market?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven local SEO strategies
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-blue-600 hover:bg-gray-100"
                onClick={() => window.location.href = '/contact'}
              >
                Get Your Free SEO Audit
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-white hover:text-blue-600"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default RestaurantChainCaseStudy;