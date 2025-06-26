
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Star } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "999",
      description: "Perfect for small businesses starting their SEO journey",
      features: [
        "Keyword research & strategy",
        "Basic on-page optimization",
        "Monthly performance reports",
        "Google Analytics setup",
        "5 pages optimized",
        "Email support"
      ],
      popular: false
    },
    {
      name: "Standard",
      price: "2,499",
      description: "Comprehensive SEO for growing businesses",
      features: [
        "Everything in Basic",
        "Technical SEO audit & fixes",
        "Content creation (4 posts/month)",
        "Link building campaign",
        "15 pages optimized",
        "Competitor analysis",
        "Priority support"
      ],
      popular: true
    },
    {
      name: "Premium",
      price: "4,999",
      description: "Advanced SEO for established businesses",
      features: [
        "Everything in Standard",
        "Advanced link building",
        "Content creation (8 posts/month)",
        "Local SEO optimization",
        "30 pages optimized",
        "Custom reporting dashboard",
        "Dedicated account manager"
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
        "Advanced analytics & reporting",
        "White-label options",
        "Unlimited pages optimized",
        "24/7 support",
        "Quarterly strategy reviews"
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
                
                <Button 
                  className={`w-full ${plan.popular ? 'bg-blue-600 hover:bg-blue-700' : ''}`}
                  variant={plan.popular ? 'default' : 'outline'}
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
          <Button variant="outline" size="lg">
            Schedule a Free Consultation
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
