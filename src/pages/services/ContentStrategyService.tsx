import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, FileText, Target, TrendingUp, Users, Calendar, ArrowRight, BarChart } from "lucide-react";

const ContentStrategyService = () => {
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

  const processSteps = [
    {
      step: "01",
      title: "Content Audit",
      description: "Analyze existing content performance and identify gaps in your content strategy"
    },
    {
      step: "02", 
      title: "Strategy Development",
      description: "Create a comprehensive content plan aligned with your business goals and audience needs"
    },
    {
      step: "03",
      title: "Content Creation",
      description: "Develop high-quality, SEO-optimized content that engages and converts"
    },
    {
      step: "04",
      title: "Performance Tracking",
      description: "Monitor content performance and optimize based on data-driven insights"
    }
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

  const faqs = [
    {
      question: "What's included in a content strategy audit?",
      answer: "Our content audit includes analyzing your existing content performance, identifying content gaps, evaluating competitor content, and assessing how well your content aligns with your target keywords and user intent."
    },
    {
      question: "How often should I update my content strategy?",
      answer: "We recommend reviewing and updating your content strategy quarterly to account for changes in search trends, business goals, and market conditions. However, ongoing optimization should be continuous."
    },
    {
      question: "Do you create the content or just provide the strategy?",
      answer: "We offer both strategic planning and content creation services. Our team can develop comprehensive strategies and also create high-quality, SEO-optimized content based on those strategies."
    },
    {
      question: "How do you measure content strategy success?",
      answer: "We track key metrics including organic traffic growth, keyword rankings, engagement rates, conversion rates, and lead generation to measure the effectiveness of your content strategy."
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
              Content Strategy <span className="bg-gradient-to-r from-blue-600 to-green-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Develop a comprehensive content strategy that drives organic traffic, engages your audience, 
              and converts visitors into customers with our data-driven approach.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                onClick={() => window.location.href = '/contact?service=Content Strategy - $399/month'}
              >
                Get Content Strategy Plan
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3"
                onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}
              >
                <Calendar className="h-5 w-5 mr-2" />
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategic Content Development That Drives Results
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our comprehensive content strategy services help you create content that not only ranks well 
                in search engines but also engages your audience and drives meaningful business results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {services.map((service, index) => (
                <div key={index} className="flex items-center p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors">
                  <CheckCircle className="h-6 w-6 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-gray-700">{service}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow duration-300">
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

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Our Content Strategy Process
              </h2>
              <p className="text-xl text-gray-600">
                A systematic approach to developing content that drives business growth
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                  {index < processSteps.length - 1 && (
                    <ArrowRight className="h-6 w-6 text-gray-400 mx-auto mt-6 hidden lg:block" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Content Strategy Pricing</h2>
              <p className="text-xl text-gray-600">Professional content strategy services with transparent pricing</p>
            </div>

            <Card className="max-w-2xl mx-auto border-2 border-blue-200">
              <CardHeader className="text-center bg-blue-50">
                <CardTitle className="text-3xl text-blue-900">Content Strategy Service</CardTitle>
                <div className="text-5xl font-bold text-blue-600 mb-2">$399<span className="text-lg text-gray-600">/month</span></div>
                <CardDescription className="text-lg">Comprehensive content strategy and optimization</CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Content audit and gap analysis</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Keyword-driven content planning</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Editorial calendar development</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Topic cluster strategy</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Monthly content performance reports</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-6 w-6 text-green-600 mr-3 mt-0.5 flex-shrink-0" />
                    <span>Content optimization guidelines</span>
                  </li>
                </ul>

                <div className="bg-green-50 p-4 rounded-lg mb-6">
                  <p className="text-green-800 font-semibold text-center">
                    💰 Save $360/month with our Basic Package at $799/month
                  </p>
                  <p className="text-green-700 text-sm text-center mt-1">
                    Get Content Strategy + 5 other services for maximum value
                  </p>
                </div>

                <Button 
                  size="lg" 
                  className="w-full bg-blue-600 hover:bg-blue-700"
                  onClick={() => window.location.href = '/contact?service=Content Strategy - $399/month'}
                >
                  Get Started with Content Strategy
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Package Comparison CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Want More Value? Check Out Our Complete SEO Packages
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get Content Strategy plus 5 other essential SEO services at a significant discount
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                className="text-lg px-8 py-3"
                onClick={() => window.location.href = '/pricing'}
              >
                <BarChart className="h-5 w-5 mr-2" />
                View Complete Packages
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="text-lg px-8 py-3 border-white text-white hover:text-blue-600"
                onClick={() => window.location.href = '/contact?service=Content Strategy - $399/month'}
              >
                Start with Content Strategy
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Common questions about our content strategy services
              </p>
            </div>

            <div className="space-y-8">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-xl text-gray-900">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Ready to Transform Your Content Strategy?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Get a free content audit and discover how we can help you create content that drives results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3"
                onClick={() => window.location.href = '/contact?service=Content Strategy - $399/month'}
              >
                Get Free Content Audit
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="text-lg px-8 py-3"
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

export default ContentStrategyService;