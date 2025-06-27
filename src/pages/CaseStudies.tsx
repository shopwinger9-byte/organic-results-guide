
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Award, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CaseStudies = () => {
  const caseStudies = [
    {
      company: "TechStartup Inc.",
      industry: "SaaS Technology",
      challenge: "Low organic visibility for competitive keywords",
      results: {
        trafficIncrease: "340%",
        keywordRankings: "150+",
        conversionIncrease: "280%",
        timeframe: "6 months"
      },
      description: "A B2B SaaS company struggling to compete with established players in their market."
    },
    {
      company: "Local Restaurant Chain",
      industry: "Food & Beverage",
      challenge: "Poor local search presence across multiple locations",
      results: {
        trafficIncrease: "220%",
        keywordRankings: "200+",
        conversionIncrease: "190%",
        timeframe: "4 months"
      },
      description: "Regional restaurant chain needed to improve local SEO across 15 locations."
    },
    {
      company: "E-commerce Fashion Brand",
      industry: "Retail & Fashion",
      challenge: "High competition in fashion keywords",
      results: {
        trafficIncrease: "180%",
        keywordRankings: "300+",
        conversionIncrease: "150%",
        timeframe: "8 months"
      },
      description: "Online fashion retailer competing against major fashion e-commerce sites."
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                SEO Success Stories
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Real results from real businesses. See how our proven SEO strategies 
                have transformed companies across various industries.
              </p>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
              <div className="text-center">
                <TrendingUp className="h-16 w-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">500+</h3>
                <p className="text-gray-600">Successful Campaigns</p>
              </div>
              <div className="text-center">
                <Users className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">98%</h3>
                <p className="text-gray-600">Client Satisfaction Rate</p>
              </div>
              <div className="text-center">
                <Award className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                <h3 className="text-3xl font-bold text-gray-900 mb-2">17+</h3>
                <p className="text-gray-600">Years of Experience</p>
              </div>
            </div>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-2xl text-blue-900">{study.company}</CardTitle>
                    <p className="text-gray-600">{study.industry}</p>
                  </CardHeader>
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">The Challenge</h4>
                        <p className="text-gray-600 mb-6">{study.description}</p>
                        <p className="text-gray-700 font-medium">{study.challenge}</p>
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-4">The Results</h4>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="text-center p-4 bg-green-50 rounded-lg">
                            <div className="text-2xl font-bold text-green-600">{study.results.trafficIncrease}</div>
                            <div className="text-sm text-gray-600">Traffic Increase</div>
                          </div>
                          <div className="text-center p-4 bg-blue-50 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600">{study.results.keywordRankings}</div>
                            <div className="text-sm text-gray-600">Keywords Ranking</div>
                          </div>
                          <div className="text-center p-4 bg-purple-50 rounded-lg">
                            <div className="text-2xl font-bold text-purple-600">{study.results.conversionIncrease}</div>
                            <div className="text-sm text-gray-600">Conversion Increase</div>
                          </div>
                          <div className="text-center p-4 bg-orange-50 rounded-lg">
                            <div className="text-2xl font-bold text-orange-600">{study.results.timeframe}</div>
                            <div className="text-sm text-gray-600">Timeframe</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Be Our Next Success Story?
              </h3>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Get Your Free SEO Audit
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default CaseStudies;
