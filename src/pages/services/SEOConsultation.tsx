
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MessageCircle, Clock, Users, FileText, CheckCircle, Calendar } from "lucide-react";

const SEOConsultation = () => {
  const handleBookFreeCall = () => {
    window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank');
  };

  const handleBook60MinCall = () => {
    const params = new URLSearchParams({
      service: 'SEO Consultancy Session (60 min)',
      price: '$50'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  const handleBookPackage = () => {
    const params = new URLSearchParams({
      service: 'Comprehensive SEO Consultancy Package',
      price: '$499'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">SEO Consultation Services</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Expert <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">SEO Consultation</span> & Strategy
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Get personalized SEO advice from our experts. Whether you need a quick consultation 
              or comprehensive strategy development, we're here to help you succeed.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={handleBookFreeCall}>
                Book Free 15-Min Call
              </Button>
              <Button size="lg" variant="outline" onClick={handleBook60MinCall}>
                60-Min Session - $50
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Options */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Choose Your Consultation Level
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              
              {/* Free Consultation */}
              <Card className="text-center border-2 border-green-200 hover:border-green-300 transition-colors">
                <CardHeader>
                  <MessageCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl mb-2">Free Consultation</CardTitle>
                  <div className="text-3xl font-bold text-green-600 mb-2">FREE</div>
                  <CardDescription>15 minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Initial SEO assessment</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Package recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Basic SEO audit overview</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Q&A session</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-green-600 hover:bg-green-700" 
                    onClick={handleBookFreeCall}
                  >
                    <Calendar className="h-4 w-4 mr-2" />
                    Book Free Call
                  </Button>
                </CardContent>
              </Card>

              {/* 60-Minute Session */}
              <Card className="text-center border-2 border-blue-200 hover:border-blue-300 transition-colors">
                <CardHeader>
                  <Clock className="h-16 w-16 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl mb-2">SEO Consultancy Session</CardTitle>
                  <div className="text-3xl font-bold text-blue-600 mb-2">$50</div>
                  <CardDescription>60 minutes</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Deep-dive strategy discussion</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Actionable recommendations</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Priority action items</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Follow-up email summary</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-blue-600 hover:bg-blue-700" 
                    onClick={handleBook60MinCall}
                  >
                    Book Session - $50
                  </Button>
                </CardContent>
              </Card>

              {/* Comprehensive Package */}
              <Card className="text-center border-2 border-purple-200 hover:border-purple-300 transition-colors relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-purple-600 text-white">Most Popular</Badge>
                </div>
                <CardHeader>
                  <FileText className="h-16 w-16 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-2xl mb-2">Comprehensive Package</CardTitle>
                  <div className="text-3xl font-bold text-purple-600 mb-2">$499</div>
                  <CardDescription>Multiple sessions + deliverables</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6 text-left">
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Complete SEO audit</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Custom strategy development</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Implementation roadmap</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">3 follow-up sessions</span>
                    </li>
                    <li className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                      <span className="text-sm">Written strategy document</span>
                    </li>
                  </ul>
                  <Button 
                    className="w-full bg-purple-600 hover:bg-purple-700" 
                    onClick={handleBookPackage}
                  >
                    Get Started - $499
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What to Expect */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What to Expect from Your Consultation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Users className="h-6 w-6 text-blue-600 mr-3" />
                    Before Your Call
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Pre-consultation questionnaire</li>
                    <li>• Website and competitor review</li>
                    <li>• Initial SEO analysis preparation</li>
                    <li>• Agenda customization based on your needs</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <MessageCircle className="h-6 w-6 text-green-600 mr-3" />
                    During Your Call
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Detailed discussion of your goals</li>
                    <li>• SEO audit findings review</li>
                    <li>• Strategic recommendations</li>
                    <li>• Q&A and specific advice</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <FileText className="h-6 w-6 text-purple-600 mr-3" />
                    After Your Call
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Follow-up email with summary</li>
                    <li>• Action items and next steps</li>
                    <li>• Resource recommendations</li>
                    <li>• Access to additional materials</li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Clock className="h-6 w-6 text-orange-600 mr-3" />
                    Ongoing Support
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Email support for follow-up questions</li>
                    <li>• Package upgrade recommendations</li>
                    <li>• Future consultation discounts</li>
                    <li>• Access to our resource library</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Our Consultation */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Why Choose Our SEO Consultation?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Users className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">17+ Years Experience</h3>
                <p className="text-gray-600">
                  Our team has worked with 500+ businesses across various industries, 
                  providing proven strategies that deliver results.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Actionable Insights</h3>
                <p className="text-gray-600">
                  We don't just identify problems – we provide specific, actionable solutions 
                  that you can implement immediately.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <FileText className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Comprehensive Analysis</h3>
                <p className="text-gray-600">
                  Every consultation includes detailed analysis of your website, 
                  competitors, and market opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-8">
              {[
                {
                  question: "What's the difference between the free and paid consultations?",
                  answer: "The free 15-minute consultation provides a basic overview and package recommendations. Paid sessions offer deeper analysis, specific strategies, and detailed action plans."
                },
                {
                  question: "Do I need to prepare anything before our call?",
                  answer: "We'll send you a pre-consultation questionnaire after booking. Having your website analytics access and specific goals ready will help maximize our time together."
                },
                {
                  question: "Can I upgrade from a consultation to a full service package?",
                  answer: "Absolutely! If you decide to move forward with one of our service packages, we'll credit your consultation fee toward the first month."
                },
                {
                  question: "Do you provide consultation for international businesses?",
                  answer: "Yes, we work with businesses worldwide and have experience with international SEO strategies and multi-market optimization."
                }
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{item.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{item.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Ready to Get Expert SEO Advice?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Start with a free consultation or dive deep with our comprehensive analysis.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" className="text-lg px-8 py-3" onClick={handleBookFreeCall}>
                <Calendar className="h-5 w-5 mr-2" />
                Book Free 15-Min Call
              </Button>
              <Button size="lg" variant="outline" className="text-lg px-8 py-3 border-white text-white hover:text-blue-600" onClick={handleBook60MinCall}>
                60-Min Session - $50
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SEOConsultation;
