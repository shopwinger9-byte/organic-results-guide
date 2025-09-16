import Header from "@/components/Header";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Users, Clock, Award } from "lucide-react";

const PricingPage = () => {
  const additionalPlans = [
    {
      name: "Startup Boost",
      price: "399",
      description: "Quick wins for new businesses",
      features: [
        "Initial keyword research",
        "Basic website audit",
        "Google My Business setup",
        "3 pages optimized",
        "One-time consultation"
      ],
      link: "/pricing/startup-boost"
    },
    {
      name: "E-commerce SEO",
      price: "1,599",
      description: "Specialized for online stores",
      features: [
        "Product page optimization",
        "Category page SEO",
        "Shopping feed optimization",
        "Review management",
        "Conversion tracking"
      ],
      link: "/pricing/ecommerce-seo"
    },
    {
      name: "Local Business",
      price: "899",
      description: "Dominate your local market",
      features: [
        "Google My Business optimization",
        "Local citation building",
        "Review management",
        "Local content creation",
        "Map pack optimization"
      ],
      link: "/pricing/local-business"
    },
    {
      name: "Content Marketing",
      price: "1,199",
      description: "Content-driven SEO strategy",
      features: [
        "Monthly blog posts (8)",
        "Content calendar",
        "Topic research",
        "Internal linking strategy",
        "Content performance tracking"
      ],
      link: "/pricing/content-marketing"
    },
    {
      name: "Technical SEO Audit",
      price: "499",
      description: "One-time comprehensive audit",
      features: [
        "Complete technical analysis",
        "Site speed optimization plan",
        "Mobile optimization review",
        "Detailed recommendations",
        "Implementation roadmap"
      ],
      link: "/pricing/technical-seo-audit"
    },
    {
      name: "Link Building Only",
      price: "799",
      description: "Focused link acquisition",
      features: [
        "High-quality link building",
        "Guest post campaigns",
        "Digital PR outreach",
        "Monthly link reports",
        "Competitor analysis"
      ],
      link: "/pricing/link-building-only"
    }
  ];

  return (
    <div className="min-h-screen">
      <Header />
      <div className="pt-16">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-blue-50 to-green-50 py-20">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-5xl font-bold text-gray-900 mb-6">
                SEO Pricing Plans
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Choose the perfect SEO package for your business. All plans include our 
                satisfaction guarantee and 17+ years of proven expertise.
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-blue-600" />
                  500+ Happy Clients
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-green-600" />
                  17+ Years Experience
                </div>
                <div className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-purple-600" />
                  Satisfaction Guarantee
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Pricing Component */}
        <Pricing />

        {/* Additional Specialized Plans */}
        <section className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Specialized SEO Plans
                </h2>
                <p className="text-xl text-gray-600">
                  Targeted solutions for specific business needs and industries
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {additionalPlans.map((plan, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <CardTitle className="text-xl">{plan.name}</CardTitle>
                      <div className="mt-2">
                        <span className="text-3xl font-bold text-gray-900">
                          ${plan.price}
                        </span>
                        <span className="text-gray-600">/month</span>
                      </div>
                      <CardDescription>
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-600">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className="w-full" 
                        variant="outline"
                        asChild
                      >
                        <a href={plan.link}>Learn More</a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    What's included in the setup?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    All plans include initial website audit, keyword research, competitor analysis, 
                    and custom strategy development. No hidden fees.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    How long until I see results?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Most clients see initial improvements within 30-60 days, with significant 
                    results typically appearing within 3-6 months.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Can I switch plans anytime?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Yes! You can upgrade or downgrade your plan at any time. Changes take 
                    effect at your next billing cycle.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">
                    Do you offer custom solutions?
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Absolutely! Our Enterprise plan can be fully customized to meet your 
                    specific business needs and goals.
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
                Ready to Boost Your Rankings?
              </h2>
              <p className="text-xl text-blue-100 mb-8">
                Start your SEO journey today with a free consultation and discover 
                which plan is perfect for your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Started Today
                </Button>
                <Button 
                  size="lg" 
                  className="text-lg px-8 py-3 bg-white text-blue-600 hover:bg-blue-50"
                  onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
                >
                  Schedule Free Consultation
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

export default PricingPage;