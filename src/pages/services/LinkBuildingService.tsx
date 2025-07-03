
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link, Users, Newspaper, TrendingUp, CheckCircle, ArrowRight, Star } from "lucide-react";

const LinkBuildingService = () => {
  const handleGetStarted = () => {
    const params = new URLSearchParams({
      service: 'Link Building',
      price: '$899/month'
    });
    window.open(`/contact?${params.toString()}`, '_blank');
  };

  const handlePackageUpgrade = () => {
    const params = new URLSearchParams({
      plan: 'Standard',
      price: '$1299'
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
            <Badge className="mb-4 bg-blue-100 text-blue-800">Link Building & Digital PR</Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Build <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Authority Links</span> That Drive Rankings
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Earn high-quality, authoritative backlinks that boost your domain authority and search rankings. 
              Our white-hat link building strategies focus on sustainable, long-term SEO success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Get Started - $899/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}>
                Free 15-Min Consultation
              </Button>
            </div>
            <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg border border-blue-200 inline-block">
              <p className="text-blue-800 font-semibold flex items-center">
                <Star className="h-5 w-5 mr-2 text-yellow-500" />
                Save $199/month with our Standard Package at $1,299/month
              </p>
              <Button variant="link" className="text-blue-700 p-0 h-auto" onClick={handlePackageUpgrade}>
                Upgrade to Full Package <ArrowRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Service Deep Dive */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Comprehensive Link Building Strategy
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              <Card className="text-center">
                <CardHeader>
                  <Newspaper className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Guest Posting</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">High-quality guest posts on authoritative websites in your industry</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Users className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Digital PR</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Strategic outreach to journalists and influencers for earned media coverage</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <Link className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Broken Link Building</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Find and replace broken links with your content on relevant websites</p>
                </CardContent>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <TrendingUp className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <CardTitle className="text-lg">Resource Page Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Get featured on industry resource pages and directories</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Our Link Building Process
            </h2>
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Link Opportunity Research",
                  description: "Identify high-authority websites and link opportunities in your industry and niche"
                },
                {
                  step: "02", 
                  title: "Content Strategy Development",
                  description: "Create compelling content ideas and pitches for successful outreach campaigns"
                },
                {
                  step: "03",
                  title: "Outreach & Relationship Building",
                  description: "Personal outreach to website owners, editors, and influencers for link placement"
                },
                {
                  step: "04",
                  title: "Content Creation & Placement",
                  description: "Create high-quality content and secure strategic link placements"
                },
                {
                  step: "05",
                  title: "Monitoring & Reporting",
                  description: "Track link performance and provide detailed monthly acquisition reports"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-blue-600 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold mr-6 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              What's Included in Your $899/Month Service
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                {[
                  "10-15 high-quality backlinks per month",
                  "Guest posting on DA 50+ websites",
                  "Digital PR and influencer outreach",
                  "Broken link building campaigns",
                  "Resource page link acquisition",
                  "Competitor backlink analysis"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                {[
                  "Monthly link acquisition reports",
                  "Domain authority tracking",
                  "Link quality auditing and monitoring",
                  "Custom content creation for outreach",
                  "Relationship building with industry contacts",
                  "White-hat, Google-compliant strategies"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Package Comparison CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl font-bold mb-6">
              Get More Value with Our Complete SEO Package
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Link Building + Technical SEO + Content Creation + More
            </p>
            <div className="bg-white/10 backdrop-blur rounded-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="text-left mb-6 md:mb-0">
                  <h3 className="text-2xl font-bold mb-2">Standard Package</h3>
                  <p className="text-blue-100">Comprehensive SEO for growing businesses</p>
                  <ul className="text-sm text-blue-100 mt-4 space-y-1">
                    <li>✓ Complete Link Building Campaign</li>
                    <li>✓ Technical SEO & Optimization</li>
                    <li>✓ Content Creation (4 posts/month)</li>
                    <li>✓ 15 Pages Optimized</li>
                  </ul>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold mb-2">$1,299<span className="text-lg">/month</span></div>
                  <div className="text-yellow-200 font-semibold">Save $199/month</div>
                  <Button size="lg" variant="secondary" className="mt-4" onClick={handlePackageUpgrade}>
                    Upgrade Now
                  </Button>
                </div>
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
                  question: "How many backlinks can I expect per month?",
                  answer: "We typically secure 10-15 high-quality backlinks per month from authoritative websites with DA 50+. Quality is always prioritized over quantity."
                },
                {
                  question: "Are your link building strategies safe and Google-compliant?",
                  answer: "Yes, we only use white-hat link building strategies that comply with Google's guidelines. We focus on earning natural, editorial links through valuable content and relationships."
                },
                {
                  question: "How do you measure the success of link building campaigns?",
                  answer: "We track domain authority growth, referring domain increases, keyword ranking improvements, and organic traffic growth as key success metrics."
                },
                {
                  question: "Do you guarantee specific domain authority improvements?",
                  answer: "While we can't guarantee specific DA scores (as they depend on many factors), our clients typically see steady domain authority growth within 3-6 months of consistent link building."
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

      {/* Contact Form CTA */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Build Authority with Quality Links?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Start with a free consultation or get started with our link building service today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-3" onClick={handleGetStarted}>
                Start Link Building - $899/month
              </Button>
              <Button size="lg" variant="outline" onClick={() => window.open('https://calendly.com/consult-seoyourcompany/30min', '_blank')}>
                Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LinkBuildingService;
