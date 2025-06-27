
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TrendingUp, Users, Award, ArrowRight, ExternalLink } from "lucide-react";
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
      description: "A B2B SaaS company struggling to compete with established players in their market.",
      slug: "/case-studies/tech-startup"
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
      description: "Regional restaurant chain needed to improve local SEO across 15 locations.",
      slug: "/case-studies/restaurant-chain"
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
      description: "Online fashion retailer competing against major fashion e-commerce sites.",
      slug: "/case-studies/fashion-brand"
    },
    {
      company: "Healthcare Clinic",
      industry: "Healthcare",
      challenge: "Limited online visibility for medical services",
      results: {
        trafficIncrease: "260%",
        keywordRankings: "180+",
        conversionIncrease: "210%",
        timeframe: "5 months"
      },
      description: "Multi-specialty clinic needed to attract more patients through local search.",
      slug: "/case-studies/healthcare-clinic"
    },
    {
      company: "Legal Firm",
      industry: "Legal Services",
      challenge: "Competing against established law firms",
      results: {
        trafficIncrease: "300%",
        keywordRankings: "120+",
        conversionIncrease: "250%",
        timeframe: "7 months"
      },
      description: "Personal injury law firm seeking to dominate local search results.",
      slug: "/case-studies/legal-firm"
    },
    {
      company: "Real Estate Agency",
      industry: "Real Estate",
      challenge: "Low visibility in competitive real estate market",
      results: {
        trafficIncrease: "280%",
        keywordRankings: "220+",
        conversionIncrease: "200%",
        timeframe: "6 months"
      },
      description: "Local real estate agency competing with major national brands.",
      slug: "/case-studies/real-estate"
    },
    {
      company: "Fitness Studio Chain",
      industry: "Fitness & Wellness",
      challenge: "Poor local search rankings across multiple locations",
      results: {
        trafficIncrease: "320%",
        keywordRankings: "160+",
        conversionIncrease: "240%",
        timeframe: "5 months"
      },
      description: "Boutique fitness studio chain needed to increase membership sign-ups.",
      slug: "/case-studies/fitness-studio"
    },
    {
      company: "Manufacturing Company",
      industry: "B2B Manufacturing",
      challenge: "Lack of online presence in industrial market",
      results: {
        trafficIncrease: "400%",
        keywordRankings: "140+",
        conversionIncrease: "320%",
        timeframe: "8 months"
      },
      description: "Industrial manufacturing company seeking B2B lead generation.",
      slug: "/case-studies/manufacturing"
    },
    {
      company: "Dental Practice",
      industry: "Healthcare/Dental",
      challenge: "Competition from corporate dental chains",
      results: {
        trafficIncrease: "250%",
        keywordRankings: "130+",
        conversionIncrease: "180%",
        timeframe: "4 months"
      },
      description: "Family dental practice competing against large dental corporations.",
      slug: "/case-studies/dental-practice"
    },
    {
      company: "Home Services Company",
      industry: "Home Services",
      challenge: "Seasonal traffic fluctuations and local competition",
      results: {
        trafficIncrease: "380%",
        keywordRankings: "200+",
        conversionIncrease: "290%",
        timeframe: "6 months"
      },
      description: "HVAC and plumbing services company needing year-round lead generation.",
      slug: "/case-studies/home-services"
    },
    {
      company: "Financial Services Firm",
      industry: "Financial Services",
      challenge: "Strict compliance requirements and high competition",
      results: {
        trafficIncrease: "220%",
        keywordRankings: "110+",
        conversionIncrease: "160%",
        timeframe: "9 months"
      },
      description: "Independent financial advisory firm competing with large institutions.",
      slug: "/case-studies/financial-services"
    },
    {
      company: "Educational Institution",
      industry: "Education",
      challenge: "Declining enrollment and online competition",
      results: {
        trafficIncrease: "290%",
        keywordRankings: "170+",
        conversionIncrease: "230%",
        timeframe: "7 months"
      },
      description: "Private college seeking to increase student enrollment through digital marketing.",
      slug: "/case-studies/education"
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
                Real results from real businesses across various industries. See how our proven SEO strategies 
                have transformed companies and delivered measurable growth.
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

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader className="bg-gray-50">
                    <CardTitle className="text-xl text-blue-900">{study.company}</CardTitle>
                    <p className="text-gray-600 text-sm">{study.industry}</p>
                  </CardHeader>
                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-4 text-sm">{study.description}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="text-lg font-bold text-green-600">{study.results.trafficIncrease}</div>
                        <div className="text-xs text-gray-600">Traffic Increase</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="text-lg font-bold text-blue-600">{study.results.keywordRankings}</div>
                        <div className="text-xs text-gray-600">Keywords Ranking</div>
                      </div>
                      <div className="text-center p-3 bg-purple-50 rounded-lg">
                        <div className="text-lg font-bold text-purple-600">{study.results.conversionIncrease}</div>
                        <div className="text-xs text-gray-600">Conversion Increase</div>
                      </div>
                      <div className="text-center p-3 bg-orange-50 rounded-lg">
                        <div className="text-lg font-bold text-orange-600">{study.results.timeframe}</div>
                        <div className="text-xs text-gray-600">Timeframe</div>
                      </div>
                    </div>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      className="w-full"
                      onClick={() => window.location.href = study.slug}
                    >
                      Read Full Story
                      <ExternalLink className="ml-2 h-4 w-4" />
                    </Button>
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
