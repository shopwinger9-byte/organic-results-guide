import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign } from "lucide-react";

const FitnessStudioCaseStudy = () => {
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
                Fitness Studio Chain: 320% Traffic Growth Across Multiple Locations
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a boutique fitness chain increase membership sign-ups dramatically
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
                  <div className="text-4xl font-bold text-gray-900 mb-2">320%</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">160+</div>
                  <div className="text-gray-600">Keywords Ranking</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">240%</div>
                  <div className="text-gray-600">Conversion Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <DollarSign className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">5 Months</div>
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
                  A boutique fitness studio chain with 8 locations was facing intense competition from big-box gyms and other boutique studios. Despite offering superior classes and instructors, they were struggling to fill class schedules and attract new members.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Challenges included competing with large gym chains, inconsistent local visibility across locations, lack of class-specific content, and difficulty converting website visitors to trial memberships.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Multi-Location SEO Strategy</h3>
                    <p className="text-gray-700">
                      Developed location-specific SEO strategies for all 8 studios, optimizing for neighborhood-level fitness searches and "near me" queries.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Class & Program Content</h3>
                    <p className="text-gray-700">
                      Created detailed landing pages for each class type (yoga, HIIT, spin, barre), instructor profiles, and workout tips blog content.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Google Business Profile Optimization</h3>
                    <p className="text-gray-700">
                      Optimized all 8 Google Business Profiles with class schedules, photos, videos, and regular posts about special classes and promotions.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Review & Social Proof</h3>
                    <p className="text-gray-700">
                      Implemented member review generation system, growing from average 22 reviews to 180+ per location with 4.8-star ratings.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Conversion Optimization</h3>
                    <p className="text-gray-700">
                      Streamlined trial class booking process, added prominent CTAs, and implemented retargeting for class schedule viewers.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Trial Class Sign-ups</h3>
                    <p className="text-gray-700">
                      Trial class bookings from organic search increased by 320%, with 160+ fitness keywords ranking on page one across all locations.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Local Search Dominance</h3>
                    <p className="text-gray-700">
                      All 8 locations now rank in Google Local Pack for primary class types, outranking major gym chains in their respective neighborhoods.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Membership Growth</h3>
                    <p className="text-gray-700">
                      New membership conversions from SEO traffic increased by 240%, with trial-to-member conversion rate improving by 35%.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Revenue Impact</h3>
                    <p className="text-gray-700">
                      Monthly recurring revenue from SEO-generated members grew by $127K, with customer acquisition cost 72% lower than paid ads.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "Our class schedules went from half-empty to waitlists across all locations. The SEO strategy has made us the first choice for boutique fitness in every neighborhood we serve. We're now planning to open 4 more locations based on this success."
                </p>
                <p className="text-gray-900 font-semibold">— Alex Thompson, Founder & CEO</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Fill Your Class Schedules?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you dominate local fitness searches and attract more members
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

export default FitnessStudioCaseStudy;