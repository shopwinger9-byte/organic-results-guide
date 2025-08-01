
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Search, FileText, Link, BarChart3, Smartphone, Globe, Target, Zap, Users } from "lucide-react";

const ServicesPage = () => {
  const services = [
    {
      icon: Search,
      title: "Keyword Research & Strategy",
      description: "Comprehensive keyword analysis to identify high-value opportunities that align with your business goals and target audience.",
      features: ["Competitor keyword analysis", "Search intent mapping", "Long-tail keyword discovery", "Keyword difficulty assessment", "Local keyword research", "Seasonal trend analysis"],
      link: "/services/keyword-research-strategy"
    },
    {
      icon: FileText,
      title: "On-Page SEO",
      description: "Optimize your website's content, structure, and HTML elements to improve search engine visibility and user experience.",
      features: ["Title tag optimization", "Meta description enhancement", "Header tag structure", "Content optimization", "Internal linking strategy", "Image SEO optimization"],
      link: "/services/on-page-seo"
    },
    {
      icon: BarChart3,
      title: "Technical SEO",
      description: "Fix technical issues that prevent search engines from properly crawling, indexing, and ranking your website.",
      features: ["Site speed optimization", "Mobile responsiveness", "XML sitemap creation", "Robot.txt optimization", "Schema markup implementation", "Core Web Vitals improvement"],
      link: "/services/technical-seo"
    },
    {
      icon: Link,
      title: "Link Building",
      description: "Build high-quality, authoritative backlinks to increase your domain authority and improve search rankings.",
      features: ["Guest posting campaigns", "Digital PR outreach", "Resource page link building", "Broken link building", "Competitor backlink analysis", "Link quality auditing"],
      link: "/services/link-building"
    },
    {
      icon: Smartphone,
      title: "Local SEO",
      description: "Dominate local search results and attract customers in your geographic area with targeted local optimization.",
      features: ["Google My Business optimization", "Local citation building", "Review management", "Local keyword targeting", "NAP consistency", "Local content creation"],
      link: "/services/local-seo"
    },
    {
      icon: Globe,
      title: "Content Strategy",
      description: "Develop and execute content strategies that engage your audience and support your SEO objectives.",
      features: ["Content calendar development", "Blog post creation", "Infographic design", "Video SEO", "Content gap analysis", "Content performance tracking"],
      link: "/services/content-strategy"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Comprehensive <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">SEO Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              From keyword research to technical optimization, we provide end-to-end SEO solutions 
              that drive real business results and sustainable growth.
            </p>
            <Button 
              size="lg" 
              className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
              onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
            >
              Get Free SEO Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => {
                const Icon = service.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300 h-full">
                    <CardHeader>
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                        <Icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-gray-600">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <ul className="space-y-2 mb-6">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full mr-3"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                      <Button variant="outline" className="w-full" asChild>
                        <a href={service.link}>Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our SEO Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <Target className="h-16 w-16 text-blue-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Proven Results</h3>
                <p className="text-gray-600">
                  17+ years of experience with over 500 successful campaigns. 
                  Average 200% increase in organic traffic within 6 months.
                </p>
              </div>
              
              <div className="text-center">
                <Zap className="h-16 w-16 text-green-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Latest Techniques</h3>
                <p className="text-gray-600">
                  We stay ahead of algorithm changes and industry trends, 
                  including cutting-edge Generative Engine Optimization.
                </p>
              </div>
              
              <div className="text-center">
                <Users className="h-16 w-16 text-purple-600 mx-auto mb-6" />
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Dedicated Support</h3>
                <p className="text-gray-600">
                  Work directly with experienced SEO specialists who understand 
                  your business goals and provide personalized strategies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Transform Your Online Presence?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get a free SEO audit and discover how our services can help you dominate search results.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-3"
                onClick={() => window.location.href = '/contact'}
              >
                Get Free SEO Audit
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:text-blue-600"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServicesPage;
