
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, MapPin, Star, Phone, Clock } from "lucide-react";

const LocalSEO = () => {
  const services = [
    "Google Business Profile Optimization",
    "Local Citations & Directory Listings",
    "Local Keyword Research & Targeting",
    "Review Management & Generation",
    "NAP (Name, Address, Phone) Consistency",
    "Local Landing Page Creation",
    "Local Schema Markup Implementation",
    "Google Maps Optimization",
    "Local Competitor Analysis",
    "Multi-Location SEO Management",
    "Local Content Strategy",
    "Mobile Local Search Optimization"
  ];

  const benefits = [
    {
      icon: <MapPin className="h-12 w-12 text-blue-600" />,
      title: "Local Visibility",
      description: "Appear in local search results when customers search for your services nearby"
    },
    {
      icon: <Star className="h-12 w-12 text-green-600" />,
      title: "More Reviews",
      description: "Increase positive customer reviews and manage your online reputation"
    },
    {
      icon: <Phone className="h-12 w-12 text-purple-600" />,
      title: "More Calls",
      description: "Generate more phone calls and inquiries from local customers"
    },
    {
      icon: <Clock className="h-12 w-12 text-orange-600" />,
      title: "Foot Traffic",
      description: "Drive more customers to your physical location with local search optimization"
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
                Local SEO Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Dominate local search results and attract more customers to your business. 
                Our local SEO strategies help you rank higher in Google Maps and local searches.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Get Local SEO Audit
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Complete Local SEO Services
                </h2>
                <p className="text-xl text-gray-600">
                  Everything you need to dominate local search results and attract nearby customers
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {services.map((service, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <span className="text-gray-700">{service}</span>
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
                Ready to Dominate Local Search?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get more local customers with our proven local SEO strategies
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact'}
                >
                  Start Local SEO Campaign
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

export default LocalSEO;
