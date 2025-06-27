
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Target, TrendingUp, Users } from "lucide-react";

const ContentStrategy = () => {
  const services = [
    "Content Audit & Gap Analysis",
    "Keyword-Driven Content Planning",
    "Editorial Calendar Development",
    "Topic Cluster Strategy",
    "Competitor Content Analysis",
    "Content Optimization Guidelines",
    "Blog Post Creation & Optimization",
    "Landing Page Content",
    "Long-Form Content Strategy",
    "Content Performance Tracking",
    "Content Refresh & Updates",
    "Content Distribution Strategy"
  ];

  const benefits = [
    {
      icon: <Target className="h-12 w-12 text-blue-600" />,
      title: "Targeted Content",
      description: "Create content that matches your audience's search intent and drives conversions"
    },
    {
      icon: <TrendingUp className="h-12 w-12 text-green-600" />,
      title: "Organic Growth",
      description: "Build sustainable organic traffic through strategic content development"
    },
    {
      icon: <Users className="h-12 w-12 text-purple-600" />,
      title: "Audience Engagement",
      description: "Create content that resonates with your target audience and builds trust"
    },
    {
      icon: <FileText className="h-12 w-12 text-orange-600" />,
      title: "Content Authority",
      description: "Establish your brand as a thought leader in your industry"
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
                Content Strategy Services
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Develop a comprehensive content strategy that drives organic traffic, engages your audience, 
                and converts visitors into customers. Our data-driven approach ensures every piece of content serves a purpose.
              </p>
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700"
                onClick={() => window.location.href = '/contact'}
              >
                Get Content Strategy Plan
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-6">
                  Strategic Content Development
                </h2>
                <p className="text-xl text-gray-600">
                  Comprehensive content strategy services to boost your online presence and drive results
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
                Ready to Transform Your Content Strategy?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Create content that drives traffic, engages your audience, and grows your business
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact'}
                >
                  Get Content Strategy Audit
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

export default ContentStrategy;
