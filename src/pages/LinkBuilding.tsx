
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Link, TrendingUp, Award, Users } from "lucide-react";

const LinkBuilding = () => {
  const strategies = [
    "High-Authority Guest Posting",
    "Broken Link Building",
    "Resource Page Link Building",
    "Digital PR & Media Outreach",
    "Competitor Link Analysis",
    "HARO (Help a Reporter Out)",
    "Industry Directory Submissions",
    "Influencer Outreach",
    "Content-Based Link Earning",
    "Local Business Citations",
    "Unlinked Brand Mentions",
    "Internal Link Optimization"
  ];

  const benefits = [
    {
      icon: <TrendingUp className="h-12 w-12 text-blue-600" />,
      title: "Higher Rankings",
      description: "Quality backlinks are a top ranking factor that directly improve your search positions"
    },
    {
      icon: <Award className="h-12 w-12 text-green-600" />,
      title: "Domain Authority",
      description: "Build your website's authority and credibility in your industry"
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Referral Traffic",
      description: "Generate qualified traffic from high-quality websites in your niche"
    },
    {
      icon: <Link className="h-12 w-12 text-orange-600" />,
      title: "Brand Exposure",
      description: "Increase brand visibility and awareness across relevant websites"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        <section className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                Link Building Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Earn high-quality backlinks from authoritative websites to boost your search rankings 
                and domain authority. Our white-hat link building strategies deliver sustainable results.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Start Link Building Campaign
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Our Link Building Strategies
                </h2>
                <p className="text-xl text-gray-600">
                  Proven techniques to earn quality backlinks that improve your search rankings
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {strategies.map((strategy, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <span className="text-gray-700">{strategy}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="text-center">
                    <CardHeader>
                      <div className="flex justify-center mb-4">
                        {benefit.icon}
                      </div>
                      <CardTitle className="text-xl">{benefit.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-gray-600">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Ready to Build High-Quality Backlinks?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Start earning authoritative backlinks that boost your search rankings
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Link Building Quote
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

export default LinkBuilding;
