import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign } from "lucide-react";

const RealEstateCaseStudy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
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
                Real Estate Agency: 280% Traffic Growth in Competitive Market
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a local agency compete with national real estate brands
              </p>
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card>
                <CardContent className="pt-6 text-center">
                  <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">280%</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">220+</div>
                  <div className="text-gray-600">Keywords Ranking</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">200%</div>
                  <div className="text-gray-600">Conversion Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">6 Months</div>
                  <div className="text-gray-600">To Achieve Results</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-gray-700 mb-4 leading-relaxed">
                  A boutique real estate agency with 12 agents was losing market share to national brands like Redfin, Zillow, and Realtor.com. Their local expertise and personalized service were invisible to potential clients searching online.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Main challenges included competing with real estate aggregators, thin property listing pages, lack of neighborhood expertise content, and poor local search visibility.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Real Estate SEO Audit</h3>
                    <p className="text-gray-700">
                      Comprehensive analysis of property pages, IDX integration, and local real estate keyword opportunities across target neighborhoods.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Neighborhood Content Hub</h3>
                    <p className="text-gray-700">
                      Created detailed neighborhood guides for 25 local areas, including schools, amenities, market trends, and lifestyle information.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Property Page Optimization</h3>
                    <p className="text-gray-700">
                      Enhanced all property listings with unique descriptions, optimized images, virtual tours, and schema markup for rich search results.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Agent Profile Development</h3>
                    <p className="text-gray-700">
                      Built authoritative agent profiles highlighting local expertise, certifications, testimonials, and neighborhood specializations.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Local Real Estate Authority</h3>
                    <p className="text-gray-700">
                      Published market reports, home buying guides, and community spotlights, establishing agency as local real estate experts.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Lead Generation</h3>
                    <p className="text-gray-700">
                      Buyer and seller inquiries from organic search increased by 280%, with 220+ real estate keywords ranking on page one.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Market Dominance</h3>
                    <p className="text-gray-700">
                      Now ranking above Zillow and Realtor.com for key neighborhood searches, capturing high-intent local buyers and sellers.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Listing Success</h3>
                    <p className="text-gray-700">
                      New listing contracts increased by 165%, with average days on market decreasing by 23% due to better buyer targeting.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Revenue Growth</h3>
                    <p className="text-gray-700">
                      Total transaction volume from SEO-generated leads exceeded $18.5M in first year, with cost per acquisition 67% lower than paid ads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "We thought we could never compete with the big real estate portals online, but we're now beating them in our local market. Our phone rings constantly with qualified buyers and sellers who found us through Google. Our agents have never been busier."
                </p>
                <p className="text-gray-900 font-semibold">— Jennifer Martinez, Broker/Owner</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Dominate Your Real Estate Market?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you outrank the competition with proven real estate SEO
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

export default RealEstateCaseStudy;