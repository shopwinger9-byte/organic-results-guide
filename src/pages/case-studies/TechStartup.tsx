
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, TrendingUp, Users, Award, Calendar } from "lucide-react";

const TechStartupCaseStudy = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Button 
                variant="outline" 
                className="mb-6"
                onClick={() => window.location.href = '/case-studies'}
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Case Studies
              </Button>
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                TechStartup Inc. Success Story
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                How we helped a B2B SaaS company increase organic traffic by 340% in 6 months
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
                <Card className="text-center">
                  <CardHeader>
                    <TrendingUp className="h-12 w-12 text-green-600 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold text-green-600">340%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Traffic Increase</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Users className="h-12 w-12 text-blue-600 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold text-blue-600">150+</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Keywords Ranking</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Award className="h-12 w-12 text-purple-600 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold text-purple-600">280%</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Conversion Increase</p>
                  </CardContent>
                </Card>
                <Card className="text-center">
                  <CardHeader>
                    <Calendar className="h-12 w-12 text-orange-600 mx-auto mb-2" />
                    <CardTitle className="text-3xl font-bold text-orange-600">6</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">Months</p>
                  </CardContent>
                </Card>
              </div>

              <div className="prose max-w-none">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Challenge</h2>
                <p className="text-lg text-gray-600 mb-8">
                  TechStartup Inc., a B2B SaaS company offering project management solutions, was struggling to compete 
                  with established players in their market. Despite having a superior product, they were invisible in 
                  search results for their target keywords, resulting in low organic traffic and limited lead generation.
                </p>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Strategy</h2>
                <div className="bg-gray-50 p-6 rounded-lg mb-8">
                  <h3 className="text-xl font-semibold mb-4">1. Comprehensive SEO Audit</h3>
                  <p className="text-gray-600 mb-4">
                    We conducted a thorough technical SEO audit, identifying critical issues affecting their search visibility.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">2. Keyword Research & Strategy</h3>
                  <p className="text-gray-600 mb-4">
                    Developed a targeted keyword strategy focusing on high-intent, low-competition keywords in the project management space.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">3. Content Optimization</h3>
                  <p className="text-gray-600 mb-4">
                    Created a comprehensive content strategy with topic clusters around project management, team collaboration, and productivity.
                  </p>
                  
                  <h3 className="text-xl font-semibold mb-4">4. Technical Implementation</h3>
                  <p className="text-gray-600">
                    Fixed technical issues, improved site speed, and implemented proper schema markup for better search visibility.
                  </p>
                </div>

                <h2 className="text-3xl font-bold text-gray-900 mb-6">The Results</h2>
                <p className="text-lg text-gray-600 mb-8">
                  Within 6 months, TechStartup Inc. saw remarkable improvements across all key metrics:
                </p>
                <ul className="list-disc pl-6 text-gray-600 mb-8">
                  <li>Organic traffic increased by 340%</li>
                  <li>150+ keywords now ranking on first page</li>
                  <li>Conversion rate improved by 280%</li>
                  <li>Monthly recurring revenue (MRR) increased by 190%</li>
                  <li>Cost per acquisition (CPA) decreased by 65%</li>
                </ul>

                <div className="bg-blue-50 border-l-4 border-blue-500 p-6 mb-8">
                  <blockquote className="text-lg italic text-gray-700">
                    "Working with SEOYourCompany has been a game-changer for our business. The results speak for themselves - 
                    we've gone from being invisible in search to dominating our niche. The team's expertise and dedication 
                    are unmatched."
                  </blockquote>
                  <p className="text-gray-600 mt-4">— Sarah Johnson, CEO of TechStartup Inc.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Be Our Next Success Story?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Let us help you achieve similar results for your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Your Free SEO Audit
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
                >
                  Schedule Consultation
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default TechStartupCaseStudy;
