
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Search, Zap, Shield, Globe } from "lucide-react";

const TechnicalSEO = () => {
  const features = [
    "Website Speed Optimization",
    "Mobile-First Indexing Setup",
    "Core Web Vitals Improvement",
    "XML Sitemap Creation & Optimization",
    "Robots.txt Configuration",
    "Schema Markup Implementation",
    "SSL Certificate Setup",
    "Crawl Error Fixes",
    "Duplicate Content Resolution",
    "URL Structure Optimization",
    "Internal Linking Strategy",
    "404 Error Management"
  ];

  const benefits = [
    {
      icon: <Zap className="h-12 w-12 text-blue-600" />,
      title: "Faster Loading Speed",
      description: "Improve your website's loading time by up to 70% with our technical optimization"
    },
    {
      icon: <Search className="h-12 w-12 text-green-600" />,
      title: "Better Crawlability",
      description: "Help search engines discover and index your content more effectively"
    },
    {
      icon: <Shield className="h-12 w-12 text-purple-600" />,
      title: "Enhanced Security",
      description: "Implement security best practices that search engines reward"
    },
    {
      icon: <Globe className="h-12 w-12 text-orange-600" />,
      title: "Mobile Optimization",
      description: "Ensure your site performs perfectly on all devices and screen sizes"
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
                Technical SEO Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Fix technical issues that prevent search engines from properly crawling and indexing your website. 
                Our technical SEO audit identifies and resolves critical problems affecting your rankings.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Get Technical SEO Audit
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  What's Included in Technical SEO
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive technical optimization to improve your website's performance and search visibility
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                    <span className="text-gray-700">{feature}</span>
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
                Ready to Fix Your Technical SEO Issues?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get a comprehensive technical SEO audit and implementation plan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Free Technical Audit
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

export default TechnicalSEO;
