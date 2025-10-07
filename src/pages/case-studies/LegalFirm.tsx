import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign } from "lucide-react";

const LegalFirmCaseStudy = () => {
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
                Legal Firm: 300% Traffic Increase Dominating Local Legal Search
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a personal injury law firm outrank established competitors
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
                  <div className="text-4xl font-bold text-gray-900 mb-2">300%</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">120+</div>
                  <div className="text-gray-600">Keywords Ranking</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">250%</div>
                  <div className="text-gray-600">Conversion Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">7 Months</div>
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
                  A mid-sized personal injury law firm was struggling to compete against large, established law firms with decades of market dominance and massive advertising budgets. Despite excellent legal services and client outcomes, they were virtually invisible online.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Key challenges included highly competitive legal keywords, ethical advertising restrictions, building legal authority online, and converting high-intent traffic into consultations.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Legal SEO Foundation</h3>
                    <p className="text-gray-700">
                      Built comprehensive legal authority through detailed practice area pages, case results, attorney credentials, and bar association memberships.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Local Legal Search Optimization</h3>
                    <p className="text-gray-700">
                      Dominated Google Local Pack for personal injury searches, optimized for "near me" queries, and claimed profiles on Avvo, Justia, and FindLaw.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Legal Content Marketing</h3>
                    <p className="text-gray-700">
                      Created authoritative legal guides, FAQ sections addressing common client questions, and case study content demonstrating successful outcomes.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Client Review Strategy</h3>
                    <p className="text-gray-700">
                      Implemented ethical review generation system, growing from 15 reviews to 220+ with 4.9-star rating across Google and legal directories.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Legal Link Building</h3>
                    <p className="text-gray-700">
                      Earned high-authority backlinks from legal publications, local news coverage of cases, and professional legal association sites.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Case Inquiries</h3>
                    <p className="text-gray-700">
                      Consultation requests from organic search increased by 300%, with 120+ legal keywords ranking on page one, including highly competitive terms.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Market Position</h3>
                    <p className="text-gray-700">
                      Now ranking #1 in Google Local Pack for primary practice areas, outranking firms with 10x larger budgets and longer market presence.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Lead Quality</h3>
                    <p className="text-gray-700">
                      Consultation-to-client conversion rate improved by 45% due to better-targeted, high-intent organic traffic versus paid advertising.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Case Value</h3>
                    <p className="text-gray-700">
                      Total case value from SEO-generated leads exceeded $4.2M in the first year, with 380% ROI on SEO investment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "We were spending a fortune on paid advertising with inconsistent results. The SEO strategy has completely transformed our practice. We're now the go-to law firm in our area, and the quality of cases we're seeing has improved dramatically. Best investment we've ever made."
                </p>
                <p className="text-gray-900 font-semibold">— Michael Roberts, Managing Partner</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Dominate Legal Search?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you outrank competitors with proven legal SEO strategies
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

export default LegalFirmCaseStudy;