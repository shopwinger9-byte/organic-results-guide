import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Target, Users, DollarSign } from "lucide-react";

const HealthcareClinicCaseStudy = () => {
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
                Healthcare Clinic: 260% Traffic Growth Through Medical SEO
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a multi-specialty clinic attract more patients through strategic local SEO
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
                  <div className="text-4xl font-bold text-gray-900 mb-2">260%</div>
                  <div className="text-gray-600">Traffic Increase</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">180+</div>
                  <div className="text-gray-600">Keywords Ranking</div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6 text-center">
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <div className="text-4xl font-bold text-gray-900 mb-2">210%</div>
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
                  A well-established multi-specialty healthcare clinic was experiencing declining patient acquisition despite offering excellent medical services. They were virtually invisible in local search results for their medical specialties.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Main issues included HIPAA-compliant content creation, competing with hospital systems, lack of medical authority signals, and poor mobile experience for patients searching on-the-go.
                </p>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Medical SEO Audit</h3>
                    <p className="text-gray-700">
                      Conducted comprehensive healthcare-focused SEO audit, ensuring HIPAA compliance while optimizing for medical search terms.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Medical Content Strategy</h3>
                    <p className="text-gray-700">
                      Created authoritative medical content for each specialty, including condition guides, treatment information, and physician bios with credentials.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Local Healthcare SEO</h3>
                    <p className="text-gray-700">
                      Optimized Google Business Profile for medical services, managed healthcare directories (Healthgrades, Vitals, Zocdoc), and implemented local schema markup.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Patient Review Management</h3>
                    <p className="text-gray-700">
                      Developed HIPAA-compliant review generation system, increasing positive patient reviews from 28 to 350+ with 4.8-star average rating.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Mobile Optimization</h3>
                    <p className="text-gray-700">
                      Redesigned mobile experience with click-to-call, easy appointment booking, and fast-loading pages for patients searching for immediate care.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <div className="space-y-4">
                  <div className="border-l-4 border-green-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Patient Acquisition</h3>
                    <p className="text-gray-700">
                      New patient appointments from organic search increased by 260%, with 180+ medical keywords ranking on page one.
                    </p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Local Visibility</h3>
                    <p className="text-gray-700">
                      Now appearing in Google Local Pack for all primary specialties, with 340% increase in "near me" searches driving appointments.
                    </p>
                  </div>
                  <div className="border-l-4 border-purple-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Online Reputation</h3>
                    <p className="text-gray-700">
                      Patient review volume increased by 1,150%, establishing clinic as top-rated healthcare provider in the region.
                    </p>
                  </div>
                  <div className="border-l-4 border-orange-600 pl-4">
                    <h3 className="font-semibold text-gray-900 mb-2">Revenue Growth</h3>
                    <p className="text-gray-700">
                      Patient revenue attributed to organic search grew by 285%, with reduced dependence on expensive paid advertising.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Client Testimonial</h3>
                <p className="text-gray-700 italic mb-4 leading-relaxed">
                  "As healthcare providers, we were skeptical about SEO, but the results speak for themselves. We're now the first choice for patients in our area, and our appointment books are consistently full. The HIPAA-compliant approach gave us confidence throughout the process."
                </p>
                <p className="text-gray-900 font-semibold">— Dr. Sarah Mitchell, Medical Director</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gradient-to-br from-blue-600 to-green-600 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl font-bold mb-6">Ready to Grow Your Medical Practice?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let us help you attract more patients with HIPAA-compliant SEO strategies
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

export default HealthcareClinicCaseStudy;