import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check, Building2, Shield, Zap, Users, BarChart3, Settings } from "lucide-react";

const EnterprisePlan = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      plan: "Enterprise",
      price: "Custom Pricing"
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-4">
              <Building2 className="h-16 w-16 text-yellow-400" />
            </div>
            <h1 className="text-5xl font-bold mb-6">
              Enterprise SEO Plan
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Tailored SEO solutions for large organizations and complex digital ecosystems
            </p>
            <div className="flex items-center justify-center mb-8">
              <span className="text-4xl font-bold text-yellow-400">Custom Pricing</span>
            </div>
            <Button 
              size="lg" 
              className="bg-yellow-400 text-gray-900 hover:bg-yellow-300 text-lg px-8 py-3 font-semibold"
              onClick={handleGetStarted}
            >
              Contact Sales Team
            </Button>
          </div>
        </div>
      </section>

      {/* Enterprise Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Enterprise-Grade SEO Solutions
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
              <Card className="border-2 border-blue-200">
                <CardHeader>
                  <Shield className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle>Custom SEO Strategy</CardTitle>
                  <CardDescription>
                    Bespoke strategies tailored to your industry and business goals
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Industry-specific optimization
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Multi-brand management
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Complex site architecture
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-purple-200">
                <CardHeader>
                  <Users className="h-10 w-10 text-purple-600 mb-4" />
                  <CardTitle>Dedicated Team</CardTitle>
                  <CardDescription>
                    Full team of specialists exclusively for your account
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Senior SEO strategist
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Technical SEO specialist
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Content strategist
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="border-2 border-green-200">
                <CardHeader>
                  <BarChart3 className="h-10 w-10 text-green-600 mb-4" />
                  <CardTitle>Enterprise Reporting</CardTitle>
                  <CardDescription>
                    Advanced analytics and custom dashboard solutions
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Custom KPI dashboards
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      Executive-level reporting
                    </li>
                    <li className="flex items-center text-sm">
                      <Check className="h-4 w-4 text-green-500 mr-2" />
                      ROI attribution modeling
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gradient-to-r from-gray-50 to-blue-50 border-2 border-gray-200">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <Building2 className="h-8 w-8 text-gray-700 mr-3" />
                  Complete Enterprise Features
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  <div>
                    <h4 className="font-semibold mb-3 text-gray-900">Strategy & Management</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Custom SEO strategy
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Multiple website management
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Dedicated team of specialists
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Quarterly strategy reviews
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-blue-900">Technical & Integration</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        API integrations
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Custom dashboard development
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Enterprise-level reporting
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Advanced competitor intelligence
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-3 text-purple-900">Support & Reputation</h4>
                    <ul className="space-y-2">
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        24/7 support
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Brand reputation management
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        Crisis management support
                      </li>
                      <li className="flex items-center text-sm">
                        <Check className="h-4 w-4 text-green-500 mr-2" />
                        White-label reporting options
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Enterprise Benefits */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Enterprise SEO?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card className="bg-white p-8">
                <div className="flex items-start space-x-4">
                  <Zap className="h-12 w-12 text-yellow-500 mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Scalable Solutions</h3>
                    <p className="text-gray-600">
                      Handle multiple websites, brands, and complex digital ecosystems with 
                      enterprise-grade SEO infrastructure and processes.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white p-8">
                <div className="flex items-start space-x-4">
                  <Shield className="h-12 w-12 text-blue-500 mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Risk Management</h3>
                    <p className="text-gray-600">
                      Comprehensive SEO strategies that protect your brand reputation 
                      and ensure compliance with industry regulations.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white p-8">
                <div className="flex items-start space-x-4">
                  <Settings className="h-12 w-12 text-purple-500 mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Custom Integration</h3>
                    <p className="text-gray-600">
                      Seamlessly integrate with your existing tech stack, CRM systems, 
                      and business intelligence platforms.
                    </p>
                  </div>
                </div>
              </Card>
              
              <Card className="bg-white p-8">
                <div className="flex items-start space-x-4">
                  <BarChart3 className="h-12 w-12 text-green-500 mt-2" />
                  <div>
                    <h3 className="text-xl font-semibold mb-3">Advanced Analytics</h3>
                    <p className="text-gray-600">
                      Enterprise-level reporting with custom KPIs, attribution modeling, 
                      and executive dashboards for data-driven decisions.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Structure */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-12">
              Enterprise Pricing Structure
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle>Starting Investment</CardTitle>
                  <div className="text-2xl font-bold text-blue-600">$5,000+</div>
                  <CardDescription>Monthly minimum for enterprise solutions</CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Custom Scope</CardTitle>
                  <div className="text-2xl font-bold text-purple-600">Tailored</div>
                  <CardDescription>Based on your specific requirements</CardDescription>
                </CardHeader>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Contract Terms</CardTitle>
                  <div className="text-2xl font-bold text-green-600">12-36 months</div>
                  <CardDescription>Long-term partnership agreements</CardDescription>
                </CardHeader>
              </Card>
            </div>
            
            <div className="mt-12 p-8 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Pricing Factors Include:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Number of websites/domains
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Geographic scope
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Industry complexity
                  </li>
                </ul>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Team size required
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Custom integrations
                  </li>
                  <li className="flex items-center">
                    <Check className="h-4 w-4 text-green-500 mr-2" />
                    Reporting requirements
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-6">
              Ready for Enterprise-Level SEO?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss your specific needs and create a custom SEO solution for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-yellow-400 text-gray-900 hover:bg-yellow-300 font-semibold"
                onClick={handleGetStarted}
              >
                Contact Sales Team
              </Button>
              <Button 
                size="lg" 
                className="text-lg px-8 py-3 bg-white text-gray-900 hover:bg-gray-100"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                Schedule Strategy Call
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default EnterprisePlan;