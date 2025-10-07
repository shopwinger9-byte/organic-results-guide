import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign } from "lucide-react";

const FashionBrandCaseStudy = () => {
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
                E-commerce Fashion Brand: 180% Traffic Increase in Competitive Market
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped an online fashion retailer compete against major e-commerce giants
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
                  <div className="text-4xl font-bold text-gray-900 mb-2">180%</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">300+</div>
                  <div className="text-gray-600">Keywords Ranking</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">150%</div>
                  <div className="text-gray-600">Conversion Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">8 Months</div>
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
                  An emerging online fashion retailer was struggling to gain visibility in the highly competitive fashion e-commerce market. They were competing against established giants with massive marketing budgets and dominant market share.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Key challenges included thin product descriptions, poor site structure, lack of fashion-specific content, and difficulty ranking for competitive fashion keywords.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. E-commerce SEO Audit</h3>
                    <p className="text-gray-700">
                      Comprehensive technical audit covering site architecture, product page optimization, and category structure for the 2,000+ product inventory.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Product Page Optimization</h3>
                    <p className="text-gray-700">
                      Rewrote all product descriptions with unique, keyword-rich content, optimized images with alt text, and implemented schema markup for rich snippets.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Fashion Content Hub</h3>
                    <p className="text-gray-700">
                      Created a fashion blog with style guides, trend reports, and how-to content, establishing the brand as a fashion authority.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Long-Tail Keyword Strategy</h3>
                    <p className="text-gray-700">
                      Targeted 300+ long-tail fashion keywords with lower competition but high purchase intent, focusing on specific styles and occasions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Fashion Influencer Outreach</h3>
                    <p className="text-gray-700">
                      Built relationships with fashion bloggers and influencers, earning high-quality backlinks from fashion authority sites.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Organic Search Growth</h3>
                    <p className="text-gray-700">
                      Organic traffic increased by 180%, with 300+ fashion keywords now ranking on page one of Google search results.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Sales Performance</h3>
                    <p className="text-gray-700">
                      Online sales from organic search grew by 210%, with average order value increasing by 25% due to better-targeted traffic.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Brand Visibility</h3>
                    <p className="text-gray-700">
                      Featured snippets earned for 45 fashion-related queries, and brand mentions increased by 340% across fashion blogs and media.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Customer Acquisition</h3>
                    <p className="text-gray-700">
                      Cost per acquisition decreased by 55% as organic traffic replaced expensive paid advertising channels.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "We never thought we could compete with the big fashion retailers online, but the SEO strategy completely changed our business. We're now ranking alongside brands we used to only dream of competing with, and our organic sales have skyrocketed."
                </p>
                <p className="text-gray-900 font-semibold">— Emma Chen, Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Compete in Your Market?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you achieve similar results with our proven e-commerce SEO strategies
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

export default FashionBrandCaseStudy;