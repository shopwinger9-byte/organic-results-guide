
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Search, FileText, Link, BarChart3, Smartphone, Globe } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Identify high-value keywords and develop winning strategies aligned with your business goals.",
      features: ["Competitor Analysis", "Search Intent Mapping", "Keyword Difficulty Assessment"]
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize your website content, meta tags, and structure for maximum search visibility.",
      features: ["Content Optimization", "Meta Tag Enhancement", "Internal Linking Strategy"]
    },
    {
      icon: BarChart3,
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from properly crawling and indexing your site.",
      features: ["Site Speed Optimization", "Mobile Responsiveness", "Schema Markup"]
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Build high-quality backlinks to increase your domain authority and search rankings.",
      features: ["Guest Posting", "Digital PR", "Broken Link Building"]
    },
    {
      icon: Smartphone,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area.",
      features: ["Google My Business", "Local Citations", "Review Management"]
    },
    {
      icon: Globe,
      title: "Analytics & Reporting",
      description: "Track performance with detailed reports and actionable insights for continuous improvement.",
      features: ["Monthly Reports", "ROI Tracking", "Competitor Monitoring"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Comprehensive SEO Services
          </h2>
          <p className="text-xl text-gray-600">
            From keyword research to technical optimization, we provide end-to-end SEO solutions 
            that drive real business results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-gray-600">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
