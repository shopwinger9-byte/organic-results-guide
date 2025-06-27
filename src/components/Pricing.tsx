
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star, Plus } from "lucide-react";
import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Pricing = () => {
  const [selectedAddons, setSelectedAddons] = useState<{[key: string]: boolean}>({});

  const toggleAddon = (planName: string) => {
    setSelectedAddons(prev => ({
      ...prev,
      [planName]: !prev[planName]
    }));
  };

  const handleGetStarted = (planName: string, price: string) => {
    const params = new URLSearchParams({
      plan: planName,
      price: price,
      addon: selectedAddons[planName] ? 'true' : 'false'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  const plans = [
    {
      name: "Basic",
      price: "799",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Keyword research & strategy",
        "Basic on-page optimization",
        "Monthly performance reports",
        "Google Analytics setup",
        "5 pages optimized",
        "Email support",
        "Competitor analysis (basic)",
        "Meta tags optimization",
        "XML sitemap creation"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "1,299",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Everything in Basic",
        "Technical SEO audit & fixes",
        "Content creation (4 posts/month)",
        "Link building campaign",
        "15 pages optimized",
        "Advanced competitor analysis",
        "Priority support",
        "Local SEO optimization",
        "Google My Business setup",
        "Schema markup implementation",
        "Site speed optimization"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "1,999",
      description: "Advanced SEO for established businesses",
      features: [
        "Everything in Standard",
        "Advanced link building strategy",
        "Content creation (8 posts/month)",
        "25 pages optimized",
        "Dedicated account manager",
        "Advanced technical SEO",
        "E-commerce SEO optimization",
        "International SEO (multi-language)",
        "Advanced tracking & analytics",
        "Conversion rate optimization",
        "Social media integration",
        "Video SEO optimization"
      ],
      popular: false
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "Tailored solutions for large organizations",
      features: [
        "Custom SEO strategy",
        "Multiple website management",
        "Enterprise-level reporting",
        "Dedicated team of specialists",
        "24/7 support",
        "Quarterly strategy reviews",
        "API integrations",
        "Custom dashboard development",
        "Advanced competitor intelligence",
        "Brand reputation management"
      ],
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600">
            Choose the perfect plan for your business. All plans include our satisfaction guarantee.
          </p>
          <div className="mt-4 text-sm text-gray-500">
            ✨ Backed by 17+ years of SEO expertise
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {plans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? 'border-2 border-blue-500 shadow-lg' : ''}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                    <Star className="h-4 w-4 mr-1" />
                    Most Popular
                  </div>
                </div>
              )}
              
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price === "Custom" ? "Custom" : `$${plan.price}`}
                  </span>
                  {plan.price !== "Custom" && (
                    <span className="text-gray-600">/month</span>
                  )}
                </div>
                <CardDescription className="mt-2">
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

                {plan.price !== "Custom" && (
                  <div className="mb-6 p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg border border-purple-200">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-semibold text-purple-900 flex items-center">
                          <Plus className="h-4 w-4 mr-1" />
                          GEO Add-on
                        </h4>
                        <p className="text-xs text-purple-700 mt-1">
                          Generative Engine Optimization
                        </p>
                        <p className="text-xs text-purple-600">
                          Boost brand mentions in ChatGPT, Claude & Gemini
                        </p>
                      </div>
                      <div className="text-right">
                        <Badge 
                          variant={selectedAddons[plan.name] ? "default" : "outline"}
                          className="cursor-pointer"
                          onClick={() => toggleAddon(plan.name)}
                        >
                          +$399
                        </Badge>
                      </div>
                    </div>
                  </div>
                )}
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
                  onClick={() => handleGetStarted(plan.name, plan.price)}
                >
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Not sure which plan is right for you?
          </p>
          <Button 
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
          >
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
